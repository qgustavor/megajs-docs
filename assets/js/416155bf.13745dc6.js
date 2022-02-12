"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[265],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=l,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(k,r(r({ref:t},s),{},{components:a})):n.createElement(k,r({ref:t},s))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1374:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(1736),i=a(9877),r=a(8215);a(2263);function o(e){var t=e.version||"0",a=["Node ESM","Node CJS",parseInt(t.split(".")[0])>0?"Browser/Deno":"Browser"],o=[function(e){return e.replace(/\/\/ node2deno:if-deno\n.*\n?/g,"").replace(/\/\/ node2deno:if-node\n/g,"")},function(e){return(e=e.replace(/\/\/ node2deno:if-deno\n.*\n?/g,"").replace(/\/\/ node2deno:if-node\n/g,"")).includes("await ")&&(e=e.replace(/^(?!import|$)/gm,"  ").replace(/^\s*$/m,"\n// Node don't support top-level await when using CJS\n;(async function () {").replace(/\n*$/,"\n}())\n")),e=e.replace(/import (.+?) from 'megajs'/g,"const $1 = require('megajs')")},function(e){return e.replace(/import (.+?) from 'megajs'/g,'// @deno-types="https://cdn.skypack.dev/megajs@'+t+"/types/es.d.ts\"\nimport $1 from 'https://cdn.skypack.dev/megajs@"+t+"'").replace(/\/\/ node2deno:if-node\n.*\n/g,"").replace(/\/\/ node2deno:if-deno\n/g,"")}];return n.createElement("div",null,n.createElement(i.Z,{groupId:"node2deno",className:"margin-bottom--sm"},a.map((function(t,a){return n.createElement(r.Z,{value:a,label:t,onClick:function(){return setMode(a)},key:"+"+a},n.createElement(l.Z,{language:e.language},o[a](e.code)))}))))}},895:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=a(7462),l=a(3366),i=(a(7294),a(3905)),r=a(1374),o=["components"],d={sidebar_position:2},p="API Reference",s={unversionedId:"api",id:"version-0.17/api",title:"API Reference",description:"Entry point",source:"@site/versioned_docs/version-0.17/api.md",sourceDirName:".",slug:"/api",permalink:"/docs/api",editUrl:"https://github.com/qgustavor/mega-docs/tree/master/versioned_docs/version-0.17/api.md",tags:[],version:"0.17",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/docs/tutorial/security"}},c=[{value:"Entry point",id:"entry-point",children:[],level:2},{value:"Storage",id:"storage",children:[{value:"Creation",id:"creation",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Properties",id:"properties",children:[],level:3},{value:"Methods",id:"methods",children:[{value:"<code>.reload(cb)</code>",id:"reloadcb",children:[],level:4},{value:"<code>.login(cb)</code>",id:"logincb",children:[],level:4},{value:"<code>.getAccountInfo(cb)</code>",id:"getaccountinfocb",children:[],level:4}],level:3},{value:"Events",id:"events",children:[],level:3}],level:2},{value:"File",id:"file",children:[{value:"Creation",id:"creation-1",children:[],level:3},{value:"Options",id:"options-1",children:[],level:3},{value:"Properties",id:"properties-1",children:[],level:3},{value:"Methods",id:"methods-1",children:[{value:"<code>.loadAttributes(callback)</code>",id:"loadattributescallback",children:[],level:4},{value:"<code>.download([options], [callback])</code>",id:"downloadoptions-callback",children:[],level:4}],level:3}],level:2},{value:"Mutable File",id:"mutable-file",children:[{value:"Basic syntax",id:"basic-syntax",children:[],level:3},{value:"Methods",id:"methods-2",children:[{value:"<code>.upload(options | name, [data], [callback])</code>",id:"uploadoptions--name-data-callback",children:[],level:4},{value:"<code>.mkdir(options | name, callback)</code>",id:"mkdiroptions--name-callback",children:[],level:4},{value:"<code>.importFile(File | URL, callback)</code>",id:"importfilefile--url-callback",children:[],level:4},{value:"<code>.link([options], callback)</code> / <code>.shareFolder([options], callback)</code>",id:"linkoptions-callback--sharefolderoptions-callback",children:[],level:4},{value:"<code>.delete(permanent, callback)</code>",id:"deletepermanent-callback",children:[],level:4},{value:"<code>.moveTo(target, callback)</code>",id:"movetotarget-callback",children:[],level:4},{value:"<code>.setAttributes(attributes, callback)</code>",id:"setattributesattributes-callback",children:[],level:4},{value:"<code>.uploadAttribute(type, [buffer|stream], [callback])</code>",id:"uploadattributetype-bufferstream-callback",children:[],level:4},{value:"<code>.rename(newFileName, callback)</code>",id:"renamenewfilename-callback",children:[],level:4},{value:"<code>.setLabel(label, callback)</code>",id:"setlabellabel-callback",children:[],level:4},{value:"<code>.setFavorite(isFavorite, callback)</code>",id:"setfavoriteisfavorite-callback",children:[],level:4}],level:3},{value:"Events",id:"events-1",children:[],level:3}],level:2},{value:"Low level functions",id:"low-level-functions",children:[],level:2}],m={toc:c};function u(e){var t=e.components,a=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-reference"},"API Reference"),(0,i.kt)("h2",{id:"entry-point"},"Entry point"),(0,i.kt)("p",null,"The exported classes and functions are those below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Storage")," class"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"File")," class"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"file"),": alias to ",(0,i.kt)("inlineCode",{parentName:"li"},"File.fromURL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encrypt")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"decrypt")," (low level encryption streams)")),(0,i.kt)("h2",{id:"storage"},"Storage"),(0,i.kt)("p",null,"Creates a logged in connection instance to MEGA."),(0,i.kt)("h3",{id:"creation"},"Creation"),(0,i.kt)(r.Z,{language:"js",code:"import { Storage } from 'megajs'\nconst storage = new Storage(options, [callback])",mdxType:"CodeBlockSwitchable"}),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"email")," - User login email."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," - User password."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keepalive")," - Keep connection open to receive server-to-client requests that will be mapped to events. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"autologin")," - Logins to MEGA. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),". Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," if you want to change request options, like proxy, ",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorial/advanced#setting-request-configuration"},"like shown here"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"autoload")," - Load in file structure. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,i.kt)("p",null,"Temporary accounts aren't supported. Trying to login without an email or password will throw an error."),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("p",null,"Only loaded after ",(0,i.kt)("inlineCode",{parentName:"p"},"readyCallback()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ready")," event fires."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," - Account owner name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - Account master key"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sid")," - Current session ID"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"files")," - Hash of ",(0,i.kt)("inlineCode",{parentName:"li"},"MutableFile")," objects by node IDs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"root")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"MutableFile")," object for Cloud Drive main directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trash")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"MutableFile")," object for Rubbish bin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inbox")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"MutableFile")," object for Inbox"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mounts")," - Array of all top level directories")),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".upload")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".mkdir")," methods maps to ",(0,i.kt)("inlineCode",{parentName:"p"},"storage.root.upload")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"storage.root.mkdir")," methods."),(0,i.kt)("h4",{id:"reloadcb"},(0,i.kt)("inlineCode",{parentName:"h4"},".reload(cb)")),(0,i.kt)("p",null,"Reloads files tree. No need to call this if ",(0,i.kt)("inlineCode",{parentName:"p"},"autoload")," is used."),(0,i.kt)("h4",{id:"logincb"},(0,i.kt)("inlineCode",{parentName:"h4"},".login(cb)")),(0,i.kt)("p",null,"Logins to MEGA. No need to call this if ",(0,i.kt)("inlineCode",{parentName:"p"},"autologin")," is used."),(0,i.kt)("h4",{id:"getaccountinfocb"},(0,i.kt)("inlineCode",{parentName:"h4"},".getAccountInfo(cb)")),(0,i.kt)("p",null,"Get info related to account and quota usage. It returns a object with the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),": the account type"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spaceUsed"),": the space used by the account, in bytes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spaceTotal"),": the total space avaliable, in bytes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"downloadBandwidthUsed"),": the bandwidth quota used, in bytes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"downloadBandwidthTotal"),": the total bandwidth quota avaliable, in bytes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sharedBandwidthUsed"),": the shared bandwidth quota used, in bytes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sharedBandwidthLimit"),": the total shared bandwidth quota avaliable, in bytes")),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("p",null,"These events fire on file changes when ",(0,i.kt)("inlineCode",{parentName:"p"},"keepalive")," is used. The changes can be triggered from any session connected to the same account."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add")," - New file/dir was added. Parameters: file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"move")," - File was moved to another dir. Parameters: file, olddir."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delete")," - File was deleted. Parameters: file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"update")," - File was changed(renamed). Parameters: file.")),(0,i.kt)("h2",{id:"file"},"File"),(0,i.kt)("p",null,"Basic class that handle files and folders. Often used to handle ",(0,i.kt)("strong",{parentName:"p"},"shared")," files and folders."),(0,i.kt)("h3",{id:"creation-1"},"Creation"),(0,i.kt)(r.Z,{language:"js",code:"import { File } from 'megajs'\nconst file = File.fromURL(url)",mdxType:"CodeBlockSwitchable"}),(0,i.kt)("h3",{id:"options-1"},"Options"),(0,i.kt)("p",null,"If a string is passed it needs to be a shared MEGA url. It can be a ",(0,i.kt)("inlineCode",{parentName:"p"},"https://mega.co.nz")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"https://mega.nz")," file. The new URL format with ",(0,i.kt)("inlineCode",{parentName:"p"},"/file/")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"/folder/")," is also supported."),(0,i.kt)("p",null,"If an object is passed it needs to have the options below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"downloadId"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"https://mega.nz/#!THIS_PART!...")," of the share link; a string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"https://mega.nz/#!...!THIS_PART")," of the share link; string or a Buffer; optional"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"directory"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if loading a shared folder")),(0,i.kt)("h3",{id:"properties-1"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," - File name*"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attributes")," - Object of attributes*"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size")," - File size"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - File key (buffer)*"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timestamp")," - File creation time (unix timestamp in seconds)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodeId")," - File ID"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"downloadId")," - Link ID to file. Only if created from link."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"directory")," - Boolean if file is directory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"children")," - Array of files for directories.")),(0,i.kt)("p",null,"Values marked with ","*"," are ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," when an encryption key isn't specified."),(0,i.kt)("h3",{id:"methods-1"},"Methods"),(0,i.kt)("h4",{id:"loadattributescallback"},(0,i.kt)("inlineCode",{parentName:"h4"},".loadAttributes(callback)")),(0,i.kt)("p",null,"Load and decrypt file attributes. Attributes normally contain file name (",(0,i.kt)("inlineCode",{parentName:"p"},"'n'"),") but is possible to put anything there, as long it can be encoded as JSON. Isn't needed for files loaded from logged sessions. Trying to call it in a ",(0,i.kt)("inlineCode",{parentName:"p"},"MutableFile")," will throw an error."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"file.loadAttributes((err, file) => {\n  // now file properties were loaded\n})\n")),(0,i.kt)("p",null,"This function can be also be used to load file information contained in shared folders."),(0,i.kt)("h4",{id:"downloadoptions-callback"},(0,i.kt)("inlineCode",{parentName:"h4"},".download([options], [callback])")),(0,i.kt)("p",null,"Download and decrypt file contents into a readable stream or, if a callback is specified, into a buffer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"file.download().pipe(fs.createWriteStream('myfile.txt'))\n\nfile.download((err, data) => {\n  // data is buffer\n})\n")),(0,i.kt)("p",null,"This function downloads files using chunked multiple parallel connections to speed up downloading. Similar to the MEGA implementation it first loads a 128KB chunk, then a 256KB, increasing it until it reaches 1MB. You can use the options below to control that."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maxConnections"),": the number of parallel connections is defined (default: 4);"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initialChunkSize"),": first chunk size, in bytes (default: 128KB);"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chunkSizeIncrement"),": how many bytes to increment each time (default: 128KB);"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maxChunkSize"),": maximum chunk size, in bytes (max 1MB);"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"returnCiphertext"),": if ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," the ciphertext will be returned, which can be decrypted later using ",(0,i.kt)("inlineCode",{parentName:"li"},"decrypt")," low level function.")),(0,i.kt)("p",null,"The download function also support ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"end")," options, like ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options"},(0,i.kt)("inlineCode",{parentName:"a"},"fs.createReadStream")),"."),(0,i.kt)("h2",{id:"mutable-file"},"Mutable File"),(0,i.kt)("p",null,"Extends ",(0,i.kt)("inlineCode",{parentName:"p"},"File")," adding methods that are only available when logged in."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please note:")," what are mutable are the attributes of the files and folders, ",(0,i.kt)("strong",{parentName:"p"},"not")," their contents, as this library don't support this yet."),(0,i.kt)("h3",{id:"basic-syntax"},"Basic syntax"),(0,i.kt)("p",null,"Those objects can be only accessed when logged in and can only be accessed via the properties of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage")," object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"storage.root.children[0] // the first file in the root of the storage\n")),(0,i.kt)("h3",{id:"methods-2"},"Methods"),(0,i.kt)("h4",{id:"uploadoptions--name-data-callback"},(0,i.kt)("inlineCode",{parentName:"h4"},".upload(options | name, [data], [callback])")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fs.createReadStream('myfile.txt').pipe(folder.upload('myfile.txt'))\n\nfolder.upload('myfile.txt', 'Hello world!', (error, uploadedFile) => {})\n")),(0,i.kt)("p",null,"Upload a file to a folder."),(0,i.kt)("p",null,"To input data you can input a buffer, string or stream in the data argument or, as it returns a ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/stream.html"},"stream"),", pipe data into it. To handle upload completion or errors you can either use the callback, which will return either an error as its first argument or the uploaded file instance as its second, or, if you don't specify a callback, listen for ",(0,i.kt)("inlineCode",{parentName:"p"},"complete")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," events."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Supported options:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name"),": file name, ",(0,i.kt)("em",{parentName:"p"},"required"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"attributes"),": object of file attributes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"key"),": encryption key, Buffer or string; 192 bit; because MAC verification part of it be different in final key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"size"),": file size."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"MEGA's API needs final data length before uploading can start, streaming only fully works if you specify the size of your data. Otherwise it needs to first buffer your data to determine the size. Set this option as ",(0,i.kt)("strong",{parentName:"p"},"always")," as possible!")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"thumbnailImage"),": the Buffer or Stream of the thumbnail image")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"previewImage"),": the Buffer or Stream of the preview image")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"maxConnections"),": the number of parallel connections is defined (default: 4);")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"initialChunkSize"),": first chunk size, in bytes (default: 128KB);")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"chunkSizeIncrement"),": how many bytes to increment each time (default: 128KB);")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"maxChunkSize"),": maximum chunk size, in bytes (max 1MB);"))),(0,i.kt)("p",null,"Thumbnail images are 120px x 120px JPEG images with 70% quality. Preview images are JPEG images with a maximum width and height size of 1000px and 75% quality. Please use those settings to avoid breaking compatibility with other MEGA clients. This library don't generates neither preview or thumbnail images, only provides a way to uploading those."),(0,i.kt)("p",null,"Uploading data without encryption is supported and ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorial/advanced#uploading-without-encryption"},"is documented here"),"."),(0,i.kt)("p",null,"The upload stream is always returned even when a callback is specified. Standard events for ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/stream.html#stream_class_stream_writable"},"Writable\nStreams"),", like ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"finish"),", and methods, like ",(0,i.kt)("inlineCode",{parentName:"p"},".pipe()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".write()"),", work normally."),(0,i.kt)("h4",{id:"mkdiroptions--name-callback"},(0,i.kt)("inlineCode",{parentName:"h4"},".mkdir(options | name, callback)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"folder.mkdir('dirname', (err, file) => { ... })\n")),(0,i.kt)("p",null,"Create a new folder inside the current folder."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Supported options:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": directory name, ",(0,i.kt)("em",{parentName:"li"},"required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attributes"),": object of file attributes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),": encryption key, Buffer or string; 128 bit; only used internally (when sharing folders other key is used)")),(0,i.kt)("h4",{id:"importfilefile--url-callback"},(0,i.kt)("inlineCode",{parentName:"h4"},".importFile(File | URL, callback)")),(0,i.kt)("p",null,"Import a file to the specified folder. It accepts File objects (from ",(0,i.kt)("inlineCode",{parentName:"p"},"new File"),") or URLs of shared files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"folder.importFile('https://mega.nz/#!...', (err, file) => {\n  // `file` is a instance of MutableFile\n})\n")),(0,i.kt)("h4",{id:"linkoptions-callback--sharefolderoptions-callback"},(0,i.kt)("inlineCode",{parentName:"h4"},".link([options], callback)")," / ",(0,i.kt)("inlineCode",{parentName:"h4"},".shareFolder([options], callback)")),(0,i.kt)("p",null,"Make download link for a file or folder. ",(0,i.kt)("inlineCode",{parentName:"p"},".shareFolder")," only works for folders, ",(0,i.kt)("inlineCode",{parentName:"p"},".link")," works for both (but calls ",(0,i.kt)("inlineCode",{parentName:"p"},".shareFolder")," internally)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"file.link((err, url) => {\n  // url: https://mega.nz/#!downloadId!key\n})\n")),(0,i.kt)("p",null,"Supported options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"noKey"),": set ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," to return a url without an encryption key"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),": only works for folders, encryption key, can be a string or buffer, 128 bit")),(0,i.kt)("h4",{id:"deletepermanent-callback"},(0,i.kt)("inlineCode",{parentName:"h4"},".delete(permanent, callback)")),(0,i.kt)("p",null,"Delete file, permanently if ",(0,i.kt)("inlineCode",{parentName:"p"},"permanent")," is true, otherwise file is moved to rubbish bin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"file.delete((err) => {\n  // file was moved to rubbish bin\n})\n")),(0,i.kt)("h4",{id:"movetotarget-callback"},(0,i.kt)("inlineCode",{parentName:"h4"},".moveTo(target, callback)")),(0,i.kt)("p",null,"Move a file to target, which can be a folder object or it's nodeId."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"file.moveTo(storage.root, (err) => {\n  // file was moved to storage root\n})\n")),(0,i.kt)("h4",{id:"setattributesattributes-callback"},(0,i.kt)("inlineCode",{parentName:"h4"},".setAttributes(attributes, callback)")),(0,i.kt)("p",null,"Set the the attributes of a object. Doesn't remove the current ones, but can overwrite those."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"file.setAttributes({someAttribute: someValue}, (err) => {\n  // attribute was set\n})\n")),(0,i.kt)("h4",{id:"uploadattributetype-bufferstream-callback"},(0,i.kt)("inlineCode",{parentName:"h4"},".uploadAttribute(type, [buffer|stream], [callback])")),(0,i.kt)("p",null,"Upload a thumbnail or preview image to the existent file. Fails if the node is a folder."),(0,i.kt)("p",null,"The argument ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," can be a string (",(0,i.kt)("inlineCode",{parentName:"p"},"thumbnail")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"preview"),") or a integer (",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),")."),(0,i.kt)("h4",{id:"renamenewfilename-callback"},(0,i.kt)("inlineCode",{parentName:"h4"},".rename(newFileName, callback)")),(0,i.kt)("p",null,"Rename a file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"file.rename('hello-world.txt', (err) => {\n  // file was renamed\n})\n")),(0,i.kt)("h4",{id:"setlabellabel-callback"},(0,i.kt)("inlineCode",{parentName:"h4"},".setLabel(label, callback)")),(0,i.kt)("p",null,"Set file's label, where ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," can be a number between 0 and 7 or a valid label color the following: 'red', 'orange', 'yellow', 'green', 'blue', 'purple' and 'grey'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"file.setLabel('red', (err) => {\n  // file label is red now\n})\n")),(0,i.kt)("h4",{id:"setfavoriteisfavorite-callback"},(0,i.kt)("inlineCode",{parentName:"h4"},".setFavorite(isFavorite, callback)")),(0,i.kt)("p",null,"Set file as favorite is ",(0,i.kt)("inlineCode",{parentName:"p"},"isFavorite")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"file.setFavorite(true, (err) => {\n  // file is now a favorite\n})\n")),(0,i.kt)("h3",{id:"events-1"},"Events"),(0,i.kt)("p",null,"Same events as for Storage objects. Only trigger for a specific file."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"move")," - File was moved to another dir. Parameters: olddir."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delete")," - File was deleted."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"update")," - File metadata was changed.")),(0,i.kt)("h2",{id:"low-level-functions"},"Low level functions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"encrypt")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"decrypt")," are lower level transform streams. They accept a key as input and transform file data and outputs encrypted data and vice versa. They also handle MAC verification / generation."),(0,i.kt)("p",null,"The key for ",(0,i.kt)("inlineCode",{parentName:"p"},"encrypt")," must be 192 bit. When the stream ends it a full 256 bit key will be available via the ",(0,i.kt)("inlineCode",{parentName:"p"},".key")," property. The additional 64 bit come from the MAC."),(0,i.kt)("p",null,"The key for the ",(0,i.kt)("inlineCode",{parentName:"p"},"decrypt")," function must be the same 256 bit key returned during encryption."),(0,i.kt)("p",null,"Those functions are almost never used and are only exported in order to allow backyards compatibility."))}u.isMDXComponent=!0}}]);