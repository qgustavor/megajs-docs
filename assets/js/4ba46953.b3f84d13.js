"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[3441],{936:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>r,toc:()=>g});var i=o(4848),a=o(8453),s=o(1432);const t="import { getLoggedInStorage } from './logging-in-demo.js'\nconst storage = await getLoggedInStorage()\n\nconsole.log('Choose one of the following files:')\nconsole.log(storage.root.children.filter(e => !e.children).map(e => e.name))\n\nconst filename = prompt('Enter a file name (case sensitive):')\nconst file = storage.find(filename)\nif (!file) throw Error('File not found!')\n\nconst data = await file.downloadBuffer()\nawait Deno.writeFile(file.name, data)\n",l={sidebar_position:2.007},d="File downloading",r={id:"examples/file-downloading",title:"File downloading",description:"You can try by running this code at your console:",source:"@site/docs/examples/file-downloading.md",sourceDirName:"examples",slug:"/examples/file-downloading",permalink:"/docs/1.0/examples/file-downloading",draft:!1,unlisted:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/docs/examples/file-downloading.md",tags:[],version:"current",sidebarPosition:2.007,frontMatter:{sidebar_position:2.007},sidebar:"tutorialSidebar",previous:{title:"File sharing",permalink:"/docs/1.0/examples/file-sharing"},next:{title:"Shared file downloading",permalink:"/docs/1.0/examples/shared-file-downloading"}},c={},g=[];function m(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"file-downloading",children:"File downloading"}),"\n",(0,i.jsx)(n.p,{children:"You can try by running this code at your console:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"deno run https://mega.js.org/demos/downloading-demo.js\n"})}),"\n","\n",(0,i.jsx)(s.A,{language:"js",children:t})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);