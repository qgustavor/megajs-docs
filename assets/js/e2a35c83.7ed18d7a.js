"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[87],{4395:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=t(7462),n=(t(7294),t(3905));t(1374);const i={sidebar_position:3},a="Migrating from V0",s={unversionedId:"migrating-from-v0",id:"migrating-from-v0",title:"Migrating from V0",description:"Most of the changes from V0 to V1 are internal changes, like replacing request with fetch and migrating dependencies, but there were a few breaking changes.",source:"@site/docs/migrating-from-v0.md",sourceDirName:".",slug:"/migrating-from-v0",permalink:"/docs/1.0/migrating-from-v0",draft:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/docs/migrating-from-v0.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/docs/1.0/api"}},l={},d=[{value:"Uploading streams without specifying a file size",id:"uploading-streams-without-specifying-a-file-size",level:2},{value:"There is no request anymore",id:"there-is-no-request-anymore",level:2},{value:"Downloads and uploads retry on errors",id:"downloads-and-uploads-retry-on-errors",level:2},{value:"Code uses modern JavaScript",id:"code-uses-modern-javascript",level:2},{value:"Methods now return promises",id:"methods-now-return-promises",level:2},{value:"Some functions throw errors synchronously",id:"some-functions-throw-errors-synchronously",level:2},{value:"Streaming libraries were updated or replaced",id:"streaming-libraries-were-updated-or-replaced",level:2}],u={toc:d},p="wrapper";function m(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"migrating-from-v0"},"Migrating from V0"),(0,n.kt)("p",null,"Most of the changes from V0 to V1 are internal changes, like replacing request with fetch and migrating dependencies, but there were a few breaking changes."),(0,n.kt)("h2",{id:"uploading-streams-without-specifying-a-file-size"},"Uploading streams without specifying a file size"),(0,n.kt)("p",null,"Because uploading streams without specifying a file size requires the library to buffer the entire stream in memory and forgetting to specify the file size was a simple mistake to do (even megajs-cli got it wrong) this behavior is not allowed now."),(0,n.kt)("p",null,"Check ",(0,n.kt)("inlineCode",{parentName:"p"},".upload()")," calls and add the ",(0,n.kt)("inlineCode",{parentName:"p"},"size")," argument if missing."),(0,n.kt)("p",null,"If you can't add the ",(0,n.kt)("inlineCode",{parentName:"p"},"size")," argument and prefer the library to do buffering then is possible to restore the old behavior by setting ",(0,n.kt)("inlineCode",{parentName:"p"},"allowUploadBuffering")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"upload")," arguments."),(0,n.kt)("h2",{id:"there-is-no-request-anymore"},"There is no request anymore"),(0,n.kt)("p",null,"Check for ",(0,n.kt)("inlineCode",{parentName:"p"},"api.requestModule")," usages in your code and update those to use fetch. There are some shortcuts in V1 which can help, as documented ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.0/tutorial/network-settings"},"here"),"."),(0,n.kt)("h2",{id:"downloads-and-uploads-retry-on-errors"},"Downloads and uploads retry on errors"),(0,n.kt)("p",null,"Now downloading and uploading will retry up to eight times when downloading or uploading a chunk, defaulting to the following function:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"File.defaultHandleRetries = (tries, error, cb) => {\n  if (tries > 8) {\n    cb(error)\n  } else {\n    setTimeout(cb, 1000 * Math.pow(2, tries))\n  }\n}\n")),(0,n.kt)("p",null,"To restore the behavior from V0 replace the handler to this function"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"File.defaultHandleRetries = (tries, error, cb) => {\n  cb(error)\n}\n")),(0,n.kt)("h2",{id:"code-uses-modern-javascript"},"Code uses modern JavaScript"),(0,n.kt)("p",null,"Code is not being compiled down to ES5 anymore. It would require Babel and it is slow. If you target older browsers run the code thought Babel."),(0,n.kt)("h2",{id:"methods-now-return-promises"},"Methods now return promises"),(0,n.kt)("p",null,"Many methods in V0 returned ",(0,n.kt)("inlineCode",{parentName:"p"},"this"),". While returning ",(0,n.kt)("inlineCode",{parentName:"p"},"this")," is useful in some cases (as popularized by jQuery) because this library works asynchronously that's not so useful. Because of that now methods return promises which are more useful. Check if your code relies on the return value of the library methods (except by ",(0,n.kt)("inlineCode",{parentName:"p"},"MutableFile.prototype.upload()"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"File.prototype.download()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"new Storage()"),", those were kept the same). Also, because of that, promise support is now required, even when using callbacks, since promises are used internally."),(0,n.kt)("h2",{id:"some-functions-throw-errors-synchronously"},"Some functions throw errors synchronously"),(0,n.kt)("p",null,"Since streams throw errors synchronously now ",(0,n.kt)("inlineCode",{parentName:"p"},".encrypt()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},".verify()")," also do the same."),(0,n.kt)("h2",{id:"streaming-libraries-were-updated-or-replaced"},"Streaming libraries were updated or replaced"),(0,n.kt)("p",null,"It should not cause many issues, but maybe can cause changes in library behavior in case you depended on some Streams1 behavior. It may make the library more responsive than before, after all, the main reason to update those libraries was to fix Deno support."))}m.isMDXComponent=!0}}]);