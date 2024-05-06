"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[790],{587:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(4848),i=t(8453);const r={sidebar_position:9},s="Advanced usage",a={id:"tutorial/advanced",title:"Advanced usage",description:"This library supports separating downloading/uploading from encryption steps. It's quite unusual but maybe it's useful for someone as seems tonistiigi supported those things by exporting low level encrypt and decrypt functions.",source:"@site/docs/tutorial/advanced.md",sourceDirName:"tutorial",slug:"/tutorial/advanced",permalink:"/docs/1.0/tutorial/advanced",draft:!1,unlisted:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/docs/tutorial/advanced.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Network settings",permalink:"/docs/1.0/tutorial/network-settings"},next:{title:"Security",permalink:"/docs/1.0/tutorial/security"}},d={},c=[{value:"Downloading then decrypting",id:"downloading-then-decrypting",level:2},{value:"Encrypting then uploading",id:"encrypting-then-uploading",level:2},{value:"Uploading without encryption",id:"uploading-without-encryption",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"advanced-usage",children:"Advanced usage"}),"\n",(0,o.jsxs)(n.p,{children:["This library supports separating downloading/uploading from encryption steps. It's quite unusual but maybe it's useful for someone as seems ",(0,o.jsx)(n.a,{href:"https://github.com/tonistiigi/mega",children:"tonistiigi"})," supported those things by exporting low level ",(0,o.jsx)(n.code,{children:"encrypt"})," and ",(0,o.jsx)(n.code,{children:"decrypt"})," functions."]}),"\n",(0,o.jsx)(n.h2,{id:"downloading-then-decrypting",children:"Downloading then decrypting"}),"\n",(0,o.jsx)(n.p,{children:"If you want to download then decrypt, not the two at the same time, then do the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const file = File.fromURL(url)\n\n// Download it using cipher\nfile.download({ cipher: true })\n  .pipe(fs.createWriteStream('filename.ext.enc'))\n\n// Later decrypt it using decrypt\nfs.readFileStream('filename.ext.enc')\n  .pipe(decrypt('base64 file key'))\n  .pipe(fs.createWriteStream('filename.ext'))\n"})}),"\n",(0,o.jsx)(n.h2,{id:"encrypting-then-uploading",children:"Encrypting then uploading"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const encryptStream = encrypt()\nfs.readFileStream('filename.ext')\n  .pipe(encryptStream)\n  .pipe(fs.createWriteStream('filename.ext.enc'))\n\n// Get the generated key\nencryptStream.on('end', () => {\n  console.log(encryptStream.key.toString('hex'))\n})\n\n// Later upload the encrypted file\nconst storage = new Storage(options, callback)\n\nawait storage.ready\nstorage.upload({\n  uploadCiphertext: true,\n  key: Buffer.from('key from console.log', 'hex')\n})\n"})}),"\n",(0,o.jsx)(n.h2,{id:"uploading-without-encryption",children:"Uploading without encryption"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["This code does not work anymore due to changes in MEGA. For more info ",(0,o.jsx)(n.a,{href:"https://github.com/qgustavor/mega/discussions/108",children:"check this discussion"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:"Make MEGA work like any other file hosting service:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const storage = new Storage(options, callback)\nawait storage.ready\n\nstorage.upload({\n  uploadCiphertext: true,\n  // This key will be used to encrypt the attributes\n  // Avoid reusing keys (like using `Buffer.alloc(32)`)\n  // as seems MEGA does some kind of caching on those\n  key: crypto.randomBytes(32)\n})\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To download do the ",(0,o.jsx)(n.a,{href:"#downloading-then-decrypting",children:'"Downloading then decrypting"'})," steps."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);