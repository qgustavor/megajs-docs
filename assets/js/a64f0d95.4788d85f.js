"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[616],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,f=h["".concat(l,".").concat(p)]||h[p]||u[p]||a;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},850:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:10},l="Security",c={unversionedId:"tutorial/security",id:"tutorial/security",title:"Security",description:"MEGA is primarily a file hosting website that uses end-to-end cryptography, but there are some things that need attention in order to keep it secure:",source:"@site/docs/tutorial/security.md",sourceDirName:"tutorial",slug:"/tutorial/security",permalink:"/docs/next/tutorial/security",editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/docs/tutorial/security.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Advanced usage",permalink:"/docs/next/tutorial/advanced"},next:{title:"API Reference",permalink:"/docs/next/api"}},d={},u=[{value:"MEGA is only as secure as the clients",id:"mega-is-only-as-secure-as-the-clients",level:2},{value:"Logged sessions are not safe when used in web pages",id:"logged-sessions-are-not-safe-when-used-in-web-pages",level:2},{value:"MEGA uses insecure HTTP by default when transferring encrypted data",id:"mega-uses-insecure-http-by-default-when-transferring-encrypted-data",level:2},{value:"File integrity can only be checked after the entire file is downloaded",id:"file-integrity-can-only-be-checked-after-the-entire-file-is-downloaded",level:2},{value:"Encryption is optional in some cases",id:"encryption-is-optional-in-some-cases",level:2},{value:"Some data is not encrypted (for good reasons)",id:"some-data-is-not-encrypted-for-good-reasons",level:2}],h={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"security"},"Security"),(0,a.kt)("p",null,"MEGA is primarily a file hosting website that uses end-to-end cryptography, but there are some things that need attention in order to keep it secure:"),(0,a.kt)("h2",{id:"mega-is-only-as-secure-as-the-clients"},"MEGA is only as secure as the clients"),(0,a.kt)("p",null,"Because MEGA uses end-to-end cryptography the server cannot detect if a client is leaking keys or using weak crypto. There was in the past at least one popular third-party MEGA client that failed to generate secure cryptographic keys, hurting security and privacy. This library tries to be safe by ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/secure-random"},"secure-random")," for key generation and by testing cryptographic functions."),(0,a.kt)("p",null,"To avoid this issue do not set a ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," while uploading or creating folders and let the library generate a random key unless you have a really good reason for so (example: the code that tests the ",(0,a.kt)("inlineCode",{parentName:"p"},"Storage")," class uses a fixed key because them the results are deterministic)."),(0,a.kt)("p",null,"Notice that even if MEGA claims that is better to trust their code and do not use third party clients that are not based on their code, they even cite the same client above in their documentation as an example. In the other MEGA itself is not perfect: ",(0,a.kt)("a",{parentName:"p",href:"https://www.secjuice.com/mega-nz-chrome-browser-extension-backdoored/"},"their own extension was backdoored once"),"."),(0,a.kt)("p",null,"This client implementation not supporting as many features other clients support might sound to be a bad thing, but in fact it works in favor of security: you can read ",(0,a.kt)("a",{parentName:"p",href:"https://unpkg.com/megajs/dist/main.node-es.mjs"},"the entire code of the library")," in one hour (134 words a minute), in the other hand, keeping the same reading rate, ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/meganz/webclient/master/secureboot.js"},"just the first file from the official MEGA web client")," would more than two hours to read. Because of that the attack surface in MEGAJS is way smaller in comparison with other clients and anyone worried about security can easily check it by reading the source, something which is almost impossible with the official web client."),(0,a.kt)("h2",{id:"logged-sessions-are-not-safe-when-used-in-web-pages"},"Logged sessions are not safe when used in web pages"),(0,a.kt)("p",null,"A website is only safe as if the server serving it isn't compromised. Doesn't matter if you use HTTPS or even if there is client-side checksum checks - like happens in the official MEGA client - because if some of the checked resources can be tampered nothing stops the verification script also being tampered. There are many reasons many people said JavaScript crypto is bad and this point that was one that not improved with the time."),(0,a.kt)("p",null,"In other words: avoid using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Storage")," class in a web page if you want to be safe."),(0,a.kt)("p",null,"Or just assume the risk and try to convince people you are absolutely not injecting something to get your encryption keys like MEGA and WhatsApp do. Throw some ",(0,a.kt)("del",null,"snake oil")," ",(0,a.kt)("em",null,"totally safe")," checksum verification just to be sure."),(0,a.kt)("h2",{id:"mega-uses-insecure-http-by-default-when-transferring-encrypted-data"},"MEGA uses insecure HTTP by default when transferring encrypted data"),(0,a.kt)("p",null,"To add insult to injury MEGA's official and most third-party clients do not use HTTPS when transferring encrypted data in order to reduce CPU usage. While the MEGA's own encryption help protect privacy, it's less secure than using HTTPS because encrypted files use static keys: once the contents of some file in MEGA gets known this default behavior allows anyone that can listen to network traffic to know if someone downloaded it. It gets worse when bugged clients are used, as some use weak encryption keys, like shown above, making it easier to interceptors to decrypt data."),(0,a.kt)("p",null,"HTTPS do not have this issue because encryption keys are not static, so even if the contents of a certain file get published, someone intercepting traffic can not know if someone download that file, at most can only guess from the file size."),(0,a.kt)("p",null,"Since MEGA servers support HTTPS it can be used to mitigate this issue: this library allows forcing HTTPS when downloading and uploading by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"forceHttps")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". In the other hand, sometimes forcing HTTPS result connections being dropped as MEGA insists that HTTPS should not be used when possible to save server resources."),(0,a.kt)("h2",{id:"file-integrity-can-only-be-checked-after-the-entire-file-is-downloaded"},"File integrity can only be checked after the entire file is downloaded"),(0,a.kt)("p",null,"MEGA checks file integrity by:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Splitting files in chunks;"),(0,a.kt)("li",{parentName:"ol"},"Generating message authentication code (MAC) using AES-ECBC-MAC for each chunk;"),(0,a.kt)("li",{parentName:"ol"},"Generating a final MAC using AES-ECBC-MAC which is stored in the file key.")),(0,a.kt)("p",null,"Because only the final key is stored chunks cannot be verified, only fully downloaded files. Looks like the initial idea was to store individual chunk MACs so individual chunks could be checked, but currently MEGA does not do that. Maybe, in future, this feature will be implemented in the official clients, then in this library."),(0,a.kt)("h2",{id:"encryption-is-optional-in-some-cases"},"Encryption is optional in some cases"),(0,a.kt)("p",null,"This library do not require that shared files and folders to have a key specified, in this case data that depend on the key cannot be accessed, like file names and file content, but file sizes and dates can still be accessed. It allows using the library to open a shared folder and react to changes on it without requiring users to reveal the encryption key and the file contents."),(0,a.kt)("p",null,"You can also upload files without using encryption on file contents, ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/tutorial/advanced#uploading-without-encryption"},"as documented here"),", which makes MEGA behave like most file hosts. Maybe you are uploading some data that don't need any privacy by any means, like data that's mean to be shared in a public website. In the other hand it breaks compatibility with every other MEGA client."),(0,a.kt)("h2",{id:"some-data-is-not-encrypted-for-good-reasons"},"Some data is not encrypted (for good reasons)"),(0,a.kt)("p",null,"E-mails cannot be encrypted because the server needs it to login and replacing e-mails with some other identifier (like usernames or public keys) would make MEGA operations harder. Passwords are never sent to the server, instead authentication is done using a public-private RSA key pair where the server knows the public key and the private key is encrypted with the user password."),(0,a.kt)("p",null,"File dates are not encrypted and encrypting those would be useless as the server could log those anyway. Which files and folders are shared are known to the server otherwise how could it make those accessible to other users? File sizes are known to the server as those are hard to hide from the server. If you wish you can try to obfuscate those by adding paddings, but them it will waste your storage size."),(0,a.kt)("p",null,"File hierarchy is known to the server. Looks like it makes implementing the service simpler. In the other hand you can just upload everything to ",(0,a.kt)("inlineCode",{parentName:"p"},"storage.root")," and use ",(0,a.kt)("inlineCode",{parentName:"p"},"folder name/file name.txt")," as file names if you wish (this library do not enforce character restrictions on file names, unlike official clients, it only requires file names to not be empty)."))}p.isMDXComponent=!0}}]);