"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[29],{1163:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var s=i(4848),o=i(8453);const n={sidebar_position:4},t="Migrating from old versions",a={id:"migrating-from-old-versions",title:"Migrating from old versions",description:"Migrating from tonistiigi's mega",source:"@site/docs/migrating-from-old-versions.md",sourceDirName:".",slug:"/migrating-from-old-versions",permalink:"/docs/1.0/migrating-from-old-versions",draft:!1,unlisted:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/docs/migrating-from-old-versions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/docs/1.0/api"},next:{title:"Platform compatibility",permalink:"/docs/1.0/platform-compatibility"}},l={},d=[{value:"Migrating from tonistiigi&#39;s mega",id:"migrating-from-tonistiigis-mega",level:2},{value:"Migrating from V0 to V1",id:"migrating-from-v0-to-v1",level:2},{value:"Uploading streams without specifying a file size",id:"uploading-streams-without-specifying-a-file-size",level:3},{value:"There is no request anymore",id:"there-is-no-request-anymore",level:3},{value:"Downloads and uploads retry on errors",id:"downloads-and-uploads-retry-on-errors",level:3},{value:"Code uses modern JavaScript",id:"code-uses-modern-javascript",level:3},{value:"Methods now return promises",id:"methods-now-return-promises",level:3},{value:"Some functions throw errors synchronously",id:"some-functions-throw-errors-synchronously",level:3},{value:"Streaming libraries were updated or replaced",id:"streaming-libraries-were-updated-or-replaced",level:3}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"migrating-from-old-versions",children:"Migrating from old versions"}),"\n",(0,s.jsx)(r.h2,{id:"migrating-from-tonistiigis-mega",children:"Migrating from tonistiigi's mega"}),"\n",(0,s.jsxs)(r.p,{children:["If you are migrating from ",(0,s.jsx)(r.a,{href:"https://www.npmjs.com/package/mega",children:"tonistiigi's mega package"})," you can follow instructions for how to migrate from V0 to V1 below, as V0 is mostly backyards compatible with tonistiigi's mega."]}),"\n",(0,s.jsx)(r.p,{children:"The only issue when migrating is that MEGAJS includes ES Module exports which are incompatible with the old CommonJS exports because tree-shaking reasons. If you were importing tonistiigi's mega using ES Modules you will need to fix your imports: instead of a single default export the library exports multiple classes and helper functions."}),"\n",(0,s.jsx)(r.p,{children:"If you migrate you will get features which are not available in tonistiigi's mega like:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"File and folder sharing"}),"\n",(0,s.jsx)(r.li,{children:"File management functions"}),"\n",(0,s.jsx)(r.li,{children:"Support for browsers (seems using Browserify stop working at sometime)"}),"\n",(0,s.jsx)(r.li,{children:"Tree shaking when using ES Modules"}),"\n",(0,s.jsx)(r.li,{children:"Native crypto on Node.js"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"If you migrate to MEGAJS V1 you will also get:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Support for V2 accounts"}),"\n",(0,s.jsx)(r.li,{children:"Support for promises"}),"\n",(0,s.jsx)(r.li,{children:"Helper methods for transversing directories"}),"\n",(0,s.jsx)(r.li,{children:"Actively supported (mostly via pull requests by collaborators)"}),"\n",(0,s.jsx)(r.li,{children:"Partial support for Deno and similar platforms"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"migrating-from-v0-to-v1",children:"Migrating from V0 to V1"}),"\n",(0,s.jsx)(r.p,{children:"Most of the changes from V0 to V1 are internal changes, like replacing request with fetch and migrating dependencies, but there were a few breaking changes."}),"\n",(0,s.jsx)(r.h3,{id:"uploading-streams-without-specifying-a-file-size",children:"Uploading streams without specifying a file size"}),"\n",(0,s.jsx)(r.p,{children:"Because uploading streams without specifying a file size requires the library to buffer the entire stream in memory and forgetting to specify the file size was a simple mistake to do (even megajs-cli got it wrong) this behavior is not allowed now."}),"\n",(0,s.jsxs)(r.p,{children:["Check ",(0,s.jsx)(r.code,{children:".upload()"})," calls and add the ",(0,s.jsx)(r.code,{children:"size"})," argument if missing."]}),"\n",(0,s.jsxs)(r.p,{children:["If you can't add the ",(0,s.jsx)(r.code,{children:"size"})," argument and prefer the library to do buffering then is possible to restore the old behavior by setting ",(0,s.jsx)(r.code,{children:"allowUploadBuffering"})," to ",(0,s.jsx)(r.code,{children:"true"})," in the ",(0,s.jsx)(r.code,{children:"upload"})," arguments."]}),"\n",(0,s.jsx)(r.h3,{id:"there-is-no-request-anymore",children:"There is no request anymore"}),"\n",(0,s.jsxs)(r.p,{children:["Check for ",(0,s.jsx)(r.code,{children:"api.requestModule"})," usages in your code and update those to use fetch. There are some shortcuts in V1 which can help, as documented ",(0,s.jsx)(r.a,{href:"/docs/1.0/tutorial/network-settings",children:"here"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"downloads-and-uploads-retry-on-errors",children:"Downloads and uploads retry on errors"}),"\n",(0,s.jsx)(r.p,{children:"Now downloading and uploading will retry up to eight times when downloading or uploading a chunk, defaulting to the following function:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"File.defaultHandleRetries = (tries, error, cb) => {\n  if (tries > 8) {\n    cb(error)\n  } else {\n    setTimeout(cb, 1000 * Math.pow(2, tries))\n  }\n}\n"})}),"\n",(0,s.jsx)(r.p,{children:"To restore the behavior from V0 replace the handler to this function"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"File.defaultHandleRetries = (tries, error, cb) => {\n  cb(error)\n}\n"})}),"\n",(0,s.jsx)(r.h3,{id:"code-uses-modern-javascript",children:"Code uses modern JavaScript"}),"\n",(0,s.jsx)(r.p,{children:"Code is not being compiled down to ES5 anymore. It would require Babel and it is slow. If you target older browsers run the code thought Babel."}),"\n",(0,s.jsx)(r.h3,{id:"methods-now-return-promises",children:"Methods now return promises"}),"\n",(0,s.jsxs)(r.p,{children:["Many methods in V0 returned ",(0,s.jsx)(r.code,{children:"this"}),". While returning ",(0,s.jsx)(r.code,{children:"this"})," is useful in some cases (as popularized by jQuery) because this library works asynchronously that's not so useful. Because of that now methods return promises which are more useful. Check if your code relies on the return value of the library methods (except by ",(0,s.jsx)(r.code,{children:"MutableFile.prototype.upload()"}),", ",(0,s.jsx)(r.code,{children:"File.prototype.download()"})," and ",(0,s.jsx)(r.code,{children:"new Storage()"}),", those were kept the same). Also, because of that, promise support is now required, even when using callbacks, since promises are used internally."]}),"\n",(0,s.jsx)(r.h3,{id:"some-functions-throw-errors-synchronously",children:"Some functions throw errors synchronously"}),"\n",(0,s.jsxs)(r.p,{children:["Since streams throw errors synchronously now ",(0,s.jsx)(r.code,{children:".encrypt()"})," and ",(0,s.jsx)(r.code,{children:".verify()"})," also do the same."]}),"\n",(0,s.jsx)(r.h3,{id:"streaming-libraries-were-updated-or-replaced",children:"Streaming libraries were updated or replaced"}),"\n",(0,s.jsx)(r.p,{children:"It should not cause many issues, but maybe can cause changes in library behavior in case you depended on some Streams1 behavior. It may make the library more responsive than before."})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,r,i)=>{i.d(r,{R:()=>t,x:()=>a});var s=i(6540);const o={},n=s.createContext(o);function t(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);