"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[634],{9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(4164);const s={tabItem:"tabItem_Ymn6"};var a=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(6540),s=t(4164),a=t(3104),o=t(6347),l=t(205),i=t(7485),c=t(1682),u=t(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=f({queryString:t,groupId:s}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),b=(()=>{const e=c??p;return h({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),s=l[t].value;s!==r&&(c(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=p(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(n))}},2267:(e,n,t)=>{t.d(n,{A:()=>d});t(6540);var r=t(1432),s=t(1470),a=t(9365);t(4586);const o=["Node ESM","Node CJS","Browser","Deno"],l=["node_esm","node_cjs","browser","deno"];function i(e,n){let t=!0,r=!1,s=!1;return e.split("\n").filter((e=>{const a=e.trim();if("// node2deno end"===a)t=!0,r=!1;else if("// node2deno else"===a)t=!r;else if(a.startsWith("// node2deno else if: ")){if(!r){const e=a.slice(22).trim().split(" ");t=e.includes(n),t&&(r=!0)}}else if(a.startsWith("// node2deno single: ")){const e=a.slice(21).trim().split(" ");t=e.includes(n),s=!0}else if(a.startsWith("// node2deno: ")){const e=a.slice(14).trim().split(" ");t=e.includes(n),t&&(r=!0)}else{if(t)return s=!1,!0;s&&(s=!1,t=!0)}return!1})).join("\n")}const c=[e=>i(e,"node"),e=>((e=i(e,"node").replace(/import (.+?) from 'megajs'/g,"const $1 = require('megajs')")).includes("await ")&&(e=e.replace(/^(?!import|$)/gm,"  ").replace(/^\s*$/m,"\n// Node doesn't support top-level await when using CJS\n;(async function () {").replace(/\n*$/,"\n}()).catch(error => {\n  console.error(error)\n  process.exit(1)\n})\n")),e),e=>i(e,"browser").replace(/import (.+?) from 'megajs'/g,"import $1 from 'https://unpkg.com/megajs/dist/main.browser-es.mjs'"),e=>i(e,"deno").replace(/import (.+?) from 'megajs'/g,"import $1 from 'npm:megajs'")];var u=t(4848);function d(e){return(0,u.jsx)("div",{children:(0,u.jsx)(s.A,{groupId:"node2deno",className:"margin-bottom--sm",children:o.map(((n,t)=>(0,u.jsx)(a.A,{value:l[t],label:n,children:(0,u.jsx)(r.A,{language:e.language,children:c[t](e.code)})},l[t])))})})}},723:(e,n,t)=>{t.r(n),t.d(n,{default:()=>p});var r=t(6540),s=t(4164),a=t(781),o=t(8774),l=t(4586);const i={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};var c=t(2267),u=t(4848);function d(){const e=(0,r.useRef)(null);return(0,r.useEffect)((()=>{if(!e.current.animate)return;e.current.innerHTML="";const n=["Node.js","Browser","TypeScript","JavaScript"];let t=n.slice(),r="JavaScript";const s=document.createElement("span"),a=document.createElement("span"),o=document.createElement("span");let l;s.textContent="Unofficial",a.textContent=r,o.textContent="SDK for MEGA",e.current.appendChild(s),e.current.appendChild(a),e.current.appendChild(o);const i=e=>new Promise((n=>{l=setTimeout(n,e)}));return setTimeout((async function e(){0===t.length&&(await i(5e3),t=n.slice());const l=r?"":t.shift(),c=s.getBoundingClientRect(),u=o.getBoundingClientRect();a.textContent=l;const d=s.getBoundingClientRect(),m=o.getBoundingClientRect(),h=c.left-d.left,f=u.left-m.left;l||(a.textContent=r),r=l,r&&s.animate([{transformOrigin:"top left",transform:`translateX(${h}px)`},{transformOrigin:"top left",transform:"none"}],{duration:300,easing:"ease-out",fill:"both"}),a.animate([{transformOrigin:"top center",transform:l?"perspective(7em) rotateY(-90deg)":"none"},{transformOrigin:"top center",transform:l?"none":"perspective(7em) rotateY(90deg)"}],{duration:300,easing:"linear",fill:"both"}),r&&o.animate([{transformOrigin:"top left",transform:`translateX(${f}px)`},{transformOrigin:"top left",transform:"none"}],{duration:300,easing:"ease-out",fill:"both"}),await i(r?2500:300),e()}),500),()=>{clearTimeout(l)}}),[]),(0,u.jsxs)("p",{className:"hero__subtitle flip_tagline",ref:e,children:[(0,u.jsx)("span",{children:"Unofficial"}),(0,u.jsx)("span",{children:"JavaScript"}),(0,u.jsx)("span",{children:"SDK for MEGA"})]})}function m(){const{siteConfig:e}=(0,l.A)();return(0,u.jsx)("header",{className:(0,s.A)("hero hero--primary",i.heroBanner),children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)("h1",{className:"hero__title",children:e.title}),(0,u.jsx)(d,{}),(0,u.jsxs)("div",{className:i.buttons,children:[(0,u.jsx)(o.A,{className:"button button--secondary button--lg",to:"/docs/1.0/tutorial/intro",children:"Tutorial"}),(0,u.jsx)(o.A,{className:"button button--secondary button--lg",to:"/docs/1.0/examples/intro",children:"Examples"})]})]})})}const h="import { Storage } from 'megajs'\n\nconst storage = await new Storage({\n  email: 'user@example.com',\n  // node2deno: browser\n  password: 'correct horse battery example',\n  userAgent: null\n  // node2deno else\n  password: 'correct horse battery example'\n  // node2deno end\n}).ready\n\n// node2deno: deno\nconst file = await storage.upload({\n  name: 'hello-world.txt',\n  forceHttps: false\n}, 'Hello world!').complete\n// node2deno else\nconst file = await storage.upload('hello-world.txt', 'Hello world!').complete\n// node2deno end\nconsole.log('The file was uploaded!', file)\n",f="import { File } from 'megajs'\n\nconst file = File.fromURL('https://mega.nz/file/example#example')\n// node2deno single: browser\nfile.api.userAgent = null\n\nawait file.loadAttributes()\nconsole.log(file.name) // file name\nconsole.log(file.size) // file size in bytes\n\n// node2deno: deno\nconst data = await file.downloadBuffer({ forceHttps: false })\n// node2deno else\nconst data = await file.downloadBuffer()\n// node2deno end\nconsole.log(data.toString()) // file contents\n";function p(){return(0,u.jsxs)(a.A,{title:"Home",children:[(0,u.jsx)(m,{}),(0,u.jsxs)("main",{children:[(0,u.jsx)("section",{className:"margin-vert--lg",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsxs)("div",{className:"col col--4",children:[(0,u.jsx)("h2",{children:"Quick start"}),(0,u.jsxs)("p",{children:["To upload files to ",(0,u.jsx)("a",{href:"https://mega.nz/",children:"MEGA"})," import the library using either ES modules or CommonJS."]}),(0,u.jsx)("p",{children:'Then create a storage object to login using your e-mail and password, then wait for the "ready" event.'}),(0,u.jsxs)("p",{children:["Finally you can call the ",(0,u.jsx)("code",{children:".upload()"})," method to upload files to your account."]})]}),(0,u.jsx)("div",{className:"col col--8",children:(0,u.jsx)(c.A,{language:"js",code:h,version:"1"})})]})})}),(0,u.jsx)("section",{className:"margin-vert--lg",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsxs)("div",{className:"col col--4",children:[(0,u.jsx)("h2",{children:"Downloading files"}),(0,u.jsxs)("p",{children:["To download shared files then you first open a file object using the ",(0,u.jsx)("code",{children:"File.fromURL()"})," method."]}),(0,u.jsxs)("p",{children:["Then you load file attributes such as name and size using ",(0,u.jsx)("code",{children:".loadAttributes()"}),"."]}),(0,u.jsxs)("p",{children:["Finally use the ",(0,u.jsx)("code",{children:".downloadBuffer()"})," method to download the file which will return a Buffer with the file contents."]})]}),(0,u.jsx)("div",{className:"col col--8",children:(0,u.jsx)(c.A,{language:"js",code:f,version:"1"})})]})})}),(0,u.jsx)("section",{className:"margin-vert--lg",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)(o.A,{className:"button button--secondary button--lg button--block",to:"/docs/1.0/tutorial/intro",children:"Check the tutorial for more info"})})})}),(0,u.jsx)("section",{className:"margin-vert--lg",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col col--12",children:(0,u.jsxs)("ul",{children:[(0,u.jsxs)("li",{children:["This is based on ",(0,u.jsx)("a",{href:"https://github.com/tonistiigi/mega",children:"tonistiigi's mega library"}),"."]}),(0,u.jsxs)("li",{children:["This is all unofficial, based on ",(0,u.jsx)("a",{href:"https://mega.nz/#developers",children:"developer guide"})," and site source."]}),(0,u.jsxs)("li",{children:["Make sure you agree with MEGA's ",(0,u.jsx)("a",{href:"https://mega.nz/#terms",children:"Terms of Service"})," before using it."]})]})})})})})]})]})}}}]);