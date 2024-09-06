"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[7047],{3924:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>g});var o=s(4848),i=s(8453),r=s(1432);const a="import { getLoggedInStorage } from './logging-in-demo.js'\nconst storage = await getLoggedInStorage()\n\nconsole.log('Choose one of the following files or folders:')\nconsole.log(storage.root.children.map(e => e.name))\n\nconst filename = prompt('Enter a file name (case sensitive):')\nconst file = storage.find(filename)\nif (!file) throw Error('File not found!')\n\nconst link = await file.link()\nconsole.log(link)\n",t={sidebar_position:2.006},l="File sharing",c={id:"examples/file-sharing",title:"File sharing",description:"You can try by running this code at your console:",source:"@site/docs/examples/file-sharing.md",sourceDirName:"examples",slug:"/examples/file-sharing",permalink:"/docs/1.0/examples/file-sharing",draft:!1,unlisted:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/docs/examples/file-sharing.md",tags:[],version:"current",sidebarPosition:2.006,frontMatter:{sidebar_position:2.006},sidebar:"tutorialSidebar",previous:{title:"File renaming",permalink:"/docs/1.0/examples/file-renaming"},next:{title:"File downloading",permalink:"/docs/1.0/examples/file-downloading"}},d={},g=[];function m(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"file-sharing",children:"File sharing"}),"\n",(0,o.jsx)(n.p,{children:"You can try by running this code at your console:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"deno run https://mega.js.org/demos/sharing-demo.js\n"})}),"\n","\n",(0,o.jsx)(r.A,{language:"js",children:a})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}}}]);