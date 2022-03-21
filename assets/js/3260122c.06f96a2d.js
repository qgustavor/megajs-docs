"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[75],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1374:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(7294),o=t(1736),a=t(9877),i=t(8215);t(2263);function s(e){var n=e.version||"0",t=["Node ESM","Node CJS",parseInt(n.split(".")[0])>0?"Browser/Deno":"Browser"],s=[function(e){return e.replace(/\/\/ node2deno:if-deno\n.*\n?/g,"").replace(/\/\/ node2deno:if-node\n/g,"")},function(e){return(e=e.replace(/\/\/ node2deno:if-deno\n.*\n?/g,"").replace(/\/\/ node2deno:if-node\n/g,"")).includes("await ")&&(e=e.replace(/^(?!import|$)/gm,"  ").replace(/^\s*$/m,"\n// Node don't support top-level await when using CJS\n;(async function () {").replace(/\n*$/,"\n}()).catch(error => {\n  console.error(error)\n  process.exit(1)\n})\n")),e=e.replace(/import (.+?) from 'megajs'/g,"const $1 = require('megajs')")},function(e){return e.replace(/import (.+?) from 'megajs'/g,'// @deno-types="https://cdn.skypack.dev/megajs@'+n+"/types/es.d.ts\"\nimport $1 from 'https://cdn.skypack.dev/megajs@"+n+"'").replace(/\/\/ node2deno:if-node\n.*\n/g,"").replace(/\/\/ node2deno:if-deno\n/g,"")}];return r.createElement("div",null,r.createElement(a.Z,{groupId:"node2deno",className:"margin-bottom--sm"},t.map((function(n,t){return r.createElement(i.Z,{value:t,label:n,onClick:function(){return setMode(t)},key:"+"+t},r.createElement(o.Z,{language:e.language},s[t](e.code)))}))))}},1584:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=t(1374),s=["components"],l={sidebar_position:3},p="Logging in",c={unversionedId:"tutorial/login",id:"tutorial/login",title:"Logging in",description:"To log in to an account use the Storage class:",source:"@site/docs/tutorial/login.md",sourceDirName:"tutorial",slug:"/tutorial/login",permalink:"/docs/next/tutorial/login",editUrl:"https://github.com/qgustavor/megajs-docs/tree/master/docs/tutorial/login.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installing",permalink:"/docs/next/tutorial/install"},next:{title:"Uploading files",permalink:"/docs/next/tutorial/uploading"}},u={},m=[],d={toc:m};function g(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"logging-in"},"Logging in"),(0,a.kt)("p",null,"To log in to an account use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Storage")," class:"),(0,a.kt)(i.Z,{language:"js",code:"import { Storage } from 'megajs'\n\nconst storage = new Storage({\n  email: 'user@example.com',\n  password: 'correct horse battery example',\n  userAgent: 'ExampleClient/1.0'\n})\n\n// Will resolve once the user is logged in\n// or reject if some error happens\nawait storage.ready",version:"1",mdxType:"CodeBlockSwitchable"}),(0,a.kt)("p",null,"It is recommended to set up an user-agent. The library will default to ",(0,a.kt)("inlineCode",{parentName:"p"},"megajs/{version}")," (where ",(0,a.kt)("inlineCode",{parentName:"p"},"{version}")," is the library version). When deploying to browsers set ",(0,a.kt)("inlineCode",{parentName:"p"},"userAgent")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," as it can cause issues in some browsers (mostly Firefox)."),(0,a.kt)("p",null,"Events can still be used like in V0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"storage.once('ready', () => {\n  // User is now logged in\n})\n\nstorage.once('error', error => {\n  // Some error happened\n})\n")),(0,a.kt)("p",null,"It may look weird to pass a callback to a constructor, but that's an option too:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const storage = new Storage({\n  email: 'user@example.com',\n  password: 'correct horse battery example',\n  userAgent: 'ExampleClient/1.0'\n}, error => {\n  if (error) {\n    // Some error happened\n  } else {\n    // User is now logged in\n  }\n})\n")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you are migrating from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonistiigi/mega"},"tonistiigi's mega")," you can still use the following code:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const mega = require('megajs')\n\nconst storage = mega({\n  email: 'user@example.com',\n  password: 'correct horse battery example'\n}, error => {\n  if (error) {\n    // Some error happened\n  } else {\n    // User is now logged in\n  }\n})\n")),(0,a.kt)("p",{parentName:"div"},"But this pattern might not be supported in future versions because it is not compatible with ES modules and causes issues with tree shaking, which is important when this using this library in a browser environment."),(0,a.kt)("p",{parentName:"div"},"If you try to import the library using ",(0,a.kt)("inlineCode",{parentName:"p"},"import mega from 'megajs'")," it will throw the following error: ",(0,a.kt)("inlineCode",{parentName:"p"},"SyntaxError: The requested module 'megajs' does not provide an export named 'default'"),". Notice that, at the moment, Visual Studio Code will load CJS types - which still support this pattern - instead of ESM types even when using ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," and, because of that, it will not warn about this issue."))),(0,a.kt)("p",null,"In the next part of this tutorial we will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"storage")," object to upload a file."))}g.isMDXComponent=!0}}]);