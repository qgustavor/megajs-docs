(()=>{"use strict";var e,a,c,t,r,f={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var c=d[e]={id:e,loaded:!1,exports:{}};return f[e].call(c.exports,c,c.exports,o),c.loaded=!0,c.exports}o.m=f,o.c=d,e=[],o.O=(a,c,t,r)=>{if(!c){var f=1/0;for(i=0;i<e.length;i++){c=e[i][0],t=e[i][1],r=e[i][2];for(var d=!0,b=0;b<c.length;b++)(!1&r||f>=r)&&Object.keys(o.O).every((e=>o.O[e](c[b])))?c.splice(b--,1):(d=!1,r<f&&(f=r));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[c,t,r]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var f={};a=a||[null,c({}),c([]),c(c)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,o.d(r,f),r},o.d=(e,a)=>{for(var c in a)o.o(a,c)&&!o.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,c)=>(o.f[c](e,a),a)),[])),o.u=e=>"assets/js/"+({149:"5ace29e0",262:"3260122c",285:"2acfe2a4",410:"3d10f6fe",558:"7ce74344",649:"1eb9181c",765:"aeb1eab3",790:"1b9a94c4",918:"8e688b66",1235:"a7456010",1374:"288979b0",2076:"common",2096:"b9f4ca1a",2634:"c4f5d8e4",2773:"26e40c1e",3252:"e4614061",3259:"28ce4ff6",3432:"dc305e94",3441:"4ba46953",3504:"dff98a0c",3830:"b8dcf576",4232:"065b6a2a",4257:"935c1618",4702:"2a5973c7",4719:"f08b8123",5147:"416155bf",5228:"7019ea0b",5623:"f8747da1",5701:"ad889b04",5728:"a0bd7d0c",5742:"aba21aa0",5800:"4254b6b8",6190:"d9f42cf1",6377:"a4d223df",6433:"1ce181c8",7029:"648fed2c",7047:"ef7147cc",7098:"a7bd4aaa",7223:"a9a7c7e3",7527:"bb14a589",7624:"5fbc5cf1",7643:"9e2eb263",8401:"17896441",8504:"2e854b47",8701:"093dcbf7",8714:"58ca90de",8818:"a64f0d95",9048:"a94703ab",9266:"17e13042",9647:"5e95c892",9983:"f380cf91"}[e]||e)+"."+{149:"b0249ea3",262:"42dc7f92",285:"925ea8cc",410:"02a1cef9",558:"a2c5668f",649:"3ceacf9e",765:"9856f5fd",790:"f92d2209",918:"d2044e99",1235:"d69d0473",1374:"18254e76",2076:"8e207e9c",2096:"e9038763",2237:"dee3e403",2634:"16f807a2",2773:"a250c3c8",3252:"aeae27b5",3259:"b3c7fc4a",3432:"203d41f7",3441:"5eff0077",3504:"b0ea331e",3830:"9c5fe881",4232:"eb07c949",4257:"cbad7743",4702:"6abd3436",4719:"902f62fd",5147:"72a4b39d",5228:"74ec56ab",5623:"0609ddb5",5701:"c568145e",5728:"15b0a7e3",5742:"f9acb4e7",5800:"5e4a194e",6190:"e936ac65",6377:"5f4b85f1",6433:"5cca1627",7029:"acf49ed6",7047:"a2bae64e",7098:"ec5adf9a",7223:"e8c7b5c7",7527:"a4a6ef5d",7624:"755f0bd2",7643:"038d167e",8401:"6b51168a",8504:"d1f85397",8701:"61818819",8714:"be0a56e1",8818:"b582dd35",9048:"daf7f25b",9266:"710f7d83",9647:"17bc2caf",9983:"8899ef1e"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="megajs-docs:",o.l=(e,a,c,f)=>{if(t[e])t[e].push(a);else{var d,b;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+c){d=u;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",r+c),d.src=e),t[e]=[a];var l=(a,c)=>{d.onerror=d.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),b&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",o.gca=function(e){return e={17896441:"8401","5ace29e0":"149","3260122c":"262","2acfe2a4":"285","3d10f6fe":"410","7ce74344":"558","1eb9181c":"649",aeb1eab3:"765","1b9a94c4":"790","8e688b66":"918",a7456010:"1235","288979b0":"1374",common:"2076",b9f4ca1a:"2096",c4f5d8e4:"2634","26e40c1e":"2773",e4614061:"3252","28ce4ff6":"3259",dc305e94:"3432","4ba46953":"3441",dff98a0c:"3504",b8dcf576:"3830","065b6a2a":"4232","935c1618":"4257","2a5973c7":"4702",f08b8123:"4719","416155bf":"5147","7019ea0b":"5228",f8747da1:"5623",ad889b04:"5701",a0bd7d0c:"5728",aba21aa0:"5742","4254b6b8":"5800",d9f42cf1:"6190",a4d223df:"6377","1ce181c8":"6433","648fed2c":"7029",ef7147cc:"7047",a7bd4aaa:"7098",a9a7c7e3:"7223",bb14a589:"7527","5fbc5cf1":"7624","9e2eb263":"7643","2e854b47":"8504","093dcbf7":"8701","58ca90de":"8714",a64f0d95:"8818",a94703ab:"9048","17e13042":"9266","5e95c892":"9647",f380cf91:"9983"}[e]||e,o.p+o.u(e)},(()=>{var e={5354:0,1869:0};o.f.j=(a,c)=>{var t=o.o(e,a)?e[a]:void 0;if(0!==t)if(t)c.push(t[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var r=new Promise(((c,r)=>t=e[a]=[c,r]));c.push(t[2]=r);var f=o.p+o.u(a),d=new Error;o.l(f,(c=>{if(o.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=c&&("load"===c.type?"missing":c.type),f=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+f+")",d.name="ChunkLoadError",d.type=r,d.request=f,t[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,c)=>{var t,r,f=c[0],d=c[1],b=c[2],n=0;if(f.some((a=>0!==e[a]))){for(t in d)o.o(d,t)&&(o.m[t]=d[t]);if(b)var i=b(o)}for(a&&a(c);n<f.length;n++)r=f[n],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(i)},c=self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();