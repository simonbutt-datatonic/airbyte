"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[61381],{42472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={},i="Google Analytics 4 (GA4)",l={unversionedId:"integrations/sources/google-analytics-data-api",id:"integrations/sources/google-analytics-data-api",title:"Google Analytics 4 (GA4)",description:"This page contains the setup guide and reference information for the Google Analytics 4 source connector.",source:"@site/../docs/integrations/sources/google-analytics-data-api.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/google-analytics-data-api",permalink:"/integrations/sources/google-analytics-data-api",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/google-analytics-data-api.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Google Ads",permalink:"/integrations/sources/google-ads"},next:{title:"Google Analytics (Universal Analytics)",permalink:"/integrations/sources/google-analytics-v4"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Set up Source",id:"step-1-set-up-source",level:2},{value:"Create a Service Account",id:"create-a-service-account",level:3},{value:"Add service account to the Google Analytics account",id:"add-service-account-to-the-google-analytics-account",level:3},{value:"Enable the APIs",id:"enable-the-apis",level:3},{value:"Step 2: Set up the Google Analytics connector in Airbyte",id:"step-2-set-up-the-google-analytics-connector-in-airbyte",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Connector-specific features",id:"connector-specific-features",level:2},{value:"Performance Considerations",id:"performance-considerations",level:2},{value:"Data type map",id:"data-type-map",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"google-analytics-4-ga4"},"Google Analytics 4 (GA4)"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Google Analytics 4 source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JSON credentials for the service account that has access to Google Analytics. For more details check ",(0,n.kt)("a",{parentName:"li",href:"https://support.google.com/analytics/answer/1009702"},"instructions")),(0,n.kt)("li",{parentName:"ul"},"OAuth 2.0 credentials for the service account that has access to Google Analytics"),(0,n.kt)("li",{parentName:"ul"},"Property ID")),(0,n.kt)("h2",{id:"step-1-set-up-source"},"Step 1: Set up Source"),(0,n.kt)("h3",{id:"create-a-service-account"},"Create a Service Account"),(0,n.kt)("p",null,"First, you need to select existing or create a new project in the Google Developers Console:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Sign in to the Google Account you are using for Google Analytics as an admin."),(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://console.developers.google.com/iam-admin/serviceaccounts"},"Service Accounts")," page."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create service account"),"."),(0,n.kt)("li",{parentName:"ol"},"Create a JSON key file for the service user. The contents of this file will be provided as the ",(0,n.kt)("inlineCode",{parentName:"li"},"credentials_json")," in the UI when authorizing GA after you grant permissions ","(","see below",")",".")),(0,n.kt)("h3",{id:"add-service-account-to-the-google-analytics-account"},"Add service account to the Google Analytics account"),(0,n.kt)("p",null,"Use the service account email address to ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/1009702"},"add a user")," to the Google analytics view you want to access via the API. You will need to grant ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/2884495"},"Viewer permissions"),"."),(0,n.kt)("h3",{id:"enable-the-apis"},"Enable the APIs"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://console.developers.google.com/apis/api/analyticsreporting.googleapis.com/overview"},"Google Analytics Reporting API dashboard")," in the project for your service user. Enable the API for your account. You can set quotas and check usage."),(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://console.developers.google.com/apis/api/analytics.googleapis.com/overview"},"Google Analytics API dashboard")," in the project for your service user. Enable the API for your account.")),(0,n.kt)("h3",{id:"step-2-set-up-the-google-analytics-connector-in-airbyte"},"Step 2: Set up the Google Analytics connector in Airbyte"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Login to your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,n.kt)("strong",{parentName:"li"},"Google Analytics 4 (GA4)")," from the Source type dropdown and enter a name for this connector."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Authenticate your account")," by selecting Oauth or Service Account for Authentication."),(0,n.kt)("li",{parentName:"ol"},"Log in and Authorize the Google Analytics account."),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/property-id#what_is_my_property_id"},(0,n.kt)("strong",{parentName:"a"},"Property ID"))," whose events are tracked."),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("strong",{parentName:"li"},"Start Date")," from which to replicate report data in the format YYYY-MM-DD."),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("strong",{parentName:"li"},"Custom Reports (Optional)")," a JSON array describing the custom reports you want to sync from Google Analytics."),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("strong",{parentName:"li"},"Data request time increment in days (Optional)"),". The bigger this value is, the faster the sync will be, but the more likely that sampling will be applied to your data, potentially causing inaccuracies in the returned results. We recommend setting this to 1 unless you have a hard requirement to make the sync faster at the expense of accuracy. The minimum allowed value for this field is 1, and the maximum is 364.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the Airbyte Open Source dashboard."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,n.kt)("strong",{parentName:"li"},"Google Analytics 4 (GA4)")," from the Source type dropdown and enter a name for this connector."),(0,n.kt)("li",{parentName:"ol"},"Select Service Account for Authentication in dropdown list and enter ",(0,n.kt)("strong",{parentName:"li"},"Service Account JSON Key")," from Step 1."),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/property-id#what_is_my_property_id"},(0,n.kt)("strong",{parentName:"a"},"Property ID"))," whose events are tracked."),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("strong",{parentName:"li"},"Start Date")," from which to replicate report data in the format YYYY-MM-DD."),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("strong",{parentName:"li"},"Custom Reports (Optional)")," a JSON array describing the custom reports you want to sync from Google Analytics."),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("strong",{parentName:"li"},"Data request time increment in days (Optional)"),". The bigger this value is, the faster the sync will be, but the more likely that sampling will be applied to your data, potentially causing inaccuracies in the returned results. We recommend setting this to 1 unless you have a hard requirement to make the sync faster at the expense of accuracy. The minimum allowed value for this field is 1, and the maximum is 364.")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Google Analytics source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/glossary#full-refresh-sync"},"Full Refresh - Overwrite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append"},"Incremental - Append")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-deduped-history"},"Incremental - Deduped History"))),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("p",null,"This connector outputs the following incremental streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Preconfigured streams:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"daily_active_users")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"devices")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"four_weekly_active_users")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"locations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"pages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"traffic_sources")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"website_overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"weekly_active_users")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"Custom stream","(","s",")"))),(0,n.kt)("h2",{id:"connector-specific-features"},"Connector-specific features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connector supports multiple custom reports with user provided ",(0,n.kt)("a",{parentName:"li",href:"https://ga-dev-tools.web.app/dimensions-metrics-explorer/"},"Dimensions and metrics"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Custom reports should be provided in format ",(0,n.kt)("inlineCode",{parentName:"li"},'[{"name": "<report-name>", "dimensions": ["<dimension-name>", ...], "metrics": ["<metric-name>", ...]}]')),(0,n.kt)("li",{parentName:"ul"},"To enable Incremental sync for Custom reports, you need to include the ",(0,n.kt)("inlineCode",{parentName:"li"},"date")," dimension."))),(0,n.kt)("h2",{id:"performance-considerations"},"Performance Considerations"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/quotas"},"Google Analytics Data API Quotas docs"),"."),(0,n.kt)("h2",{id:"data-type-map"},"Data type map"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23872"},"23872")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix parse + cursor for custom reports")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23822"},"23822")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve ",(0,n.kt)("inlineCode",{parentName:"td"},"rate limits")," customer faced error messages and retry logic for ",(0,n.kt)("inlineCode",{parentName:"td"},"429"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/21169"},"21169")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Slicer updated, unit tests added")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20889"},"20889")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improved config validation, SAT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.0.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15229"},"15229")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Source Google Analytics Data Api: code refactoring")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.0.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15087"},"15087")),(0,n.kt)("td",{parentName:"tr",align:"left"},"fix documentationUrl")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.0.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12701"},"12701")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Introduce Google Analytics Data API source")))))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);