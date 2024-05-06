"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[47],{3924:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>g});var s=o(4848),t=o(8453),i=o(1432);const r="import { getLoggedInStorage } from './logging-in-demo.js'\nconst storage = await getLoggedInStorage()\n\nconsole.log('Choose one of the following files or folders:')\nconsole.log(storage.root.children.map(e => e.name))\n\nconst filename = prompt('Enter a file name (case sensitive):')\nconst file = storage.find(filename)\nif (!file) throw Error('File not found!')\n\nconst link = await file.link()\nconsole.log(link)\n",a={sidebar_position:2.006},l="File sharing",c={id:"examples/file-sharing",title:"File sharing",description:"You can try by running this code at your console:",source:"@site/docs/examples/file-sharing.md",sourceDirName:"examples",slug:"/examples/file-sharing",permalink:"/docs/1.0/examples/file-sharing",draft:!1,unlisted:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/docs/examples/file-sharing.md",tags:[],version:"current",sidebarPosition:2.006,frontMatter:{sidebar_position:2.006},sidebar:"tutorialSidebar",previous:{title:"File renaming",permalink:"/docs/1.0/examples/file-renaming"},next:{title:"File downloading",permalink:"/docs/1.0/examples/file-downloading"}},d={},g=[];function m(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"file-sharing",children:"File sharing"}),"\n",(0,s.jsx)(n.p,{children:"You can try by running this code at your console:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"deno run https://mega.js.org/demos/sharing-demo.js\n"})}),"\n","\n",(0,s.jsx)(i.A,{language:"js",children:r})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var s=o(6540);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);