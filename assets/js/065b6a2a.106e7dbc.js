"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[4232],{9630:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=r(4848),a=r(8453),s=r(1470),o=r(9365);const l={sidebar_position:2},i="Installing",u={id:"tutorial/install",title:"Installing",description:"If you are targeting Node or using a build tool, then you need to install the library first:",source:"@site/docs/tutorial/install.md",sourceDirName:"tutorial",slug:"/tutorial/install",permalink:"/docs/1.0/tutorial/install",draft:!1,unlisted:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/docs/tutorial/install.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/1.0/tutorial/intro"},next:{title:"Logging in",permalink:"/docs/1.0/tutorial/login"}},c={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"installing",children:"Installing"}),"\n",(0,n.jsx)(t.p,{children:"If you are targeting Node or using a build tool, then you need to install the library first:"}),"\n",(0,n.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,n.jsx)(o.A,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install megajs\n"})})}),(0,n.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add megajs\n"})})}),(0,n.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm add megajs\n"})})})]}),"\n",(0,n.jsxs)(t.p,{children:["Since V1 it already includes TypeScript types (thanks to ",(0,n.jsx)(t.a,{href:"https://github.com/ChampionBuffalo1",children:"ChampionBuffalo1"})," for contributing)."]}),"\n",(0,n.jsx)(t.p,{children:"If you are working directly from a browser you can import the library using ES modules:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { Storage } from 'https://cdn.skypack.dev/megajs'\n"})}),"\n",(0,n.jsx)(t.p,{children:"Note that it will load the latest v1 version, instead remember to update to URL to point to a specific version to reduce the chances of the code breaking when a new version gets released."}),"\n",(0,n.jsxs)(t.p,{children:["You can also use ",(0,n.jsx)(t.code,{children:"<script>"})," tags to load the UMD version:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<script src="https://unpkg.com/megajs@1/dist/main.browser-umd.js"><\/script>\n'})}),"\n",(0,n.jsxs)(t.p,{children:["It will load the library in ",(0,n.jsx)(t.code,{children:"window.mega"}),", so ",(0,n.jsx)(t.code,{children:"Storage"})," will be available via ",(0,n.jsx)(t.code,{children:"window.mega.Storage"}),", ",(0,n.jsx)(t.code,{children:"File"})," via ",(0,n.jsx)(t.code,{children:"window.mega.File"})," and so on."]}),"\n",(0,n.jsx)(t.p,{children:"You can also host the above files into your server instead of loading those from unpkg or Skypack which may help privacy and security."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Remember to import the browser version when targeting the browser environment, even when using build tools, as it includes browser-compatible cryptographic functions instead of depending on ",(0,n.jsx)(t.a,{href:"https://nodejs.org/api/crypto.html",children:"the Node crypto module"}),". Trying to use a browser port of Node crypto like ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/crypto-browserify",children:"crypto-browserify"})," can result in huge build sizes and hurt performance."]})}),"\n",(0,n.jsx)(t.p,{children:"CommonJS support will be removed in MEGAJS 2.0."}),"\n",(0,n.jsxs)(t.p,{children:["In the next part of this tutorial we will login to a MEGA account using the ",(0,n.jsx)(t.code,{children:"Storage"})," class loaded above."]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>o});r(6540);var n=r(4164);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(6540),a=r(4164),s=r(3104),o=r(6347),l=r(205),i=r(7485),u=r(1682),c=r(9466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:r,groupId:a}),[b,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),f=(()=>{const e=u??b;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=r(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function j(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),a=l[r].value;a!==n&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,v.jsx)(j,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}}}]);