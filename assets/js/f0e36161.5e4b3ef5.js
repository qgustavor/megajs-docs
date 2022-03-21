"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[417],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=o,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return t?n.createElement(f,a(a({ref:r},d),{},{components:t})):n.createElement(f,a({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=c;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7115:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:3},l="Migrating from V0",u={unversionedId:"migrating-from-v0",id:"version-1.0/migrating-from-v0",title:"Migrating from V0",description:"Most of the changes from V0 to V1 are internal changes, like replacing request with fetch and migrating dependencies, but there were a few breaking changes.",source:"@site/versioned_docs/version-1.0/migrating-from-v0.md",sourceDirName:".",slug:"/migrating-from-v0",permalink:"/docs/migrating-from-v0",editUrl:"https://github.com/qgustavor/megajs-docs/tree/master/versioned_docs/version-1.0/migrating-from-v0.md",tags:[],version:"1.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/docs/api"}},d={},p=[{value:"Uploading streams without specifying a file size",id:"uploading-streams-without-specifying-a-file-size",level:2},{value:"There is no request anymore",id:"there-is-no-request-anymore",level:2},{value:"Downloads and uploads retry on errors",id:"downloads-and-uploads-retry-on-errors",level:2},{value:"Code uses modern JavaScript",id:"code-uses-modern-javascript",level:2},{value:"Methods now return promises",id:"methods-now-return-promises",level:2},{value:"Some functions throw errors synchronously",id:"some-functions-throw-errors-synchronously",level:2},{value:"Streaming libraries were updated or replaced",id:"streaming-libraries-were-updated-or-replaced",level:2}],c={toc:p};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrating-from-v0"},"Migrating from V0"),(0,i.kt)("p",null,"Most of the changes from V0 to V1 are internal changes, like replacing request with fetch and migrating dependencies, but there were a few breaking changes."),(0,i.kt)("h2",{id:"uploading-streams-without-specifying-a-file-size"},"Uploading streams without specifying a file size"),(0,i.kt)("p",null,"Because uploading streams without specifying a file size requires the library to buffer the entire stream in memory and forgetting to specify the file size was a simple mistake to do (even megajs-cli got it wrong) this behavior is not allowed now."),(0,i.kt)("p",null,"Check ",(0,i.kt)("inlineCode",{parentName:"p"},".upload()")," calls and add the ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," argument if missing."),(0,i.kt)("p",null,"If you can't add the ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," argument and prefer the library to do buffering then is possible to restore the old behavior by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"allowUploadBuffering")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"upload")," arguments."),(0,i.kt)("h2",{id:"there-is-no-request-anymore"},"There is no request anymore"),(0,i.kt)("p",null,"Check for ",(0,i.kt)("inlineCode",{parentName:"p"},"api.requestModule")," usages in your code and update those to use fetch. There are some shortcuts in V1 which can help, as documented ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorial/network-settings"},"here"),"."),(0,i.kt)("h2",{id:"downloads-and-uploads-retry-on-errors"},"Downloads and uploads retry on errors"),(0,i.kt)("p",null,"Now downloading and uploading will retry up to eight times when downloading or uploading a chunk, defaulting to the following function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"File.defaultHandleRetries = (tries, error, cb) => {\n  if (tries > 8) {\n    cb(error)\n  } else {\n    setTimeout(cb, 1000 * Math.pow(2, tries))\n  }\n}\n")),(0,i.kt)("p",null,"To restore the behavior from V0 replace the handler to this function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"File.defaultHandleRetries = (tries, error, cb) => {\n  cb(error)\n}\n")),(0,i.kt)("h2",{id:"code-uses-modern-javascript"},"Code uses modern JavaScript"),(0,i.kt)("p",null,"Code is not being compiled down to ES5 anymore. It would require Babel and it is slow. If you target older browsers run the code thought Babel."),(0,i.kt)("h2",{id:"methods-now-return-promises"},"Methods now return promises"),(0,i.kt)("p",null,"Many methods in V0 returned ",(0,i.kt)("inlineCode",{parentName:"p"},"this"),". While returning ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," is useful in some cases (as popularized by jQuery) because this library works asynchronously that's not so useful. Because of that now methods return promises which are more useful. Check if your code relies on the return value of the library methods (except by ",(0,i.kt)("inlineCode",{parentName:"p"},"MutableFile.prototype.upload()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"File.prototype.download()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"new Storage()"),", those were kept the same). Also, because of that, promise support is now required, even when using callbacks, since promises are used internally."),(0,i.kt)("h2",{id:"some-functions-throw-errors-synchronously"},"Some functions throw errors synchronously"),(0,i.kt)("p",null,"Since streams throw errors synchronously now ",(0,i.kt)("inlineCode",{parentName:"p"},".encrypt()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".verify()")," also do the same."),(0,i.kt)("h2",{id:"streaming-libraries-were-updated-or-replaced"},"Streaming libraries were updated or replaced"),(0,i.kt)("p",null,"It should not cause many issues, but maybe can cause changes in library behavior in case you depended on some Streams1 behavior. It may make the library more responsive than before, after all, the main reason to update those libraries was to fix Deno support."))}m.isMDXComponent=!0}}]);