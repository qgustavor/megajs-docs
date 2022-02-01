"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[750],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1374:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),o=n(1736),a=n(9877),i=n(8215);n(2263);function s(e){var t=e.version||0,n=["Node ESM","Node CJS",t>0?"Browser/Deno":"Browser"],s=[function(e){return e},function(e){return e.replace(/import (.+?) from 'megajs'/g,"const $1 = require('megajs')")},function(e){return e.replace(/import (.+?) from 'megajs'/g,"import $1 from 'https://unpkg.com/megajs@"+t+"/dist/main.browser-es.js'")}];return r.createElement("div",null,r.createElement(a.Z,{groupId:"node2deno",className:"margin-bottom--sm"},n.map((function(t,n){return r.createElement(i.Z,{value:n,label:t,onClick:function(){return setMode(n)},key:"+"+n},r.createElement(o.Z,{language:e.language},s[n](e.code)))}))))}},4976:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(1374),s=["components"],l={sidebar_position:7},u="Interrupted downloads",c={unversionedId:"tutorial/interrupted-downloads",id:"tutorial/interrupted-downloads",title:"Interrupted downloads",description:"If a download gets interrupted - because connection issues or user action - you need to create other stream to resume it:",source:"@site/docs/tutorial/interrupted-downloads.md",sourceDirName:"tutorial",slug:"/tutorial/interrupted-downloads",permalink:"/docs/next/tutorial/interrupted-downloads",editUrl:"https://github.com/qgustavor/mega-docs/tree/master/docs/tutorial/interrupted-downloads.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Downloading files",permalink:"/docs/next/tutorial/downloading"},next:{title:"Network settings",permalink:"/docs/next/tutorial/network-settings"}},d=[],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interrupted-downloads"},"Interrupted downloads"),(0,a.kt)("p",null,"If a download gets interrupted - because connection issues or user action - you need to create other stream to resume it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const file = File.fromURL(url)\nfile.loadAttributes(error => {\n  if (error) return console.error(error)\n\n  const start = fs.statSync(file.name).size\n  const downloadStream = file.download({ start })\n\n  const writableStream = fs.createWriteStream(filename, {\n    flags: 'r+', // <= set flags to prevent overwriting the file\n    start\n  })\n\n  downloadStream.pipe(writableStream)\n})\n")),(0,a.kt)("p",null,"The above example assume a Node.js environment, in other environments you might need to convert the Node stream returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"download")," to the way file streaming is handled in this environment (like Deno's ",(0,a.kt)("inlineCode",{parentName:"p"},"Deno.open"),")."),(0,a.kt)("p",null,"Interrupted downloads are not checked due to limitations on Mega's MAC verification which only works on the entire file contents, but you can verify an already downloaded file using the ",(0,a.kt)("inlineCode",{parentName:"p"},"verify")," function:"),(0,a.kt)(i.Z,{language:"js",code:"import { File, verify } from 'megajs'\n\n// Get a file read stream. In Node fs.createReadStream can be used:\nconst readStream = fs.createReadStream(filename)\n\nconst file = File.fromURL(url)\nconst verifyStream = verify(file.key)\nreadStream.pipe(verifyStream)\n\nverifyStream.on('error', error => {\n  // File is corrupted\n})\n\nverifyStream.on('end', error => {\n  // File is OK\n})\n",version:1,mdxType:"CodeBlockSwitchable"}),(0,a.kt)("p",null,"The last part of the tutorial is changing network settings."))}m.isMDXComponent=!0}}]);