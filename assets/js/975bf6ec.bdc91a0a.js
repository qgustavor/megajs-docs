"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[97],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,y=h["".concat(l,".").concat(p)]||h[p]||u[p]||s;return n?i.createElement(y,a(a({ref:t},d),{},{components:n})):i.createElement(y,a({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var c=2;c<s;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5119:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var i=n(7462),r=n(3366),s=(n(7294),n(3905)),a=["components"],o={sidebar_position:10},l="Security",c={unversionedId:"tutorial/security",id:"version-1.0/tutorial/security",title:"Security",description:"MEGA is primarily a file hosting website that uses end-to-end cryptography, but there are some things that need attention in order to keep it secure:",source:"@site/versioned_docs/version-1.0/tutorial/security.md",sourceDirName:"tutorial",slug:"/tutorial/security",permalink:"/docs/tutorial/security",editUrl:"https://github.com/qgustavor/megajs-docs/tree/master/versioned_docs/version-1.0/tutorial/security.md",tags:[],version:"1.0",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Advanced usage",permalink:"/docs/tutorial/advanced"},next:{title:"API Reference",permalink:"/docs/api"}},d={},u=[{value:"MEGA is only as secure as the clients",id:"mega-is-only-as-secure-as-the-clients",level:2},{value:"Logged sessions are not safe when used in web pages",id:"logged-sessions-are-not-safe-when-used-in-web-pages",level:2},{value:"MEGA uses insecure HTTP by default when transferring encrypted data",id:"mega-uses-insecure-http-by-default-when-transferring-encrypted-data",level:2},{value:"File integrity can only be checked after the entire file is downloaded",id:"file-integrity-can-only-be-checked-after-the-entire-file-is-downloaded",level:2},{value:"Encryption is optional in some cases",id:"encryption-is-optional-in-some-cases",level:2},{value:"Some data is not encrypted (for good reasons)",id:"some-data-is-not-encrypted-for-good-reasons",level:2}],h={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"security"},"Security"),(0,s.kt)("p",null,"MEGA is primarily a file hosting website that uses end-to-end cryptography, but there are some things that need attention in order to keep it secure:"),(0,s.kt)("h2",{id:"mega-is-only-as-secure-as-the-clients"},"MEGA is only as secure as the clients"),(0,s.kt)("p",null,"Because MEGA uses end-to-end cryptography the server cannot detect if a client is leaking keys or using weak crypto. There was in the past at least one popular third-party MEGA client that failed to generate secure cryptographic keys, hurting security and privacy. This library tries to be safe by ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/secure-random"},"secure-random")," for key generation and by testing cryptographic functions."),(0,s.kt)("p",null,"To avoid this issue do not set a ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," while updating unless you have a really good reason for so (example: the code that tests the ",(0,s.kt)("inlineCode",{parentName:"p"},"Storage")," class uses a fixed key because them the results are deterministic)."),(0,s.kt)("h2",{id:"logged-sessions-are-not-safe-when-used-in-web-pages"},"Logged sessions are not safe when used in web pages"),(0,s.kt)("p",null,"A website is only safe as if the server serving it isn't compromised. Doesn't matter if you use HTTPS or even if there is client side checksum checks because if some of the checked resources can be tampered nothing stops the verification script also being tampered."),(0,s.kt)("p",null,"In other words: avoid using the ",(0,s.kt)("inlineCode",{parentName:"p"},"Storage")," class in a web page."),(0,s.kt)("h2",{id:"mega-uses-insecure-http-by-default-when-transferring-encrypted-data"},"MEGA uses insecure HTTP by default when transferring encrypted data"),(0,s.kt)("p",null,"In order to reduce CPU usage MEGA's official and most third-party clients do not use HTTPS when transferring encrypted data. While the encryption help protect privacy, because encrypted files, unlike HTTPS, use static keys, it's less secure than using HTTPS. While it protects the data from being decrypted, after the data or the key is known this default behavior allows anyone that can listen to network traffic to know if someone downloaded this data. It gets worse when bugged clients are used, as some use weak encryption keys."),(0,s.kt)("p",null,"To mitigate this issue this library allows forcing HTTPS when downloading and uploading by setting ",(0,s.kt)("inlineCode",{parentName:"p"},"forceHttps")," to true. In the other hand, sometimes forcing HTTPS result connections being dropped as MEGA insists that HTTPS should not be used when possible to save server resources."),(0,s.kt)("h2",{id:"file-integrity-can-only-be-checked-after-the-entire-file-is-downloaded"},"File integrity can only be checked after the entire file is downloaded"),(0,s.kt)("p",null,"MEGA checks file integrity by:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Splitting files in chunks;"),(0,s.kt)("li",{parentName:"ol"},"Generating message authentication code (MAC) using AES-ECBC-MAC for each chunk;"),(0,s.kt)("li",{parentName:"ol"},"Generating a final MAC using AES-ECBC-MAC which is stored in the file key.")),(0,s.kt)("p",null,"Because only the final key is stored chunks cannot be verified, only fully downloaded files. Looks like the initial idea was to store individual chunk MACs so individual chunks could be checked, but currently MEGA does not do that. Maybe, in future, this feature will be implemented in the official clients, then in this library."),(0,s.kt)("h2",{id:"encryption-is-optional-in-some-cases"},"Encryption is optional in some cases"),(0,s.kt)("p",null,"This library do not require that shared files and folders to have a key specified, in this case data that depend on the key cannot be accessed, like file names and file content, but file sizes and dates can still be accessed. It allows using the library to open a shared folder and react to changes on it without requiring users to reveal the encryption key and the file contents."),(0,s.kt)("p",null,"You can also upload files without using encryption on file contents, ",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/advanced#uploading-without-encryption"},"as documented here"),", which makes MEGA behave like most file hosts. Maybe you are uploading some data that don't need any privacy by any means, like data that's mean to be shared in a public website. In the other hand it breaks compatibility with every other MEGA client."),(0,s.kt)("h2",{id:"some-data-is-not-encrypted-for-good-reasons"},"Some data is not encrypted (for good reasons)"),(0,s.kt)("p",null,"E-mails cannot be encrypted because the server needs it to login and replacing e-mails with some other identifier (like usernames or public keys) would make MEGA operations harder. Passwords are never sent to the server, instead authentication is done using a public-private RSA key pair where the server knows the public key and the private key is encrypted with the user password."),(0,s.kt)("p",null,"File dates are not encrypted and encrypting those would be useless as the server could log those anyway. Which files and folders are shared are known to the server otherwise how could it make those accessible to other users? File sizes are known to the server as those are hard to hide from the server. If you wish you can try to obfuscate those by adding paddings, but them it will waste your storage size."),(0,s.kt)("p",null,"File hierarchy is known to the server. Looks like it makes implementing the service simpler. In the other hand you can just upload everything to ",(0,s.kt)("inlineCode",{parentName:"p"},"storage.root")," and use ",(0,s.kt)("inlineCode",{parentName:"p"},"folder name/file name.txt")," as file names if you wish (this library do not enforce restrictions on file names, unlike official clients)."))}p.isMDXComponent=!0}}]);