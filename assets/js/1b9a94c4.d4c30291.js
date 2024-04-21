"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[705],{6472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));n(1374);const i={sidebar_position:9},r="Advanced usage",s={unversionedId:"tutorial/advanced",id:"tutorial/advanced",title:"Advanced usage",description:"This library supports separating downloading/uploading from encryption steps. It's quite unusual but maybe it's useful for someone as seems tonistiigi supported those things by exporting low level encrypt and decrypt functions.",source:"@site/docs/tutorial/advanced.md",sourceDirName:"tutorial",slug:"/tutorial/advanced",permalink:"/docs/1.0/tutorial/advanced",draft:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/docs/tutorial/advanced.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Network settings",permalink:"/docs/1.0/tutorial/network-settings"},next:{title:"Security",permalink:"/docs/1.0/tutorial/security"}},d={},l=[{value:"Downloading then decrypting",id:"downloading-then-decrypting",level:2},{value:"Encrypting then uploading",id:"encrypting-then-uploading",level:2},{value:"Uploading without encryption",id:"uploading-without-encryption",level:2}],p={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advanced-usage"},"Advanced usage"),(0,o.kt)("p",null,"This library supports separating downloading/uploading from encryption steps. It's quite unusual but maybe it's useful for someone as seems ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonistiigi/mega"},"tonistiigi")," supported those things by exporting low level ",(0,o.kt)("inlineCode",{parentName:"p"},"encrypt")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"decrypt")," functions."),(0,o.kt)("h2",{id:"downloading-then-decrypting"},"Downloading then decrypting"),(0,o.kt)("p",null,"If you want to download then decrypt, not the two at the same time, then do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const file = File.fromURL(url)\n\n// Download it using cipher\nfile.download({ cipher: true })\n  .pipe(fs.createWriteStream('filename.ext.enc'))\n\n// Later decrypt it using decrypt\nfs.readFileStream('filename.ext.enc')\n  .pipe(decrypt('base64 file key'))\n  .pipe(fs.createWriteStream('filename.ext'))\n")),(0,o.kt)("h2",{id:"encrypting-then-uploading"},"Encrypting then uploading"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const encryptStream = encrypt()\nfs.readFileStream('filename.ext')\n  .pipe(encryptStream)\n  .pipe(fs.createWriteStream('filename.ext.enc'))\n\n// Get the generated key\nencryptStream.on('end', () => {\n  console.log(encryptStream.key.toString('hex'))\n})\n\n// Later upload the encrypted file\nconst storage = new Storage(options, callback)\n\nawait storage.ready\nstorage.upload({\n  uploadCiphertext: true,\n  key: Buffer.from('key from console.log', 'hex')\n})\n")),(0,o.kt)("h2",{id:"uploading-without-encryption"},"Uploading without encryption"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This code does not work anymore due to changes in MEGA. For more info ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/qgustavor/mega/discussions/108"},"check this discussion"),".")),(0,o.kt)("p",null,"Make MEGA work like any other file hosting service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const storage = new Storage(options, callback)\nawait storage.ready\n\nstorage.upload({\n  uploadCiphertext: true,\n  // This key will be used to encrypt the attributes\n  // Avoid reusing keys (like using `Buffer.alloc(32)`)\n  // as seems MEGA does some kind of caching on those\n  key: crypto.randomBytes(32)\n})\n")),(0,o.kt)("p",null,"To download do the ",(0,o.kt)("a",{parentName:"p",href:"#downloading-then-decrypting"},'"Downloading then decrypting"')," steps."))}u.isMDXComponent=!0}}]);