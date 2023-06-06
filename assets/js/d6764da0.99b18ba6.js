"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[575],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),p=o,m=u["".concat(s,".").concat(p)]||u[p]||f[p]||l;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},886:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return f}});var r=t(7462),o=t(3366),l=(t(7294),t(3905)),a=["components"],i={sidebar_position:5},s="Handling files",c={unversionedId:"tutorial/handling-files",id:"version-1.0/tutorial/handling-files",title:"Handling files",description:"To share a file you call .link() on the file object you got when uploading:",source:"@site/versioned_docs/version-1.0/tutorial/handling-files.md",sourceDirName:"tutorial",slug:"/tutorial/handling-files",permalink:"/docs/tutorial/handling-files",editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/versioned_docs/version-1.0/tutorial/handling-files.md",tags:[],version:"1.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Uploading files",permalink:"/docs/tutorial/uploading"},next:{title:"Downloading files",permalink:"/docs/tutorial/downloading"}},d={},f=[],u={toc:f};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"handling-files"},"Handling files"),(0,l.kt)("p",null,"To share a file you call ",(0,l.kt)("inlineCode",{parentName:"p"},".link()")," on the file object you got when uploading:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Using promises\nconst link = await file.link()\n\n// It will log something like https://mega.nz/file/example#example\nconsole.log(link)\n\n// Using callbacks\nfile.link((error, link) => {\n  if (error) console.error(error)\n  console.log(link)\n})\n")),(0,l.kt)("p",null,"You can also share files in your account like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// storage is the new Storage() class from the login tutorial\n\n// It will share the first file in the root folder of the account \nstorage.root.children[0].link()\n")),(0,l.kt)("p",null,"To access files in Storage class you can use ",(0,l.kt)("inlineCode",{parentName:"p"},".root")," to access the root folder then ",(0,l.kt)("inlineCode",{parentName:"p"},".children")," to list its children, which are also ",(0,l.kt)("inlineCode",{parentName:"p"},"File")," objects."),(0,l.kt)("p",null,"If you need to find a file from a folder by the name you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"Array.prototype.find"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const file = storage.root.children.find(file => file.name === 'hello-world.txt')\n")),(0,l.kt)("p",null,"You can also search files in the entire storage by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"storage.files")," object. This object is a map of ",(0,l.kt)("inlineCode",{parentName:"p"},"file id => File object"),", so in order to search the entire account you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"Object.values")," like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const file = Object.values(storage.files).find(file => file.name === 'hello-world.txt')\n")),(0,l.kt)("p",null,"Folders are also listed in ",(0,l.kt)("inlineCode",{parentName:"p"},"storage.files")," and in ",(0,l.kt)("inlineCode",{parentName:"p"},".children"),", as folders are also ",(0,l.kt)("inlineCode",{parentName:"p"},"File")," objects, the difference being that they have ",(0,l.kt)("inlineCode",{parentName:"p"},".directory ")," set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", have ",(0,l.kt)("inlineCode",{parentName:"p"},".children")," defined to be an array of its children and cannot be downloaded."),(0,l.kt)("p",null,"Those differences aside they can be manipulated like other files:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"fileORFolder.link() // shares files and folders\nfileORFolder.unshare() // unshares files and folders\nfileORFolder.rename(newName) // renames files and folders\nfileORFolder.moveTo(someFolder) // moves files and folders\nfileORFolder.setFavorite(true) // marks files and folders as favorites\nfileORFolder.delete() // moves files and folders to the trash\nfileORFolder.delete(true) // delete files and folders permanently \n")),(0,l.kt)("p",null,"Those functions return promises and also accept callbacks."),(0,l.kt)("p",null,"While you cannot download folders, they can upload files on then like you can in the root folder:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await folder.upload('hello-world.txt', 'Hello World!').complete\n")),(0,l.kt)("p",null,"You can also create new folders:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Using promises\nconst folder = await folder.mkdir('New Folder')\nconsole.log(folder)\n\n// Using callbacks\nfolder.mkdir('New Folder', (error, folder) {\n  if (error) console.error(error)\n  console.log(folder)\n})\n")),(0,l.kt)("p",null,"The complete list of methods that can be called on files and folders can be found in the API page."),(0,l.kt)("p",null,"In the next part of the tutorial we will learn how to download files from the storage and public shared files."))}p.isMDXComponent=!0}}]);