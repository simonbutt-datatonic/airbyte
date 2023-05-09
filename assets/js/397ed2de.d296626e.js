"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[98232],{63654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="Compatibility Guide",l={unversionedId:"connector-development/connector-builder-ui/connector-builder-compatibility",id:"connector-development/connector-builder-ui/connector-builder-compatibility",title:"Compatibility Guide",description:"Answer the following questions to determine whether the Connector Builder is the right tool to build the connector you need:",source:"@site/../docs/connector-development/connector-builder-ui/connector-builder-compatibility.md",sourceDirName:"connector-development/connector-builder-ui",slug:"/connector-development/connector-builder-ui/connector-builder-compatibility",permalink:"/connector-development/connector-builder-ui/connector-builder-compatibility",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/connector-builder-ui/connector-builder-compatibility.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Connector Builder Intro",permalink:"/connector-development/connector-builder-ui/overview"},next:{title:"Tutorial",permalink:"/connector-development/connector-builder-ui/tutorial"}},s={},p=[{value:"Is the integration an HTTP API returning a collection of records synchronously?",id:"is-the-integration-an-http-api-returning-a-collection-of-records-synchronously",level:2},{value:"What type of authentication is required?",id:"what-type-of-authentication-is-required",level:2},{value:"Basic HTTP",id:"basic-http",level:3},{value:"API Key",id:"api-key",level:3},{value:"OAuth",id:"oauth",level:3},{value:"Is the OAuth refresh token long-lived?",id:"is-the-oauth-refresh-token-long-lived",level:4},{value:"Other",id:"other",level:3},{value:"Is the data returned as JSON?",id:"is-the-data-returned-as-json",level:2},{value:"How are records paginated?",id:"how-are-records-paginated",level:2},{value:"Page count",id:"page-count",level:3},{value:"Limit-Offset (OffsetIncrement)",id:"limit-offset-offsetincrement",level:3},{value:"Link to next page (CursorPagination)",id:"link-to-next-page-cursorpagination",level:3},{value:"Are the required parameters of the integration key-value pairs?",id:"are-the-required-parameters-of-the-integration-key-value-pairs",level:3}],c={toc:p},u="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"compatibility-guide"},"Compatibility Guide"),(0,r.kt)("p",null,"Answer the following questions to determine whether the Connector Builder is the right tool to build the connector you need:"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"#is-the-integration-an-http-api-returning-a-collection-of-records-synchronously"},"Is it an HTTP API returning a collection of records synchronously?")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"#what-type-of-authentication-is-required"},"Is the API using one of the following authentication mechanism?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#basic-http"},"Basic HTTP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#api-key"},"API key injected in request header or query parameter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#is-the-oauth-refresh-token-long-lived"},"OAuth2.0 with long-lived refresh token")))),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"#is-the-data-returned-as-json"},"Is the data returned as JSON?")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"#how-are-records-paginated"},"If records are paginated, are they using one of the following mechanism?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#limit-offset--offsetincrement-"},"Limit-offset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#page-count"},"Page count")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#link-to-next-page--cursorpagination-"},"Link to the next page")))),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"#are-the-required-parameters-of-the-integration-key-value-pairs"},"Are the required parameters of the integration key-value pairs?"))),(0,r.kt)("p",null,"You can use the Connector Builder if the integration checks all the items."),(0,r.kt)("p",null,"You can follow ",(0,r.kt)("a",{parentName:"p",href:"https://whimsical.com/connector-builder-compatibility-NEuqCZJzn7eaxfESQzCGWy@2Ux7TurymMvSCmDXoyPf"},"this chart")," to guide you through the process."),(0,r.kt)("p",null,"The sections below provide more details to help you answer the questions."),(0,r.kt)("h2",{id:"is-the-integration-an-http-api-returning-a-collection-of-records-synchronously"},"Is the integration an HTTP API returning a collection of records synchronously?"),(0,r.kt)("p",null,"Look at the shape of the resource path."),(0,r.kt)("p",null,"Taking the ",(0,r.kt)("a",{parentName:"p",href:"https://api.congress.gov/#/bill"},"Congress API")," as an example,"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /bill")),(0,r.kt)("p",null,"Indicates the records can be retrieved by submitting a GET request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/bill")," path. The sample response shows that the response returns a collection of records, so the Congress API is a REST API returning a collection of records."),(0,r.kt)("p",null,"Sample response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "bills":[\n    {\n      "congress":117,\n      "latestAction":{\n        "actionDate":"2022-04-06",\n        "text":"Became Public Law No: 117-108."\n      },\n      "number":"3076",\n      "originChamber":"House",\n      "originChamberCode":"H",\n      "title":"Postal Service Reform Act of 2022",\n      "type":"HR",\n      "updateDate":"2022-09-29",\n      "updateDateIncludingText":"2022-09-29T03:27:05Z",\n      "url":"https://api.congress.gov/v3/bill/117/hr/3076?format=json"\n    },\n    {\n      "congress":117,\n      "latestAction":{\n        "actionDate":"2022-04-06",\n        "text":"Read twice. Placed on Senate Legislative Calendar under General Orders. Calendar No. 343."\n      },\n      "number":"3599",\n      "originChamber":"House",\n      "originChamberCode":"H",\n      "title":"Federal Rotational Cyber Workforce Program Act of 2021",\n      "type":"HR",\n      "updateDate":"2022-09-29",\n      "updateDateIncludingText":"2022-09-29T03:41:50Z",\n      "url":"https://api.congress.gov/v3/bill/117/hr/3599?format=json"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Some endpoints are parameterized. An example of such endpoint is the ",(0,r.kt)("a",{parentName:"p",href:"https://api.congress.gov/#/bill/bill_list_by_congress"},"Congress API\u2019s bill by congress endpoint"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"GET /bill/:congress")),(0,r.kt)("p",null,"These endpoints are also valid synchronous HTTP endpoints."),(0,r.kt)("p",null,"This differs from the ",(0,r.kt)("a",{parentName:"p",href:"https://advertising.amazon.com/API/docs/en-us/info/api-overview"},"Amazon Ads reports endpoint"),", which returns a report ID, which will be generated asynchronously by the source. This is not a synchronous HTTP API because the reports need to be downloaded separately."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Yes: ",(0,r.kt)("a",{parentName:"li",href:"https://api.congress.gov/#/"},"Congress API")),(0,r.kt)("li",{parentName:"ul"},"No: ",(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/info/api-overview"},"Amazon Ads"))),(0,r.kt)("p",null,"If the integration is not an HTTP API returning the records synchronously, use the Python CDK."),(0,r.kt)("h2",{id:"what-type-of-authentication-is-required"},"What type of authentication is required?"),(0,r.kt)("p",null,"Look up the authentication mechanism in the API documentation, and identify which type it is."),(0,r.kt)("h3",{id:"basic-http"},"Basic HTTP"),(0,r.kt)("p",null,"Are requests authenticated using the Basic HTTP authentication method? You can search the documentation page for one of the following keywords"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"Basic Auth"'),(0,r.kt)("li",{parentName:"ul"},'"Basic HTTP"'),(0,r.kt)("li",{parentName:"ul"},'"Authorization: Basic"')),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://developers.greenhouse.io/harvest.html#introduction"},"Greenhouse")),(0,r.kt)("p",null,"If the authentication mechanism is Basic HTTP, it is compatible with the Connector Builder."),(0,r.kt)("h3",{id:"api-key"},"API Key"),(0,r.kt)("p",null,"Are requests authenticated using an API key injected either as a query parameter or as a request header?"),(0,r.kt)("p",null,"Examples: ",(0,r.kt)("a",{parentName:"p",href:"https://api.congress.gov/"},"Congress API"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sendgrid.com/for-developers/sending-email/authentication"},"Sendgrid")),(0,r.kt)("p",null,"If the authentication mechanism is an API key injected as a query parameter or as a request header, it is compatible with the Connector Builder."),(0,r.kt)("h3",{id:"oauth"},"OAuth"),(0,r.kt)("p",null,"Are requests authenticated using an OAuth2.0 flow with a refresh token grant type?"),(0,r.kt)("p",null,"Examples: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.squareup.com/docs/oauth-api/overview"},"Square"),", ",(0,r.kt)("a",{parentName:"p",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#introduction"},"Woocommerce")),(0,r.kt)("h4",{id:"is-the-oauth-refresh-token-long-lived"},"Is the OAuth refresh token long-lived?"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/api/oauth2.html"},"Gitlab")," as an example, you can tell it uses an ephemeral refresh token because the authorization request returns a new refresh token in addition to the access token. This indicates a new refresh token should be used next time."),(0,r.kt)("p",null,"Example response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "access_token": "de6780bc506a0446309bd9362820ba8aed28aa506c71eedbe1c5c4f9dd350e54",\n    "token_type": "bearer",\n    "expires_in": 7200,\n    "refresh_token": "8257e65c97202ed1726cf9571600918f3bffb2544b26e00a61df9897668c33a1",\n    "created_at": 1607635748\n}\n')),(0,r.kt)("p",null,"Example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Yes: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/oauth2.html"},"Gitlab")),(0,r.kt)("li",{parentName:"ul"},"No: ",(0,r.kt)("a",{parentName:"li",href:"https://developer.squareup.com/docs/oauth-api/overview"},"Square"),", ",(0,r.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#introduction"},"Woocommerce"))),(0,r.kt)("p",null,"If the OAuth flow requires a single-use refresh token, use the Python CDK.\nIf the refresh request requires custom query parameters or request headers, use the Python CDK.\nIf the refresh request requires a ",(0,r.kt)("a",{parentName:"p",href:"https://oauth.net/2/grant-types/"},"grant type"),' that is not "Refresh Token", such as an Authorization Code, or a PKCE, use the Python CDK.\nIf the authentication mechanism is OAuth flow 2.0 with refresh token and does not require refreshing the refresh token or custom query params, it is compatible with the Connector Builder.'),(0,r.kt)("h3",{id:"other"},"Other"),(0,r.kt)("p",null,"AWS endpoints are examples of APIs requiring a non-standard authentication mechanism. You can tell from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/pdfs/awscloudtrail/latest/APIReference/awscloudtrail-api.pdf#Welcome"},"the documentation")," that requests need to be signed with a hash."),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/pdfs/awscloudtrail/latest/APIReference/awscloudtrail-api.pdf#Welcome"},"AWS Cloudtrail")),(0,r.kt)("p",null,"If the integration requires a non-standard authentication mechanism, use Python CDK or low-code with custom components."),(0,r.kt)("h2",{id:"is-the-data-returned-as-json"},"Is the data returned as JSON?"),(0,r.kt)("p",null,"Is the data returned by the API formatted as JSON, or is it formatted as another format such as XML, CSV, gRPC, or PDF?"),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Yes: ",(0,r.kt)("a",{parentName:"li",href:"https://api.congress.gov/"},"Congress API")),(0,r.kt)("li",{parentName:"ul"},"No: ",(0,r.kt)("a",{parentName:"li",href:"https://safetydata.fra.dot.gov/MasterWebService/FRASafetyDataAPIs.aspx"},"Federal Railroad Administration (FRA) Safety Data APIs"))),(0,r.kt)("p",null,"If the data is not formatted as JSON, use the Python CDK."),(0,r.kt)("h2",{id:"how-are-records-paginated"},"How are records paginated?"),(0,r.kt)("p",null,"Look up the pagination mechanism in the API documentation, and identify which type it is."),(0,r.kt)("p",null,"Here are the standard pagination mechanisms the connector builder supports:"),(0,r.kt)("h3",{id:"page-count"},"Page count"),(0,r.kt)("p",null,"Endpoints using page count pagination accept two pagination parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The number of records to be returned (typically called \u201cpage_size\u201d)"),(0,r.kt)("li",{parentName:"ol"},"The page to request (typically called \u201cpage\u201d or \u201cpage number\u201c)")),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://newsapi.ai/documentation"},"newsapi.ai")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Page-count-example",src:n(39055).Z,width:"626",height:"499"})),(0,r.kt)("h3",{id:"limit-offset-offsetincrement"},"Limit-Offset (OffsetIncrement)"),(0,r.kt)("p",null,"Endpoints using limit-offset pagination accept two pagination parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The number of records to be returned (typically called \u201climit\u201d)"),(0,r.kt)("li",{parentName:"ol"},"The index of the first record to return (typically called \u201coffset\u201d)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Offset-limit-example",src:n(40913).Z,width:"629",height:"405"})),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://api.congress.gov/"},"Congress API")),(0,r.kt)("h3",{id:"link-to-next-page-cursorpagination"},"Link to next page (CursorPagination)"),(0,r.kt)("p",null,"Endpoints paginated with a link to the next page of records typically include either a \u201cLink\u201d field in the response header, or in the response body."),(0,r.kt)("p",null,"You can search the documentation and the sample response for the \u201cnext\u201d keyword."),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://developers.greenhouse.io/harvest.html#pagination"},"Greenhouse")),(0,r.kt)("h3",{id:"are-the-required-parameters-of-the-integration-key-value-pairs"},"Are the required parameters of the integration key-value pairs?"),(0,r.kt)("p",null,"The Connector Builder currently only supports key-value query params and request body parameters.\nThis means endpoints requiring ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," are not well supported at the moment."),(0,r.kt)("p",null,"An example of an endpoint that can't be implemented with the Connector Builder is ",(0,r.kt)("a",{parentName:"p",href:"https://api.sproutsocial.com/docs/#analytics-endpoints"},"SproutSocial\u2019s Analytics endpoint"),"."),(0,r.kt)("p",null,"The endpoint requires a list of filters and metrics."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Filters-example",src:n(87196).Z,width:"610",height:"276"})),(0,r.kt)("p",null,"This endpoint is not supported by the connector builder because the \u201cfilters\u201d and \u201cmetrics\u201d fields are lists."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Yes: ",(0,r.kt)("a",{parentName:"li",href:"https://shopify.dev/docs/api/admin-graphql#endpoints"},"Shopify GraphQL Admin API"),", ",(0,r.kt)("a",{parentName:"li",href:"https://api.sproutsocial.com/docs/#analytics-endpoints"},"SproutSocial")),(0,r.kt)("li",{parentName:"ul"},"No: ",(0,r.kt)("a",{parentName:"li",href:"https://api.congress.gov/"},"Congress API"))),(0,r.kt)("p",null,"If the integration requires query params or body parameters that are not key-value pairs, use the Python CDK."))}h.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87196:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/filters_example-18268bcc1a7d43c16b78dd7478905252.png"},40913:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/offset_limit_example-1131048a8ae2f76f271245677fbbfe1e.png"},39055:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/page_count_example-74b8d4cf6d90887c4886da265cea0f25.png"}}]);