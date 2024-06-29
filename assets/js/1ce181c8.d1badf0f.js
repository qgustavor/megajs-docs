"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[6433],{761:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>g});var a=o(4848),i=o(8453),s=o(1432);const t="import { getLoggedInStorage } from './logging-in-demo.js'\nconst storage = await getLoggedInStorage()\n\nconst name = prompt('Enter a file name:')\nconst data = await Deno.readFile(name)\n\nconst file = await storage.upload({ name }, data).complete\nconsole.log('The file was uploaded!', file)\n",l={sidebar_position:2.002},r="File uploading",d={id:"examples/file-uploading",title:"File uploading",description:"You can try by running this code at your console:",source:"@site/docs/examples/file-uploading.md",sourceDirName:"examples",slug:"/examples/file-uploading",permalink:"/docs/1.0/examples/file-uploading",draft:!1,unlisted:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/docs/examples/file-uploading.md",tags:[],version:"current",sidebarPosition:2.002,frontMatter:{sidebar_position:2.002},sidebar:"tutorialSidebar",previous:{title:"Logging-in",permalink:"/docs/1.0/examples/logging-in"},next:{title:"File searching",permalink:"/docs/1.0/examples/file-searching"}},c={},g=[];function p(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"file-uploading",children:"File uploading"}),"\n",(0,a.jsx)(n.p,{children:"You can try by running this code at your console:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"deno run https://mega.js.org/demos/uploading-demo.js\n"})}),"\n","\n",(0,a.jsx)(s.A,{language:"js",children:t})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}}}]);