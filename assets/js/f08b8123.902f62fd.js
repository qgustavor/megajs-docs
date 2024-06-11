"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[4719],{8330:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(4848),s=n(8453);const i={sidebar_position:1},r="Introduction",a={id:"examples/intro",title:"Introduction",description:"In this section there are code examples meant to be run using Deno.",source:"@site/docs/examples/intro.md",sourceDirName:"examples",slug:"/examples/intro",permalink:"/docs/1.0/examples/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/docs/examples/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/docs/1.0/tutorial/security"},next:{title:"Logging-in",permalink:"/docs/1.0/examples/logging-in"}},l={},d=[];function c(e){const o={a:"a",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(o.p,{children:"In this section there are code examples meant to be run using Deno."}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"https://deno.com/",children:"Deno"})," is a secure-by-default JavaScript runtime that allows code to be loaded and run from the Internet, so you can just run those examples by typing commands like ",(0,t.jsx)(o.code,{children:"deno run https://mega.js.org/..."})," in your terminal, ",(0,t.jsx)(o.em,{children:"which may look unsafe"}),", but it isn't as since Deno includes security features that allow you to know and permit (or not) the code to run dangerous actions, like reading or writing files, accessing environment variables, connecting to remote servers, and so on."]}),"\n",(0,t.jsx)(o.p,{children:"Code examples are sorted in those levels:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsx)(o.li,{children:"Simple examples that show how to use the library but aren't too useful on their own."}),"\n",(0,t.jsx)(o.li,{children:"More advanced examples that might be useful for someone using this library to automate their workflow."}),"\n",(0,t.jsx)(o.li,{children:"Complete single-file applications that might be sourced from real applications."}),"\n",(0,t.jsx)(o.li,{children:"Advanced examples that aren't too useful but show some extra functionality of the library"}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"Notice that most the examples do not include error handling for simplicity sake. This library already retries in case of connection errors while uploading and downloading, but you might have to add error checks and proper error handling on real applications for many uncounted cases like handling wrong account credentials, handling non-existent files, handling errors while reading or writing to the disk, permission checking, and so on."}),"\n",(0,t.jsxs)(o.p,{children:["Also notice that, despite Deno being used for the demos for the reasons stated above, this library is mostly focused on Node.js and uses Buffer and Stream implementations, based on Node.js code, for many of its methods (like downloading and uploading files). Some of the examples using workarounds to use Node.js compatible APIs with Deno APIs (like using ",(0,t.jsx)(o.code,{children:"for await"})," to get data from the download readable stream instead of using ",(0,t.jsx)(o.code,{children:"pipe"}),"), but it should be noted that all of those can easily be modified to work with Node.js APIs by replacing Deno's APIs (like ",(0,t.jsx)(o.code,{children:"Deno.open"}),") by their Node.js equivalents (like ",(0,t.jsx)(o.code,{children:"fs.createReadStream"}),")."]})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);