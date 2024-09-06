"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[3259],{2260:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(4848),l=n(8453);const i={sidebar_position:4},t="Uploading files",s={id:"tutorial/uploading",title:"Uploading files",description:"Once you logged into your account you can upload files by calling storage.upload():",source:"@site/versioned_docs/version-0.17/tutorial/uploading.md",sourceDirName:"tutorial",slug:"/tutorial/uploading",permalink:"/docs/0.17/tutorial/uploading",draft:!1,unlisted:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/versioned_docs/version-0.17/tutorial/uploading.md",tags:[],version:"0.17",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Logging in",permalink:"/docs/0.17/tutorial/login"},next:{title:"Handling files",permalink:"/docs/0.17/tutorial/handling-files"}},a={},d=[];function c(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"uploading-files",children:"Uploading files"}),"\n",(0,r.jsxs)(o.p,{children:["Once you logged into your account you can upload files by calling ",(0,r.jsx)(o.code,{children:"storage.upload()"}),":"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-js",children:"storage.upload('hello-world.txt', 'Hello world!', (error, file) => {\n  if (error) return console.error('There was an error:', error)\n  console.log('The file was uploaded!', file)\n})\n"})}),"\n",(0,r.jsx)(o.p,{children:"The upload function is one of the most complex functions in the library because it's quite flexible. In the example above you pass the file name in the first argument, the file contents in the second and wait for a callback."}),"\n",(0,r.jsx)(o.p,{children:"You can input an options object too:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-js",children:"storage.upload({\n  name: 'hello-world.txt'\n}, 'Hello world!', (error, file) => {\n  if (error) return console.error('There was an error:', error)\n  console.log('The file was uploaded!', file)\n})\n"})}),"\n",(0,r.jsxs)(o.p,{children:["It allows you setting more options, some which will be explained later. The complete list of options are listed in the ",(0,r.jsx)(o.a,{href:"/docs/0.17/api",children:"API reference page"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"You can use Buffers to input file content, like this:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-js",children:"storage.upload('hello-world.txt', Buffer.from('SGVsbG8gd29ybGQh', 'base64'), (error, file) => {\n  if (error) return console.error('There was an error:', error)\n  console.log('The file was uploaded!', file)\n})\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Node readable streams are also supported as inputs, ",(0,r.jsx)(o.strong,{children:"but"})," then you also need to specify a file size in the options:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-js",children:"storage.upload({\n  name: 'hello-world.txt',\n  size: 12\n}, fs.createReadStream('hello-world.txt'), (error, file) => {\n  if (error) return console.error('There was an error:', error)\n  console.log('The file was uploaded!', file)\n})\n"})}),"\n",(0,r.jsx)(o.admonition,{type:"info",children:(0,r.jsx)(o.p,{children:"If you forget to specify the file size the entire stream will be buffered in memory, which will cause issues when uploading large files. Because is quite easy to make this mistake in V1 it is not allowed to upload without setting the size or explicitly enabling buffering."})}),"\n",(0,r.jsx)(o.p,{children:"Finally piping is another way to uploading files:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-js",children:"const fileStream = fs.createReadStream('hello-world.txt')\nconst uploadStream = storage.upload({\n  name: 'hello-world.txt',\n  size: 12\n})\nfileStream.pipe(uploadStream)\nuploadStream.on('complete', file) => {\n  console.log('The file was uploaded!', file)\n})\nuploadStream.on('error', error) => {\n  console.log('The file was uploaded!', file)\n})\n"})}),"\n",(0,r.jsxs)(o.p,{children:["After uploading you will get a ",(0,r.jsx)(o.code,{children:"File"})," object either via the callback or the ",(0,r.jsx)(o.code,{children:"complete"})," event. In the next part of this tutorial we will share this file and do other operations on it."]})]})}function u(e={}){const{wrapper:o}={...(0,l.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);