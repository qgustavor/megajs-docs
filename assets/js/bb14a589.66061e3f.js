"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[171],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,y=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3599:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={sidebar_position:8},c="Security",l={unversionedId:"tutorial/security",id:"version-0.17/tutorial/security",title:"Security",description:"Mega is primarily a file hosting website that uses end-to-end cryptography, but there are some things that need attention in order to keep it secure:",source:"@site/versioned_docs/version-0.17/tutorial/security.md",sourceDirName:"tutorial",slug:"/tutorial/security",permalink:"/docs/tutorial/security",editUrl:"https://github.com/qgustavor/mega-docs/tree/master/versioned_docs/version-0.17/tutorial/security.md",tags:[],version:"0.17",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Advanced usage",permalink:"/docs/tutorial/advanced"},next:{title:"API Reference",permalink:"/docs/api"}},u=[{value:"Mega is only as secure as the clients",id:"mega-is-only-as-secure-as-the-clients",children:[],level:2},{value:"Logged sessions are not safe when used in web pages",id:"logged-sessions-are-not-safe-when-used-in-web-pages",children:[],level:2},{value:"Mega uses insecure HTTP by default when transferring encrypted data",id:"mega-uses-insecure-http-by-default-when-transferring-encrypted-data",children:[],level:2},{value:"Encryption is optional in some cases",id:"encryption-is-optional-in-some-cases",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security"},"Security"),(0,i.kt)("p",null,"Mega is primarily a file hosting website that uses end-to-end cryptography, but there are some things that need attention in order to keep it secure:"),(0,i.kt)("h2",{id:"mega-is-only-as-secure-as-the-clients"},"Mega is only as secure as the clients"),(0,i.kt)("p",null,"Because Mega uses end-to-end cryptography the server cannot detect if a client is leaking keys or using weak crypto. There was in the past at least one popular third-party Mega client that failed to generate secure cryptographic keys, hurting security and privacy. This library tries to be safe by ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/secure-random"},"secure-random")," for key generation and by testing cryptographic functions."),(0,i.kt)("p",null,"To avoid this issue do not set a ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," while updating unless you have a really good reason for so (example: the code that tests the ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage")," class uses a fixed key because them the results are deterministic)."),(0,i.kt)("h2",{id:"logged-sessions-are-not-safe-when-used-in-web-pages"},"Logged sessions are not safe when used in web pages"),(0,i.kt)("p",null,"A website is only safe as if the server serving it isn't compromised. Doesn't matter if you use HTTPS or even if there is client side checksum checks because if some of the checked resources can be tampered nothing stops the verification script also being tampered."),(0,i.kt)("p",null,"In other words: avoid using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage")," class in a web page."),(0,i.kt)("h2",{id:"mega-uses-insecure-http-by-default-when-transferring-encrypted-data"},"Mega uses insecure HTTP by default when transferring encrypted data"),(0,i.kt)("p",null,"In order to reduce CPU usage Mega's official and most third-party clients do not use HTTPS when transferring encrypted data. While the encryption help protect privacy, because encrypted files, unlike HTTPS, use static keys, it's less secure than using HTTPS. While it protects the data from being decrypted, after the data or the key is known this default behavior allows anyone that can listen to network traffic to know if someone downloaded this data. It gets worse when bugged clients are used, as some use weak encryption keys."),(0,i.kt)("p",null,"To mitigate this issue this library allows forcing HTTPS when downloading and uploading by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"forceHttps")," to true. In the other hand, sometimes forcing HTTPS result connections being dropped as Mega insists that HTTPS should not be used when possible to save server resources."),(0,i.kt)("h2",{id:"encryption-is-optional-in-some-cases"},"Encryption is optional in some cases"),(0,i.kt)("p",null,"This library do not require that shared files and folders to have a key specified, in this case data that depend on the key cannot be accessed, like file names and file content, but file sizes and dates can still be accessed. It allows using the library to open a shared folder and react to changes on it without requiring users to reveal the encryption key and the file contents."),(0,i.kt)("p",null,"You can also upload files without using encryption on file contents, ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorial/advanced#uploading-without-encryption"},"as documented here"),", which makes Mega behave like most file hosts. Maybe you are uploading some data that don't need any privacy by any means. In the other hand it breaks compatibility with every other Mega client."))}p.isMDXComponent=!0}}]);