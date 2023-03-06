"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[60276],{84183:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={},o="API documentation",l={unversionedId:"api-documentation",id:"api-documentation",title:"API documentation",description:"Airbyte has two sets of APIs which are intended for different uses. The table below outlines their descriptions, use cases, availability and status.",source:"@site/../docs/api-documentation.md",sourceDirName:".",slug:"/api-documentation",permalink:"/api-documentation",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/api-documentation.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Airbyte Security",permalink:"/operator-guides/security"},next:{title:"CLI documentation",permalink:"/cli-documentation"}},s={},u=[],c={toc:u},p="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-documentation"},"API documentation"),(0,a.kt)("p",null,"Airbyte has two sets of APIs which are intended for different uses. The table below outlines their descriptions, use cases, availability and status."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Airbyte API")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Configuration API")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},"Airbyte API is a reliable, easy-to-use interface for programmatically controlling the Airbyte platform. With full support from the Airbyte team."),(0,a.kt)("td",{parentName:"tr",align:null},"The Config API is an internal Airbyte API that is designed for communications between different Airbyte components.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Use Cases")),(0,a.kt)("td",{parentName:"tr",align:null},"Enables users to control Airbyte programmatically and use with Orchestration tools (ex: Airflow) ",(0,a.kt)("br",null),(0,a.kt)("br",null)," Exists for Airbyte users to write applications against. ",(0,a.kt)("br",null),(0,a.kt)("br",null)," Enables ",(0,a.kt)("a",{parentName:"td",href:"https://airbyte.com/embed-airbyte-connectors-with-api"},"Powered by Airbyte")),(0,a.kt)("td",{parentName:"tr",align:null},"Enables OSS users to configure their own Self-Hosted Airbyte deployment (internal state, etc) ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"  Enables Airbyte Engineering team to configure Airbyte Cloud (internal state)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Available for")),(0,a.kt)("td",{parentName:"tr",align:null},"Cloud users."),(0,a.kt)("td",{parentName:"tr",align:null},"OSS users")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Status")),(0,a.kt)("td",{parentName:"tr",align:null},"Currently in Closed Beta. ",(0,a.kt)("br",null),(0,a.kt)("br",null)," Full support from the Airbyte team. ",(0,a.kt)("br",null),(0,a.kt)("br",null)," Early-access can be requested through ",(0,a.kt)("a",{parentName:"td",href:"mailto:early-access@airbyte.io"},"early-access@airbyte.io")),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udea8 WARNING \ud83d\udea8 ",(0,a.kt)("br",null),(0,a.kt)("br",null)," Airbyte does NOT have active commitments to support this API long-term. OSS users can utilize the Config API, but at their own risk. ",(0,a.kt)("br",null),(0,a.kt)("br",null),"  This API is utilized internally by the Airbyte Engineering team and may be modified in the future if the need arises. ",(0,a.kt)("br",null),(0,a.kt)("br",null)," Modifications by the Airbyte Engineering team could create breaking changes and OSS users would need to update their code to catch up to any backwards incompatible changes in the API.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Documentation")),(0,a.kt)("td",{parentName:"tr",align:null},"Available to Closed Beta participants."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://airbyte-public-api-docs.s3.us-east-2.amazonaws.com/rapidoc-api-docs.html"},"Available here"))))))}d.isMDXComponent=!0},3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=u(r),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(b,o(o({ref:e},c),{},{components:r})):n.createElement(b,o({ref:e},c))}));function b(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);