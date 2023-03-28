"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[131],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1222:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:9},c="Advanced usage",l={unversionedId:"tutorial/advanced",id:"version-1.0/tutorial/advanced",title:"Advanced usage",description:"This library supports separating downloading/uploading from encryption steps. It's quite unusual but maybe it's useful for someone as seems tonistiigi supported those things by exporting low level encrypt and decrypt functions.",source:"@site/versioned_docs/version-1.0/tutorial/advanced.md",sourceDirName:"tutorial",slug:"/tutorial/advanced",permalink:"/docs/tutorial/advanced",editUrl:"https://github.com/qgustavor/megajs-docs/tree/master/versioned_docs/version-1.0/tutorial/advanced.md",tags:[],version:"1.0",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Network settings",permalink:"/docs/tutorial/network-settings"},next:{title:"Security",permalink:"/docs/tutorial/security"}},p={},d=[{value:"Downloading then decrypting",id:"downloading-then-decrypting",level:2},{value:"Encrypting then uploading",id:"encrypting-then-uploading",level:2},{value:"Uploading without encryption",id:"uploading-without-encryption",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-usage"},"Advanced usage"),(0,a.kt)("p",null,"This library supports separating downloading/uploading from encryption steps. It's quite unusual but maybe it's useful for someone as seems ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonistiigi/mega"},"tonistiigi")," supported those things by exporting low level ",(0,a.kt)("inlineCode",{parentName:"p"},"encrypt")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"decrypt")," functions."),(0,a.kt)("h2",{id:"downloading-then-decrypting"},"Downloading then decrypting"),(0,a.kt)("p",null,"If you want to download then decrypt, not the two at the same time, then do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const file = File.fromURL(url)\n\n// Download it using cipher\nfile.download({ cipher: true })\n  .pipe(fs.createWriteStream('filename.ext.enc'))\n\n// Later decrypt it using decrypt\nfs.readFileStream('filename.ext.enc')\n  .pipe(decrypt('base64 file key'))\n  .pipe(fs.createWriteStream('filename.ext'))\n")),(0,a.kt)("h2",{id:"encrypting-then-uploading"},"Encrypting then uploading"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const encryptStream = encrypt()\nfs.readFileStream('filename.ext')\n  .pipe(encryptStream)\n  .pipe(fs.createWriteStream('filename.ext.enc'))\n\n// Get the generated key\nencryptStream.on('end', () => {\n  console.log(encryptStream.key.toString('hex'))\n})\n\n// Later upload the encrypted file\nconst storage = new Storage(options, callback)\n\nawait storage.ready\nstorage.upload({\n  uploadCiphertext: true,\n  key: Buffer.from('key from console.log', 'hex')\n})\n")),(0,a.kt)("h2",{id:"uploading-without-encryption"},"Uploading without encryption"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This code does not work anymore due to changes in MEGA. For more info ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/qgustavor/mega/discussions/108"},"check this discussion"),"."))),(0,a.kt)("p",null,"Make MEGA work like any other file hosting service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const storage = new Storage(options, callback)\nawait storage.ready\n\nstorage.upload({\n  uploadCiphertext: true,\n  // This key will be used to encrypt the attributes\n  // Avoid reusing keys (like using `Buffer.alloc(32)`)\n  // as seems MEGA does some kind of caching on those\n  key: crypto.randomBytes(32)\n})\n")),(0,a.kt)("p",null,"To download do the ",(0,a.kt)("a",{parentName:"p",href:"#downloading-then-decrypting"},'"Downloading then decrypting"')," steps."))}m.isMDXComponent=!0}}]);