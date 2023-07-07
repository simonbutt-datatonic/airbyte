#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#

import csv
import json
from typing import Any, Dict, Iterable, Mapping, Optional

from airbyte_cdk.sources.file_based.config.file_based_stream_config import FileBasedStreamConfig, QuotingBehavior
from airbyte_cdk.sources.file_based.file_based_stream_reader import AbstractFileBasedStreamReader
from airbyte_cdk.sources.file_based.file_types.file_type_parser import FileTypeParser
from airbyte_cdk.sources.file_based.remote_file import RemoteFile
from airbyte_cdk.sources.file_based.schema_helpers import JSON_TO_PYTHON_TYPE_MAPPING

DIALECT_NAME = "_config_dialect"

config_to_quoting: [QuotingBehavior, int] = {
    QuotingBehavior.QUOTE_ALL: csv.QUOTE_ALL,
    QuotingBehavior.QUOTE_SPECIAL_CHARACTERS: csv.QUOTE_MINIMAL,
    QuotingBehavior.QUOTE_NONNUMERIC: csv.QUOTE_NONNUMERIC,
    QuotingBehavior.QUOTE_NONE: csv.QUOTE_NONE,
}


class CsvParser(FileTypeParser):
    async def infer_schema(
        self, config: FileBasedStreamConfig, file: RemoteFile, stream_reader: AbstractFileBasedStreamReader
    ) -> Dict[str, Any]:
        config_format = config.format.get(config.file_type) if config.format else None
        if config_format:
            dialect_name = config.name + DIALECT_NAME
            csv.register_dialect(
                dialect_name,
                delimiter=config_format.delimiter,
                quotechar=config_format.quote_char,
                escapechar=config_format.escape_char,
                doublequote=config_format.double_quote,
                quoting=config_to_quoting.get(config_format.quoting_behavior, csv.QUOTE_MINIMAL),
            )
            with stream_reader.open_file(file) as fp:
                # todo: the existing InMemoryFilesSource.open_file() test source doesn't currently require an encoding, but actual
                #  sources will likely require one. Rather than modify the interface now we can wait until the real use case
                reader = csv.DictReader(fp, dialect=dialect_name)
                schema = {field.strip(): {"type": "string"} for field in next(reader)}
                csv.unregister_dialect(dialect_name)
                return schema
        else:
            with stream_reader.open_file(file) as fp:
                reader = csv.DictReader(fp)
                return {field.strip(): {"type": "string"} for field in next(reader)}

    def parse_records(
        self, config: FileBasedStreamConfig, file: RemoteFile, stream_reader: AbstractFileBasedStreamReader
    ) -> Iterable[Dict[str, Any]]:
        schema = config.input_schema
        config_format = config.format.get(config.file_type) if config.format else None
        if config_format:
            # Formats are configured individually per-stream so a unique dialect should be registered for each stream.
            # Wwe don't unregister the dialect because we are lazily parsing each csv file to generate records
            dialect_name = config.name + DIALECT_NAME
            csv.register_dialect(
                dialect_name,
                delimiter=config_format.delimiter,
                quotechar=config_format.quote_char,
                escapechar=config_format.escape_char,
                doublequote=config_format.double_quote,
                quoting=config_to_quoting.get(config_format.quoting_behavior, csv.QUOTE_MINIMAL),
            )
            with stream_reader.open_file(file) as fp:
                # todo: the existing InMemoryFilesSource.open_file() test source doesn't currently require an encoding, but actual
                #  sources will likely require one. Rather than modify the interface now we can wait until the real use case
                reader = csv.DictReader(fp, dialect=dialect_name)
                yield from self._read_and_cast_types(reader, schema)
        else:
            with stream_reader.open_file(file) as fp:
                reader = csv.DictReader(fp)
                yield from self._read_and_cast_types(reader, schema)

    @staticmethod
    def _read_and_cast_types(reader: csv.DictReader, schema: Optional[Mapping[str, str]]) -> Iterable[Dict[str, Any]]:
        """
        If the user provided a schema, attempt to cast the record values to the associated type.

        If a column is not in the schema or cannot be cast to an appropriate python type,
        cast it to a string. Downstream, the user's validation policy will determine whether the
        record should be emitted.
        """
        if not schema:
            yield from reader

        else:
            property_types = {col: prop["type"] for col, prop in schema["properties"].items()}
            for row in reader:
                yield cast_types(row, property_types)


def cast_types(row: Dict[str, str], property_types: Dict[str, Any]) -> Dict[str, Any]:
    """
    Casts the values in the input 'row' dictionary according to the types defined in the JSON schema.

    Array and object types are only handled if they can be deserialized as JSON.

    If any errors are encountered, the value will be emitted as a string.
    """
    result = {}

    for key, value in row.items():
        prop_type = property_types.get(key)
        cast_value = value

        if prop_type in JSON_TO_PYTHON_TYPE_MAPPING:
            python_type = JSON_TO_PYTHON_TYPE_MAPPING[prop_type]

            if python_type is None and value == "":
                cast_value = None

            elif python_type == bool:
                if value.casefold() == "true":
                    cast_value = True
                elif value.casefold() == "false":
                    cast_value = False

            elif python_type == dict:
                try:
                    cast_value = json.loads(value)
                except json.JSONDecodeError:
                    pass

            elif python_type == list:
                try:
                    parsed_value = json.loads(value)
                    if isinstance(parsed_value, list):
                        cast_value = parsed_value
                except json.JSONDecodeError:
                    pass
            elif python_type:
                try:
                    cast_value = python_type(value)
                except ValueError:
                    pass

        result[key] = cast_value

    return result
