"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[998],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||l;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4407:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var o=n(7462),a=n(3366),l=(n(7294),n(3905)),r=["components"],i={sidebar_position:4},s="Uploading files",p={unversionedId:"tutorial/uploading",id:"tutorial/uploading",title:"Uploading files",description:"Once you logged into your account you can upload files by calling storage.upload():",source:"@site/docs/tutorial/uploading.md",sourceDirName:"tutorial",slug:"/tutorial/uploading",permalink:"/docs/next/tutorial/uploading",editUrl:"https://github.com/qgustavor/mega-docs/tree/master/docs/tutorial/uploading.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Logging in",permalink:"/docs/next/tutorial/login"},next:{title:"Handling files",permalink:"/docs/next/tutorial/handling-files"}},u=[],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"uploading-files"},"Uploading files"),(0,l.kt)("p",null,"Once you logged into your account you can upload files by calling ",(0,l.kt)("inlineCode",{parentName:"p"},"storage.upload()"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const file = await storage.upload('hello-world.txt', 'Hello world!').complete\nconsole.log('The file was uploaded!', file)\n")),(0,l.kt)("p",null,"Notice that the function do not return a promise but it's available in the ",(0,l.kt)("inlineCode",{parentName:"p"},".complete")," property. It will be useful later when dealing with huge files."),(0,l.kt)("p",null,"Callbacks are still supported like in V0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"storage.upload('hello-world.txt', 'Hello world!', (error, file) => {\n  if (error) return console.error('There was an error:', error)\n  console.log('The file was uploaded!', file)\n})\n")),(0,l.kt)("p",null,"The upload function is one of the most complex functions in the library because it's quite flexible. In the example above you pass the file name in the first argument, the file contents in the second and wait for a callback."),(0,l.kt)("p",null,"You can input an options object too:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const file = await storage.upload({\n  name: 'hello-world.txt'\n}, 'Hello world!').complete\nconsole.log('The file was uploaded!', file)\n")),(0,l.kt)("p",null,"It allows you setting more options, some which will be explained later. The complete list of options are listed in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api"},"API reference page"),"."),(0,l.kt)("p",null,"You can use Buffers to input file content, like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const file = await storage.upload('hello-world.txt', Buffer.from('SGVsbG8gd29ybGQh', 'base64')).complete\nconsole.log('The file was uploaded!', file)\n")),(0,l.kt)("p",null,"When dealing with huge files is not good to put the entire file in memory: it can crash your application! Because of that Node readable streams are also supported as inputs, ",(0,l.kt)("strong",{parentName:"p"},"but")," then you also need to specify a file size in the options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const file = await storage.upload({\n  name: 'hello-world.txt',\n  size: 12\n}, fs.createReadStream('hello-world.txt')).complete\nconsole.log('The file was uploaded!', file)\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Mega requires the file size when uploading. If you don't know the file size the only way to workaround that is buffring the entire stream in memory, which will cause issues when uploading large files. It used to be allowed by default in V0, but because is quite easy to forget this behavior it is not allowed anymore. Either set the size or explicitly enable buffering by setting ",(0,l.kt)("inlineCode",{parentName:"p"},"allowUploadBuffering")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."))),(0,l.kt)("p",null,"Another way to to deal with huge files you can upload those by piping. The ",(0,l.kt)("inlineCode",{parentName:"p"},".upload()")," function returns a writable function, so just pipe to it. Don't forget to set the ",(0,l.kt)("inlineCode",{parentName:"p"},"size")," argument!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const fileStream = fs.createReadStream('hello-world.txt')\nconst uploadStream = storage.upload({\n  name: 'hello-world.txt',\n  size: 12\n})\nfileStream.pipe(uploadStream)\n\nconst file = await fileStream.complete\nconsole.log('The file was uploaded!', file)\n")),(0,l.kt)("p",null,"You can also use events instead of promises:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"uploadStream.on('complete', file) => {\n  console.log('The file was uploaded!', file)\n})\nuploadStream.on('error', error) => {\n  console.log('The file was uploaded!', file)\n})\n")),(0,l.kt)("p",null,"After uploading you will get a ",(0,l.kt)("inlineCode",{parentName:"p"},"File")," object either via the callback or the ",(0,l.kt)("inlineCode",{parentName:"p"},"complete")," event."),(0,l.kt)("p",null,"Because network connections can be unstable sometimes this library retries on errors up to eight times. You can change this behavior by providing a retry handling function to ",(0,l.kt)("inlineCode",{parentName:"p"},"upload()"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const file = await storage.upload({\n  name: 'hello-world.txt',\n  handleRetries: (tries, error, cb) => {\n    if (tries > 8) {\n      // Give up after eight retries\n      cb(error)\n    } else {\n      // Wait some time then try again\n      setTimeout(cb, 1000 * Math.pow(2, tries))\n    }\n  }\n}, 'Hello world!').complete\n\nconsole.log('The file was uploaded!', file)\n")),(0,l.kt)("p",null,"In the next part of this tutorial we will share this file and do other operations on it."))}d.isMDXComponent=!0}}]);