"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[7527],{5757:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=s(4848),i=s(8453);const a={sidebar_position:8},o="Security",r={id:"tutorial/security",title:"Security",description:"MEGA is primarily a file hosting website that uses end-to-end cryptography, but there are some things that need attention in order to keep it secure:",source:"@site/versioned_docs/version-0.17/tutorial/security.md",sourceDirName:"tutorial",slug:"/tutorial/security",permalink:"/docs/0.17/tutorial/security",draft:!1,unlisted:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/versioned_docs/version-0.17/tutorial/security.md",tags:[],version:"0.17",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Advanced usage",permalink:"/docs/0.17/tutorial/advanced"},next:{title:"API Reference",permalink:"/docs/0.17/api"}},c={},d=[{value:"MEGA is only as secure as the clients",id:"mega-is-only-as-secure-as-the-clients",level:2},{value:"Logged sessions are not safe when used in web pages",id:"logged-sessions-are-not-safe-when-used-in-web-pages",level:2},{value:"MEGA uses insecure HTTP by default when transferring encrypted data",id:"mega-uses-insecure-http-by-default-when-transferring-encrypted-data",level:2},{value:"Encryption is optional in some cases",id:"encryption-is-optional-in-some-cases",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"security",children:"Security"}),"\n",(0,n.jsx)(t.p,{children:"MEGA is primarily a file hosting website that uses end-to-end cryptography, but there are some things that need attention in order to keep it secure:"}),"\n",(0,n.jsx)(t.h2,{id:"mega-is-only-as-secure-as-the-clients",children:"MEGA is only as secure as the clients"}),"\n",(0,n.jsxs)(t.p,{children:["Because MEGA uses end-to-end cryptography the server cannot detect if a client is leaking keys or using weak crypto. There was in the past at least one popular third-party MEGA client that failed to generate secure cryptographic keys, hurting security and privacy. This library tries to be safe by ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/secure-random",children:"secure-random"})," for key generation and by testing cryptographic functions."]}),"\n",(0,n.jsxs)(t.p,{children:["To avoid this issue do not set a ",(0,n.jsx)(t.code,{children:"key"})," while uploading or creating folders and let the library generate a random key unless you have a really good reason for so (example: the code that tests the ",(0,n.jsx)(t.code,{children:"Storage"})," class uses a fixed key because them the results are deterministic)."]}),"\n",(0,n.jsxs)(t.p,{children:["Notice that even if MEGA claims that is better to trust their code and do not use third party clients that are not based on their code, they even cite the same client above in their documentation as an example. In the other MEGA itself is not perfect: ",(0,n.jsx)(t.a,{href:"https://www.secjuice.com/mega-nz-chrome-browser-extension-backdoored/",children:"their own extension was backdoored once"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["This client implementation not supporting as many features other clients support might sound to be a bad thing, but in fact it works in favor of security: you can read ",(0,n.jsx)(t.a,{href:"https://unpkg.com/megajs/dist/main.node-es.mjs",children:"the entire code of the library"})," in one hour (134 words a minute), in the other hand, keeping the same reading rate, ",(0,n.jsx)(t.a,{href:"https://raw.githubusercontent.com/meganz/webclient/master/secureboot.js",children:"just the first file from the official MEGA web client"})," would more than two hours to read. Because of that the attack surface in MEGAJS is way smaller in comparison with other clients and anyone worried about security can easily check it by reading the source, something which is almost impossible with the official web client."]}),"\n",(0,n.jsx)(t.h2,{id:"logged-sessions-are-not-safe-when-used-in-web-pages",children:"Logged sessions are not safe when used in web pages"}),"\n",(0,n.jsx)(t.p,{children:"A website is only safe as if the server serving it isn't compromised. Doesn't matter if you use HTTPS or even if there is client-side checksum checks - like happens in the official MEGA client - because if some of the checked resources can be tampered nothing stops the verification script also being tampered. There are many reasons many people said JavaScript crypto is bad and this point that was one that not improved with the time."}),"\n",(0,n.jsxs)(t.p,{children:["In other words: avoid using the ",(0,n.jsx)(t.code,{children:"Storage"})," class in a web page if you want to be safe."]}),"\n",(0,n.jsxs)(t.p,{children:["Or just assume the risk and try to convince people you are absolutely not injecting something to get your encryption keys like MEGA and WhatsApp do. Throw some ",(0,n.jsx)("del",{children:"snake oil"})," ",(0,n.jsx)("em",{children:"totally safe"})," checksum verification just to be sure."]}),"\n",(0,n.jsx)(t.h2,{id:"mega-uses-insecure-http-by-default-when-transferring-encrypted-data",children:"MEGA uses insecure HTTP by default when transferring encrypted data"}),"\n",(0,n.jsx)(t.p,{children:"To add insult to injury MEGA's official and most third-party clients do not use HTTPS when transferring encrypted data in order to reduce CPU usage. While the MEGA's own encryption help protect privacy, it's less secure than using HTTPS because encrypted files use static keys: once the contents of some file in MEGA gets known this default behavior allows anyone that can listen to network traffic to know if someone downloaded it. It gets worse when bugged clients are used, as some use weak encryption keys, like shown above, making it easier to interceptors to decrypt data."}),"\n",(0,n.jsx)(t.p,{children:"HTTPS do not have this issue because encryption keys are not static, so even if the contents of a certain file get published, someone intercepting traffic can not know if someone download that file, at most can only guess from the file size."}),"\n",(0,n.jsxs)(t.p,{children:["Since MEGA servers support HTTPS it can be used to mitigate this issue: this library allows forcing HTTPS when downloading and uploading by setting ",(0,n.jsx)(t.code,{children:"forceHttps"})," to ",(0,n.jsx)(t.code,{children:"true"}),". In the other hand, sometimes forcing HTTPS result connections being dropped as MEGA insists that HTTPS should not be used when possible to save server resources."]}),"\n",(0,n.jsx)(t.h2,{id:"encryption-is-optional-in-some-cases",children:"Encryption is optional in some cases"}),"\n",(0,n.jsx)(t.p,{children:"This library do not require that shared files and folders to have a key specified, in this case data that depend on the key cannot be accessed, like file names and file content, but file sizes and dates can still be accessed. It allows using the library to open a shared folder and react to changes on it without requiring users to reveal the encryption key and the file contents."}),"\n",(0,n.jsxs)(t.p,{children:["You can also upload files without using encryption on file contents, ",(0,n.jsx)(t.a,{href:"/docs/0.17/tutorial/advanced#uploading-without-encryption",children:"as documented here"}),", which makes MEGA behave like most file hosts. Maybe you are uploading some data that don't need any privacy by any means. In the other hand it breaks compatibility with every other MEGA client."]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);