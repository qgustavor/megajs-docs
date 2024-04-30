"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[232],{9630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(4848),a=n(8453),o=n(1470),s=n(9365);const l={sidebar_position:2},i="Installing",u={id:"tutorial/install",title:"Installing",description:"If you are targeting Node or using a build tool, then you need to install the library first:",source:"@site/docs/tutorial/install.md",sourceDirName:"tutorial",slug:"/tutorial/install",permalink:"/docs/1.0/tutorial/install",draft:!1,unlisted:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/docs/tutorial/install.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/1.0/tutorial/intro"},next:{title:"Logging in",permalink:"/docs/1.0/tutorial/login"}},c={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"installing",children:"Installing"}),"\n",(0,r.jsx)(t.p,{children:"If you are targeting Node or using a build tool, then you need to install the library first:"}),"\n",(0,r.jsxs)(o.A,{groupId:"npm2yarn",children:[(0,r.jsx)(s.A,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install megajs\n"})})}),(0,r.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add megajs\n"})})}),(0,r.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add megajs\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["Since V1 it already includes TypeScript types (thanks to ",(0,r.jsx)(t.a,{href:"https://github.com/ChampionBuffalo1",children:"ChampionBuffalo1"})," for contributing)."]}),"\n",(0,r.jsx)(t.p,{children:"If you are working directly from a browser you can import the library using ES modules:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { Storage } from 'https://cdn.skypack.dev/megajs'\n"})}),"\n",(0,r.jsx)(t.p,{children:"Note that it will load the latest v1 version, instead remember to update to URL to point to a specific version to reduce the chances of the code breaking when a new version gets released."}),"\n",(0,r.jsxs)(t.p,{children:["You can also use ",(0,r.jsx)(t.code,{children:"<script>"})," tags to load the UMD version:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<script src="https://unpkg.com/megajs@1/dist/main.browser-umd.js"><\/script>\n'})}),"\n",(0,r.jsxs)(t.p,{children:["It will load the library in ",(0,r.jsx)(t.code,{children:"window.mega"}),", so ",(0,r.jsx)(t.code,{children:"Storage"})," will be available via ",(0,r.jsx)(t.code,{children:"window.mega.Storage"}),", ",(0,r.jsx)(t.code,{children:"File"})," via ",(0,r.jsx)(t.code,{children:"window.mega.File"})," and so on."]}),"\n",(0,r.jsx)(t.p,{children:"You can also host the above files into your server instead of loading those from unpkg or Skypack which may help privacy and security."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Remember to import the browser version when targeting the browser environment, even when using build tools, as it includes browser-compatible cryptographic functions instead of depending on ",(0,r.jsx)(t.a,{href:"https://nodejs.org/api/crypto.html",children:"the Node crypto module"}),". Trying to use a browser port of Node crypto like ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/crypto-browserify",children:"crypto-browserify"})," can result in huge build sizes and hurt performance."]})}),"\n",(0,r.jsx)(t.p,{children:"CommonJS support will be removed in MEGAJS 2.0."}),"\n",(0,r.jsxs)(t.p,{children:["In the next part of this tutorial we will login to a MEGA account using the ",(0,r.jsx)(t.code,{children:"Storage"})," class loaded above."]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var o=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),a=n(4164),o=n(3104),s=n(6347),l=n(205),i=n(7485),u=n(1682),c=n(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=m({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=u??b;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(6540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);