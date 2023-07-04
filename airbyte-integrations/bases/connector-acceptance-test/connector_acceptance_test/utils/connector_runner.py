#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#


import json
import logging
import sys
from pathlib import Path
from typing import Iterable, List, Mapping, Optional

import anyio
import dagger
from airbyte_protocol.models import AirbyteMessage, OrchestratorType
from airbyte_protocol.models import Type as AirbyteMessageType
from pydantic import ValidationError


class ConnectorRunner:
    def __init__(
        self,
        image_name: str,
        volume: Path,
        connector_configuration_path: Optional[Path] = None,
        custom_environment_variables: Optional[Mapping] = {},
    ):
        self.image_name = image_name
        self._runs = 0
        self._volume_base = volume
        self._connector_configuration_path = connector_configuration_path
        self._custom_environment_variables = custom_environment_variables

    @property
    def output_folder(self) -> Path:
        return self._volume_base / f"run_{self._runs}" / "output"

    @property
    def input_folder(self) -> Path:
        return self._volume_base / f"run_{self._runs}" / "input"

    def call_spec(self, **kwargs) -> List[AirbyteMessage]:
        cmd = "spec"
        output = list(self.run(cmd=cmd, **kwargs))
        return output

    def call_check(self, config, **kwargs) -> List[AirbyteMessage]:
        cmd = "check --config /data/tap_config.json"
        output = list(self.run(cmd=cmd, config=config, **kwargs))
        return output

    def call_discover(self, config, **kwargs) -> List[AirbyteMessage]:
        cmd = "discover --config /data/tap_config.json"
        output = list(self.run(cmd=cmd, config=config, **kwargs))
        return output

    def call_read(self, config, catalog, **kwargs) -> List[AirbyteMessage]:
        cmd = "read --config /data/tap_config.json --catalog /data/catalog.json"
        output = list(self.run(cmd=cmd, config=config, catalog=catalog, **kwargs))
        return output

    def call_read_with_state(self, config, catalog, state, **kwargs) -> List[AirbyteMessage]:
        cmd = "read --config /data/tap_config.json --catalog /data/catalog.json --state /data/state.json"
        output = list(self.run(cmd=cmd, config=config, catalog=catalog, state=state, **kwargs))
        return output

    def get_dagger_container(self, dagger_client):
        if Path("/test_input/connector_image.tar").exists():
            image_tar_file = dagger_client.host().directory("/test_input", include="connector_image.tar").file("connector_image.tar")
            return dagger_client.container().import_(image_tar_file)
        else:
            return dagger_client.container().from_(self.image_name)

    async def run_in_dagger(self, cmd: str, options: dict, raise_container_errors: bool = True):

        async with dagger.Connection(dagger.Config(log_output=sys.stderr)) as dagger_client:
            container = self.get_dagger_container(dagger_client)
            if config := options.get("config"):
                container = container.with_new_file("/data/tap_config.json", json.dumps(dict(config)))
            if state := options.get("state"):
                container = container.with_new_file("/data/state.json", json.dumps(state))
            if catalog := options.get("catalog"):
                container = container.with_new_file("/data/catalog.json", catalog.json())
            for key, value in self._custom_environment_variables.items():
                container = container.with_env_variable(key, value)
            try:
                output = await container.with_exec(cmd.split(" ")).stdout()
            except Exception as e:
                if raise_container_errors:
                    raise e
                else:
                    output = e.stdout

        airbyte_messages = []
        for line in output.splitlines():
            try:
                airbyte_message = AirbyteMessage.parse_raw(line)
                if airbyte_message.type is AirbyteMessageType.CONTROL and airbyte_message.control.type is OrchestratorType.CONNECTOR_CONFIG:
                    self._persist_new_configuration(airbyte_message.control.connectorConfig.config, int(airbyte_message.control.emitted_at))
                airbyte_messages.append(airbyte_message)
            except ValidationError as exc:
                logging.warning("Unable to parse connector's output %s, error: %s", line, exc)
        return airbyte_messages

    def run(self, cmd, config=None, state=None, catalog=None, raise_container_error: bool = True, **kwargs) -> Iterable[AirbyteMessage]:
        self._runs += 1
        yield from anyio.run(self.run_in_dagger, cmd, {"config": config, "state": state, "catalog": catalog}, raise_container_error)

    def get_container_env_variable(self, name: str):
        return anyio.run(self.async_get_container_variable, name)

    async def async_get_container_variable(self, name: str):
        async with dagger.Connection(dagger.Config(log_output=sys.stderr)) as dagger_client:
            return await self.get_dagger_container(dagger_client).env_variable(name)

    def get_container_label(self, label: str):
        return anyio.run(self.async_get_container_label, label)

    async def async_get_container_label(self, label: str):
        async with dagger.Connection(dagger.Config(log_output=sys.stderr)) as dagger_client:
            return await self.get_dagger_container(dagger_client).label(label)

    def get_container_entrypoint(self):
        entrypoint = anyio.run(self.async_get_container_entrypoint)
        return " ".join(entrypoint)

    async def async_get_container_entrypoint(self):
        async with dagger.Connection(dagger.Config(log_output=sys.stderr)) as dagger_client:
            return await self.get_dagger_container(dagger_client).entrypoint()

    def _persist_new_configuration(self, new_configuration: dict, configuration_emitted_at: int) -> Optional[Path]:
        """Store new configuration values to an updated_configurations subdir under the original configuration path.
        N.B. The new configuration will not be stored if no configuration path was passed to the ConnectorRunner.
        Args:
            new_configuration (dict): The updated configuration
            configuration_emitted_at (int): Timestamp at which the configuration was emitted (ms)

        Returns:
            Optional[Path]: The updated configuration path if it was persisted.
        """
        if self._connector_configuration_path is None:
            logging.warning("No configuration path was passed to the ConnectorRunner. The new configuration was not persisted")
            return None

        with open(self._connector_configuration_path) as old_configuration_file:
            old_configuration = json.load(old_configuration_file)

        if new_configuration != old_configuration:
            file_prefix = self._connector_configuration_path.stem.split("|")[0]
            if "/updated_configurations/" not in str(self._connector_configuration_path):
                Path(self._connector_configuration_path.parent / "updated_configurations").mkdir(exist_ok=True)
                new_configuration_file_path = Path(
                    f"{self._connector_configuration_path.parent}/updated_configurations/{file_prefix}|{configuration_emitted_at}{self._connector_configuration_path.suffix}"
                )
            else:
                new_configuration_file_path = Path(
                    f"{self._connector_configuration_path.parent}/{file_prefix}|{configuration_emitted_at}{self._connector_configuration_path.suffix}"
                )

            with open(new_configuration_file_path, "w") as new_configuration_file:
                json.dump(new_configuration, new_configuration_file)
            logging.info(f"Stored most recent configuration value to {new_configuration_file_path}")
            return new_configuration_file_path
