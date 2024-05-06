"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[701],{1111:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>g,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=s(4848),o=s(8453),i=s(1432);const r="import { getLoggedInStorage } from './logging-in-demo.js'\nconst storage = await getLoggedInStorage()\n\nconsole.log('Those are all .jpeg files in the storage:')\nconsole.log(storage.filter(e => e.endsWith('.jpeg'), true))\n\nconsole.log('Those are all README files in the storage:')\nconsole.log(storage.filter('README', true))\n",a={sidebar_position:2.003},l="File searching",c={id:"examples/file-searching",title:"File searching",description:"You can try by running this code at your console:",source:"@site/docs/examples/file-searching.md",sourceDirName:"examples",slug:"/examples/file-searching",permalink:"/docs/1.0/examples/file-searching",draft:!1,unlisted:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/docs/examples/file-searching.md",tags:[],version:"current",sidebarPosition:2.003,frontMatter:{sidebar_position:2.003},sidebar:"tutorialSidebar",previous:{title:"File uploading",permalink:"/docs/1.0/examples/file-uploading"},next:{title:"File deleting",permalink:"/docs/1.0/examples/file-deleting"}},g={},d=[];function u(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"file-searching",children:"File searching"}),"\n",(0,t.jsx)(n.p,{children:"You can try by running this code at your console:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"deno run https://mega.js.org/demos/file-searching-demo.js\n"})}),"\n","\n",(0,t.jsx)(i.A,{language:"js",children:r})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);