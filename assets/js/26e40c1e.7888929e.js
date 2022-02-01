"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[875],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return p}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=t.createContext({}),s=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(n),p=o,m=f["".concat(d,".").concat(p)]||f[p]||u[p]||a;return n?t.createElement(m,l(l({ref:r},c),{},{components:n})):t.createElement(m,l({ref:r},c))}));function p(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1374:function(e,r,n){n.d(r,{Z:function(){return i}});var t=n(7294),o=n(1736),a=n(9877),l=n(8215);n(2263);function i(e){var r=e.version||0,n=["Node ESM","Node CJS",r>0?"Browser/Deno":"Browser"],i=[function(e){return e},function(e){return e.replace(/import (.+?) from 'megajs'/g,"const $1 = require('megajs')")},function(e){return e.replace(/import (.+?) from 'megajs'/g,"import $1 from 'https://unpkg.com/megajs@"+r+"/dist/main.browser-es.js'")}];return t.createElement("div",null,t.createElement(a.Z,{groupId:"node2deno",className:"margin-bottom--sm"},n.map((function(r,n){return t.createElement(l.Z,{value:n,label:r,onClick:function(){return setMode(n)},key:"+"+n},t.createElement(o.Z,{language:e.language},i[n](e.code)))}))))}},3694:function(e,r,n){n.r(r),n.d(r,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return u}});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),l=n(1374),i=["components"],d={sidebar_position:6},s="Downloading files",c={unversionedId:"tutorial/downloading",id:"version-0.17/tutorial/downloading",title:"Downloading files",description:"To share a download you call .download() on the file object:",source:"@site/versioned_docs/version-0.17/tutorial/downloading.md",sourceDirName:"tutorial",slug:"/tutorial/downloading",permalink:"/docs/tutorial/downloading",editUrl:"https://github.com/qgustavor/mega-docs/tree/master/versioned_docs/version-0.17/tutorial/downloading.md",tags:[],version:"0.17",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Handling files",permalink:"/docs/tutorial/handling-files"},next:{title:"Advanced usage",permalink:"/docs/tutorial/advanced"}},u=[],f={toc:u};function p(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"downloading-files"},"Downloading files"),(0,a.kt)("p",null,"To share a download you call ",(0,a.kt)("inlineCode",{parentName:"p"},".download()")," on the file object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"file.download((error, data) => {\n  if (error) console.error(error)\n\n  // data is a Buffer containing the file contents\n  console.log(data)\n})\n")),(0,a.kt)("p",null,"You can also download files using Node streams either via pipes..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const stream = file.download()\nstream.on('error', error => console.error(error))\nstream.pipe(fs.createWriteStream(file.name))\n")),(0,a.kt)("p",null,"... or by listening data events:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const stream = file.download()\nstream.on('error', error => console.error(error))\nstream.on('data', data => console.log(data))\n")),(0,a.kt)("p",null,"You can download shared files by loading those from their URL instead of loading from the Storage class:"),(0,a.kt)(l.Z,{language:"js",code:"import { File } from 'megajs'\n\n// Get the file object from the URL\nconst file = File.fromURL('https://mega.nz/file/example#example')\n\n// Load file attributes\nfile.loadAttributes(error => {\n  if (error) return console.error(error)\n\n  // Then finally download the file like usual\n  file.download((error, data) => {\n    if (error) return console.error(error)\n    console.log(data)\n  })\n})\n",mdxType:"CodeBlockSwitchable"}),(0,a.kt)("p",null,"Shared files loaded using ",(0,a.kt)("inlineCode",{parentName:"p"},"File.fromURL")," don't have attributes - such as name and size - loaded by default, that's why ",(0,a.kt)("inlineCode",{parentName:"p"},"loadAttributes")," is called. If you don't need those data, just file contents, you can download the file directly using ",(0,a.kt)("inlineCode",{parentName:"p"},".download()"),"."),(0,a.kt)("p",null,"Shared folders can also be loaded using ",(0,a.kt)("inlineCode",{parentName:"p"},"File.fromURL")," and will behave like folders in ",(0,a.kt)("inlineCode",{parentName:"p"},"Storage"),": once their attributes are loaded they will have a ",(0,a.kt)("inlineCode",{parentName:"p"},".children")," property with an array of File objects which can be downloaded."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Get the folder object from the URL\nconst folder = File.fromURL('https://mega.nz/folder/example#example')\n\n// Load folder attributes\nfolder.loadAttributes(error => {\n  if (error) return console.error(error)\n\n  // Download a file from the folder\n  folder.children.find(file => file.name === 'hello-world.txt').download((error, data) => {\n    if (error) return console.error(error)\n    console.log(data)\n  })\n})\n")),(0,a.kt)("p",null,"When opening shared folders in Mega you can right-click some file and get a file pointing to a specific file in the folder. This library recognizes those kind of links and allow loading the file specified. To make it work get the file from the second argument in the ",(0,a.kt)("inlineCode",{parentName:"p"},"loadAttributes")," callback, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Get the folder object from the URL\nconst folder = File.fromURL('https://mega.nz/folder/example#example/file/example')\n\n// Load folder attributes\nfolder.loadAttributes((error, file) => {\n  if (error) return console.error(error)\n\n  // Will download a file specified by /file/example in the URL\n  file.download((error, data) => {\n    if (error) return console.error(error)\n    console.log(data)\n  })\n})\n")),(0,a.kt)("p",null,"And that's the end of the tutorial. At least the basic part: next comes some info on advanced usage."))}p.isMDXComponent=!0}}]);