"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[875],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return p}});var o=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var d=o.createContext({}),s=function(e){var n=o.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(r),p=t,m=f["".concat(d,".").concat(p)]||f[p]||u[p]||a;return r?o.createElement(m,l(l({ref:n},c),{},{components:r})):o.createElement(m,l({ref:n},c))}));function p(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1374:function(e,n,r){r.d(n,{Z:function(){return i}});var o=r(7294),t=r(1736),a=r(9877),l=r(8215);r(2263);function i(e){var n=e.version||"0",r=["Node ESM","Node CJS",parseInt(n.split(".")[0])>0?"Browser/Deno":"Browser"],i=[function(e){return e.replace(/\/\/ node2deno:if-deno\n.*\n?/g,"").replace(/\/\/ node2deno:if-node\n/g,"")},function(e){return(e=e.replace(/\/\/ node2deno:if-deno\n.*\n?/g,"").replace(/\/\/ node2deno:if-node\n/g,"")).includes("await ")&&(e=e.replace(/^(?!import|$)/gm,"  ").replace(/^\s*$/m,"\n// Node don't support top-level await when using CJS\n;(async function () {").replace(/\n*$/,"\n}()).catch(error => {\n  console.error(error)\n  process.exit(1)\n})\n")),e=e.replace(/import (.+?) from 'megajs'/g,"const $1 = require('megajs')")},function(e){return e.replace(/import (.+?) from 'megajs'/g,'// @deno-types="https://cdn.skypack.dev/megajs@'+n+"/types/es.d.ts\"\nimport $1 from 'https://cdn.skypack.dev/megajs@"+n+"'").replace(/\/\/ node2deno:if-node\n.*\n/g,"").replace(/\/\/ node2deno:if-deno\n/g,"")}];return o.createElement("div",null,o.createElement(a.Z,{groupId:"node2deno",className:"margin-bottom--sm"},r.map((function(n,r){return o.createElement(l.Z,{value:r,label:n,onClick:function(){return setMode(r)},key:"+"+r},o.createElement(t.Z,{language:e.language},i[r](e.code)))}))))}},3694:function(e,n,r){r.r(n),r.d(n,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return u}});var o=r(7462),t=r(3366),a=(r(7294),r(3905)),l=r(1374),i=["components"],d={sidebar_position:6},s="Downloading files",c={unversionedId:"tutorial/downloading",id:"version-0.17/tutorial/downloading",title:"Downloading files",description:"To share a download you call .download() on the file object:",source:"@site/versioned_docs/version-0.17/tutorial/downloading.md",sourceDirName:"tutorial",slug:"/tutorial/downloading",permalink:"/docs/0.17/tutorial/downloading",editUrl:"https://github.com/qgustavor/mega-docs/tree/master/versioned_docs/version-0.17/tutorial/downloading.md",tags:[],version:"0.17",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Handling files",permalink:"/docs/0.17/tutorial/handling-files"},next:{title:"Advanced usage",permalink:"/docs/0.17/tutorial/advanced"}},u=[],f={toc:u};function p(e){var n=e.components,r=(0,t.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"downloading-files"},"Downloading files"),(0,a.kt)("p",null,"To share a download you call ",(0,a.kt)("inlineCode",{parentName:"p"},".download()")," on the file object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"file.download((error, data) => {\n  if (error) console.error(error)\n\n  // data is a Buffer containing the file contents\n  console.log(data)\n})\n")),(0,a.kt)("p",null,"You can also download files using Node streams either via pipes..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const stream = file.download()\nstream.on('error', error => console.error(error))\nstream.pipe(fs.createWriteStream(file.name))\n")),(0,a.kt)("p",null,"... or by listening data events:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const stream = file.download()\nstream.on('error', error => console.error(error))\nstream.on('data', data => console.log(data))\n")),(0,a.kt)("p",null,"You can download shared files by loading those from their URL instead of loading from the Storage class:"),(0,a.kt)(l.Z,{language:"js",code:"import { File } from 'megajs'\n\n// Get the file object from the URL\nconst file = File.fromURL('https://mega.nz/file/example#example')\n\n// Load file attributes\nfile.loadAttributes(error => {\n  if (error) return console.error(error)\n\n  // Then finally download the file like usual\n  file.download((error, data) => {\n    if (error) return console.error(error)\n    console.log(data)\n  })\n})\n",mdxType:"CodeBlockSwitchable"}),(0,a.kt)("p",null,"Shared files loaded using ",(0,a.kt)("inlineCode",{parentName:"p"},"File.fromURL")," don't have attributes - such as name and size - loaded by default, that's why ",(0,a.kt)("inlineCode",{parentName:"p"},"loadAttributes")," is called. If you don't need those data, just file contents, you can download the file directly using ",(0,a.kt)("inlineCode",{parentName:"p"},".download()"),"."),(0,a.kt)("p",null,"Shared folders can also be loaded using ",(0,a.kt)("inlineCode",{parentName:"p"},"File.fromURL")," and will behave like folders in ",(0,a.kt)("inlineCode",{parentName:"p"},"Storage"),": once their attributes are loaded they will have a ",(0,a.kt)("inlineCode",{parentName:"p"},".children")," property with an array of File objects which can be downloaded."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Get the folder object from the URL\nconst folder = File.fromURL('https://mega.nz/folder/example#example')\n\n// Load folder attributes\nfolder.loadAttributes(error => {\n  if (error) return console.error(error)\n\n  // Download a file from the folder\n  folder.children.find(file => file.name === 'hello-world.txt').download((error, data) => {\n    if (error) return console.error(error)\n    console.log(data)\n  })\n})\n")),(0,a.kt)("p",null,"When opening shared folders in Mega you can right-click some file and get a file pointing to a specific file in the folder. This library recognizes those kind of links and allow loading the file specified. To make it work get the file from the second argument in the ",(0,a.kt)("inlineCode",{parentName:"p"},"loadAttributes")," callback, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Get the folder object from the URL\nconst folder = File.fromURL('https://mega.nz/folder/example#example/file/example')\n\n// Load folder attributes\nfolder.loadAttributes((error, file) => {\n  if (error) return console.error(error)\n\n  // Will download a file specified by /file/example in the URL\n  file.download((error, data) => {\n    if (error) return console.error(error)\n    console.log(data)\n  })\n})\n")),(0,a.kt)("p",null,"And that's the end of the tutorial. At least the basic part: next comes some info on advanced usage."))}p.isMDXComponent=!0}}]);