"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[6190],{69:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=n(4848),r=n(8453),a=n(1432);const s="import { getLoggedInStorage } from './logging-in-demo.js'\nconst storage = await getLoggedInStorage()\n\nconst folderName = prompt('Enter a folder name:')\nconst folderStat = await Deno.stat(folderName)\nif (!folderStat.isDirectory) throw Error('Not a directory!')\n\n// First create a folder\nconst megaFolder = await storage.mkdir(folderName)\n\n// Then upload files into it\nfor await (const entry of Deno.readDir(folderName)) {\n  const filePath = folderName + '/' + entry.name\n  const fileStat = await Deno.stat(filePath)\n  if (fileStat.isDirectory) {\n    throw Error('Recursive folder uploading was not implemented in this demo! Check the other one!')\n  }\n  const data = await Deno.readFile(filePath)\n  await megaFolder.upload({\n    name: entry.name,\n    // You need to set forceHttps to false in order to make\n    // Deno connect to the unsafe MEGA upload servers\n    // (which use out-of-date TLS configurations)\n    // That's not needed in Node.js nor in browsers\n    forceHttps: false\n  }, data).complete\n}\n\nconsole.log('The folder was uploaded!', megaFolder)\n",i={sidebar_position:2.01},d="Folder uploading",l={id:"examples/folder-uploading",title:"Folder uploading",description:"You can try by running this code at your console:",source:"@site/docs/examples/folder-uploading.md",sourceDirName:"examples",slug:"/examples/folder-uploading",permalink:"/docs/1.0/examples/folder-uploading",draft:!1,unlisted:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/docs/examples/folder-uploading.md",tags:[],version:"current",sidebarPosition:2.01,frontMatter:{sidebar_position:2.01},sidebar:"tutorialSidebar",previous:{title:"File iterating",permalink:"/docs/1.0/examples/iterating-files"},next:{title:"Recursive folder uploading",permalink:"/docs/1.0/examples/recursive-folder-uploading"}},c={},p=[];function u(e){const o={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"folder-uploading",children:"Folder uploading"}),"\n",(0,t.jsx)(o.p,{children:"You can try by running this code at your console:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"deno run https://mega.js.org/demos/folder-uploading-demo.js\n"})}),"\n","\n",(0,t.jsx)(a.A,{language:"js",children:s})]})}function g(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}}}]);