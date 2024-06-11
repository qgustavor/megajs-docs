"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[262],{1676:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(4848),a=n(8453),s=n(1470),o=n(9365);const i={sidebar_position:3},l="Logging in",c={id:"tutorial/login",title:"Logging in",description:"To log in to an account use the Storage class:",source:"@site/docs/tutorial/login.md",sourceDirName:"tutorial",slug:"/tutorial/login",permalink:"/docs/1.0/tutorial/login",draft:!1,unlisted:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/docs/tutorial/login.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installing",permalink:"/docs/1.0/tutorial/install"},next:{title:"Uploading files",permalink:"/docs/1.0/tutorial/uploading"}},u={},d=[];function h(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"logging-in",children:"Logging in"}),"\n",(0,t.jsxs)(r.p,{children:["To log in to an account use the ",(0,t.jsx)(r.code,{children:"Storage"})," class:"]}),"\n",(0,t.jsxs)(s.A,{groupId:"node2deno",children:[(0,t.jsx)(o.A,{value:"node_esm",label:"Node ESM",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import { Storage } from 'megajs'\n\nconst storage = new Storage({\n  email: 'user@example.com',\n  password: 'correct horse battery example',\n  userAgent: 'ExampleApplication/1.0'\n})\n\n// Will resolve once the user is logged in\n// or reject if some error happens\nawait storage.ready\n"})})}),(0,t.jsx)(o.A,{value:"node_cjs",label:"Node CJS",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"  const { Storage } = require('megajs')\n\n// Node doesn't support top-level await when using CJS\n;(async function () {\n  const storage = new Storage({\n    email: 'user@example.com',\n    password: 'correct horse battery example',\n    userAgent: 'ExampleApplication/1.0'\n  })\n\n  // Will resolve once the user is logged in\n  // or reject if some error happens\n  await storage.ready\n}()).catch(error => {\n  console.error(error)\n  process.exit(1)\n})\n\n"})})}),(0,t.jsx)(o.A,{value:"browser",label:"Browser",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import { Storage } from 'https://unpkg.com/megajs/dist/main.browser-es.mjs'\n\nconst storage = new Storage({\n  email: 'user@example.com',\n  password: 'correct horse battery example',\n  userAgent: null\n})\n\n// Will resolve once the user is logged in\n// or reject if some error happens\nawait storage.ready\n"})})}),(0,t.jsx)(o.A,{value:"deno",label:"Deno",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import { Storage } from 'npm:megajs'\n\nconst storage = new Storage({\n  email: 'user@example.com',\n  password: 'correct horse battery example',\n  userAgent: 'ExampleApplication/1.0'\n})\n\n// Will resolve once the user is logged in\n// or reject if some error happens\nawait storage.ready\n"})})})]}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["It is recommended to set up an user-agent as MEGA uses it to identify clients, which can help finding issues. The library will default to ",(0,t.jsx)(r.code,{children:"megajs/{version}"})," (where ",(0,t.jsx)(r.code,{children:"{version}"})," is the library version) ",(0,t.jsx)(r.strong,{children:"BUT"})," when deploying to browsers set ",(0,t.jsx)(r.code,{children:"userAgent"})," to ",(0,t.jsx)(r.code,{children:"null"})," as it can cause issues in some browsers which allow client-side code to override the ",(0,t.jsx)(r.code,{children:"user-agent"})," header (like Firefox)."]})}),"\n",(0,t.jsx)(r.p,{children:"You can use two-factor authentication, just provide the second factor code like this:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"const storage = new Storage({\n  ... // same options as before\n  secondFactorCode: '123456'\n})\n"})}),"\n",(0,t.jsxs)(r.p,{children:["You can simplify your code by awaiting the result of ",(0,t.jsx)(r.code,{children:"new Storage().ready"}),", as ",(0,t.jsx)(r.code,{children:".ready"})," resolves to the ",(0,t.jsx)(r.code,{children:"Storage"})," object, like this:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"// Create and already wait for the storage to be ready at the same time\nconst storage = await new Storage({ ... }).ready\n"})}),"\n",(0,t.jsx)(r.p,{children:"The file uploading example in the home page uses the above shortcut for simplicity."}),"\n",(0,t.jsx)(r.p,{children:"Events can still be used like in V0:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"storage.once('ready', () => {\n  // User is now logged in\n})\n\nstorage.once('error', error => {\n  // Some error happened\n})\n"})}),"\n",(0,t.jsx)(r.p,{children:"It may look weird to pass a callback to a constructor, but that's an option too:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"const storage = new Storage({\n  email: 'user@example.com',\n  password: 'correct horse battery example',\n  userAgent: 'ExampleClient/1.0'\n}, error => {\n  if (error) {\n    // Some error happened\n  } else {\n    // User is now logged in\n  }\n})\n"})}),"\n",(0,t.jsxs)(r.admonition,{type:"caution",children:[(0,t.jsxs)(r.p,{children:["If you are migrating from ",(0,t.jsx)(r.a,{href:"https://github.com/tonistiigi/mega",children:"tonistiigi's mega"})," you can still use the following code:"]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"const mega = require('megajs')\n\nconst storage = mega({\n  email: 'user@example.com',\n  password: 'correct horse battery example'\n}, error => {\n  if (error) {\n    // Some error happened\n  } else {\n    // User is now logged in\n  }\n})\n"})}),(0,t.jsx)(r.p,{children:"But this pattern might not be supported in future versions because it is not compatible with ES modules and causes issues with tree shaking, which is important when this using this library in a browser environment."}),(0,t.jsxs)(r.p,{children:["If you try to import the library using ",(0,t.jsx)(r.code,{children:"import mega from 'megajs'"})," it will throw the following error: ",(0,t.jsx)(r.code,{children:"SyntaxError: The requested module 'megajs' does not provide an export named 'default'"}),". Notice that, at the moment, Visual Studio Code will load CJS types - which still support this pattern - instead of ESM types even when using ",(0,t.jsx)(r.code,{children:"import"})," instead of ",(0,t.jsx)(r.code,{children:"require"})," and, because of that, it will not warn about this issue."]})]}),"\n",(0,t.jsxs)(r.p,{children:["In the next part of this tutorial we will use the ",(0,t.jsx)(r.code,{children:"Storage"})," object to upload a file."]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,r,n)=>{n.d(r,{A:()=>o});n(6540);var t=n(4164);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function o(e){let{children:r,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,o),hidden:n,children:r})}},1470:(e,r,n)=>{n.d(r,{A:()=>y});var t=n(6540),a=n(4164),s=n(3104),o=n(6347),i=n(205),l=n(7485),c=n(1682),u=n(9466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function g(e){let{queryString:r=!1,groupId:n}=e;const a=(0,o.W6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function m(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,s=h(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[c,d]=g({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,u.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),b=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(4848);function x(e){let{className:r,block:n,selectedValue:t,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const r=e.currentTarget,n=l.indexOf(r),a=i[n].value;a!==t&&(c(r),o(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function w(e){let{lazy:r,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function v(e){const r=m(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,j.jsx)(x,{...r,...e}),(0,j.jsx)(w,{...r,...e})]})}function y(e){const r=(0,f.A)();return(0,j.jsx)(v,{...e,children:d(e.children)},String(r))}}}]);