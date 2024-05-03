"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[410],{5805:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var t=r(4848),a=r(8453),l=r(1470),o=r(9365);const s={sidebar_position:6},i="Downloading files",d={id:"tutorial/downloading",title:"Downloading files",description:"To share a download you call .downloadBuffer() or .download() on the file object:",source:"@site/docs/tutorial/downloading.md",sourceDirName:"tutorial",slug:"/tutorial/downloading",permalink:"/docs/1.0/tutorial/downloading",draft:!1,unlisted:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/docs/tutorial/downloading.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Handling files",permalink:"/docs/1.0/tutorial/handling-files"},next:{title:"Interrupted downloads",permalink:"/docs/1.0/tutorial/interrupted-downloads"}},c={},u=[];function h(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"downloading-files",children:"Downloading files"}),"\n",(0,t.jsxs)(n.p,{children:["To share a download you call ",(0,t.jsx)(n.code,{children:".downloadBuffer()"})," or ",(0,t.jsx)(n.code,{children:".download()"})," on the file object:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Using promises\nconst data = await file.downloadBuffer()\n\n// data is a Buffer containing the file contents\nconsole.log(data)\n\n// Using callbacks\nfile.downloadBuffer((error, data) => {\n  if (error) console.error(error)\n  console.log(data)\n})\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you use ",(0,t.jsx)(n.code,{children:".download()"})," then you can also download files using Node streams either via pipes..."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const stream = file.download()\nstream.on('error', error => console.error(error))\nstream.pipe(fs.createWriteStream(file.name))\n"})}),"\n",(0,t.jsx)(n.p,{children:"... or by listening data events:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const stream = file.download()\nstream.on('error', error => console.error(error))\nstream.on('data', data => console.log(data))\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Those are useful when dealing with huge files as ",(0,t.jsx)(n.code,{children:".downloadBuffer()"})," stores the entire file in memory. In the other hand, because of that, ",(0,t.jsx)(n.code,{children:".download()"})," can't return a promise. Also, you can still use callbacks with ",(0,t.jsx)(n.code,{children:".download()"})," like in V0."]}),"\n",(0,t.jsxs)(n.p,{children:["You can get progress events from the ",(0,t.jsx)(n.code,{children:"progress"})," event like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const stream = file.download()\nstream.on('progress', info => {\n  console.log('Loaded', info.bytesLoaded, 'bytes of', info.bytesTotal)\n})\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In order to render the values returned by the ",(0,t.jsx)(n.code,{children:"progress"})," event you have many options:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For browsers you can use ",(0,t.jsxs)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress",children:["the ",(0,t.jsx)(n.code,{children:"<progress>"})," element"]})," or libraries such as ",(0,t.jsx)(n.a,{href:"https://kimmobrunfeldt.github.io/progressbar.js/",children:"progressbar.js"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:["For Node.js there are libraries such as ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/cli-progress",children:"cli-progress"})," and ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/progress",children:"progress"}),";"]}),"\n",(0,t.jsx)(n.li,{children:"Other runtimes - like Bun - might support one or more of the above."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can download shared files by loading those from their URL instead of loading from the Storage class:"}),"\n",(0,t.jsxs)(l.A,{groupId:"node2deno",children:[(0,t.jsx)(o.A,{value:"node_esm",label:"Node ESM",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { File } from 'megajs'\n\n// Get the file object from the URL\nconst file = File.fromURL('https://mega.nz/file/example#example')\n\n// Load file attributes\nawait file.loadAttributes()\n\n// Then finally download the file like usual\nconst data = await file.downloadBuffer()\nconsole.log(data)\n"})})}),(0,t.jsx)(o.A,{value:"node_cjs",label:"Node CJS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"  const { File } = require('megajs')\n\n// Node doesn't support top-level await when using CJS\n;(async function () {\n  // Get the file object from the URL\n  const file = File.fromURL('https://mega.nz/file/example#example')\n\n  // Load file attributes\n  await file.loadAttributes()\n\n  // Then finally download the file like usual\n  const data = await file.downloadBuffer()\n  console.log(data)\n}()).catch(error => {\n  console.error(error)\n  process.exit(1)\n})\n\n"})})}),(0,t.jsx)(o.A,{value:"browser",label:"Browser",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { File } from 'https://cdn.skypack.dev/megajs'\n\n// Get the file object from the URL\nconst file = File.fromURL('https://mega.nz/file/example#example')\n\n// Load file attributes\nawait file.loadAttributes()\n\n// Then finally download the file like usual\nconst data = await file.downloadBuffer()\nconsole.log(data)\n"})})}),(0,t.jsx)(o.A,{value:"deno",label:"Deno",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { File } from 'npm:megajs'\n\n// Get the file object from the URL\nconst file = File.fromURL('https://mega.nz/file/example#example')\nfile.api.userAgent = null\n\n// Load file attributes\nawait file.loadAttributes()\n\n// Then finally download the file like usual\nconst data = await file.downloadBuffer()\nconsole.log(data)\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["When deploying to browsers use ",(0,t.jsx)(n.code,{children:"file.api.userAgent = null"})," to not set an user-agent since it will cause CORS issues on browsers that allow the ",(0,t.jsx)(n.code,{children:"user-agent"})," header to be set (like Firefox)."]}),"\n",(0,t.jsxs)(n.p,{children:["Shared files loaded using ",(0,t.jsx)(n.code,{children:"File.fromURL"})," don't have attributes - such as name and size - loaded by default, that's why ",(0,t.jsx)(n.code,{children:"loadAttributes"})," is called. If you don't need those attributes, just file contents, you can download the file directly using ",(0,t.jsx)(n.code,{children:".download()"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Will download the data without having to load attributes\nconst data = await File.fromURL('https://mega.nz/file/example#example').downloadBuffer()\nconsole.log(data)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Shared folders can also be loaded using ",(0,t.jsx)(n.code,{children:"File.fromURL"})," and will behave like folders in ",(0,t.jsx)(n.code,{children:"Storage"}),": once their attributes are loaded they will have a ",(0,t.jsx)(n.code,{children:".children"})," property with an array of File objects which can be downloaded."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Get the folder object from the URL\nconst folder = File.fromURL('https://mega.nz/folder/example#example')\n\n// Load folder attributes\nawait folder.loadAttributes()\n\n// Download a file from the folder\nconst file = folder.children.find(file => file.name === 'hello-world.txt')\nconst data = await file.downloadBuffer()\nconsole.log(data)\n"})}),"\n",(0,t.jsx)(n.p,{children:"When opening shared folders in MEGA you can right-click some file and get a file pointing to a specific file in the folder. This library recognizes those kind of links and allow loading the file specified. To make it work get the file from the promise, like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Get the folder object from the URL\nconst folder = File.fromURL('https://mega.nz/folder/example#example/file/example')\n\n// Load the file from the folder specified by /file/example in the URL\nconst file = await folder.loadAttributes()\n\n// And download it\nconst data = await file.downloadBuffer()\nconsole.log(data)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Like V0 ",(0,t.jsx)(n.code,{children:".loadAttributes()"})," will still accept a callback. The file specified by the URL will be returned in the second argument:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"folder.loadAttributes((error, file) => {})\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"download"})," function also allows using a custom ",(0,t.jsx)(n.code,{children:"handleRetries"})," function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"await file.download(\n  handleRetries: (tries, error, cb) => {\n    if (tries > 8) {\n      // Give up after eight retries\n      cb(error)\n    } else {\n      // Wait some time then try again\n      setTimeout(cb, 1000 * Math.pow(2, tries))\n    }\n  }\n}).complete\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can replace the default retry handling function by overriding ",(0,t.jsx)(n.code,{children:"File.defaultHandleRetries"})," like this:"]}),"\n",(0,t.jsxs)(l.A,{groupId:"node2deno",children:[(0,t.jsx)(o.A,{value:"node_esm",label:"Node ESM",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { File } from 'megajs'\n\nFile.defaultHandleRetries = (tries, error, cb) => {\n  if (tries > 8) {\n    // Give up after eight retries\n    cb(error)\n  } else {\n    // Wait some time then try again\n    setTimeout(cb, 1000 * Math.pow(2, tries))\n  }\n}\n"})})}),(0,t.jsx)(o.A,{value:"node_cjs",label:"Node CJS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const { File } = require('megajs')\n\nFile.defaultHandleRetries = (tries, error, cb) => {\n  if (tries > 8) {\n    // Give up after eight retries\n    cb(error)\n  } else {\n    // Wait some time then try again\n    setTimeout(cb, 1000 * Math.pow(2, tries))\n  }\n}\n"})})}),(0,t.jsx)(o.A,{value:"browser",label:"Browser",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { File } from 'https://cdn.skypack.dev/megajs'\n\nFile.defaultHandleRetries = (tries, error, cb) => {\n  if (tries > 8) {\n    // Give up after eight retries\n    cb(error)\n  } else {\n    // Wait some time then try again\n    setTimeout(cb, 1000 * Math.pow(2, tries))\n  }\n}\n"})})}),(0,t.jsx)(o.A,{value:"deno",label:"Deno",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { File } from 'npm:megajs'\n\nFile.defaultHandleRetries = (tries, error, cb) => {\n  if (tries > 8) {\n    // Give up after eight retries\n    cb(error)\n  } else {\n    // Wait some time then try again\n    setTimeout(cb, 1000 * Math.pow(2, tries))\n  }\n}\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["The function in ",(0,t.jsx)(n.code,{children:"File.defaultHandleRetries"})," is also the default function used by ",(0,t.jsx)(n.code,{children:"upload()"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The last part of the tutorial is handling interrupted downloads."})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>o});r(6540);var t=r(4164);const a={tabItem:"tabItem_Ymn6"};var l=r(4848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,o),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(6540),a=r(4164),l=r(3104),o=r(6347),s=r(205),i=r(7485),d=r(1682),c=r(9466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function f(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const a=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,l=h(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[d,u]=p({queryString:r,groupId:a}),[m,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),b=(()=>{const e=d??m;return f({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var g=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(4848);function x(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),c=e=>{const n=e.currentTarget,r=i.indexOf(n),a=s[r].value;a!==t&&(d(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:u,onClick:c,...l,className:(0,a.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function w(e){let{lazy:n,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,j.jsx)(x,{...n,...e}),(0,j.jsx)(w,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var t=r(6540);const a={},l=t.createContext(a);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);