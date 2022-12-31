(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[195],{7757:function(e,t,n){e.exports=n(5666)},1374:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),o=n(1736),a=n(9877),i=n(8215);n(2263);function l(e){var t=e.version||"0",n=(parseInt(t.split(".")[0]),["Node ESM","Node CJS","Browser"]),l=[function(e){return e.replace(/\/\/ node2deno:if-deno\n.*\n?/g,"").replace(/\/\/ node2deno:if-node\n/g,"")},function(e){return(e=e.replace(/\/\/ node2deno:if-deno\n.*\n?/g,"").replace(/\/\/ node2deno:if-node\n/g,"")).includes("await ")&&(e=e.replace(/^(?!import|$)/gm,"  ").replace(/^\s*$/m,"\n// Node doesn't support top-level await when using CJS\n;(async function () {").replace(/\n*$/,"\n}()).catch(error => {\n  console.error(error)\n  process.exit(1)\n})\n")),e=e.replace(/import (.+?) from 'megajs'/g,"const $1 = require('megajs')")},function(e){return e.replace(/import (.+?) from 'megajs'/g,"import $1 from 'https://cdn.skypack.dev/megajs@"+t+"'").replace(/\/\/ node2deno:if-node\n.*\n/g,"").replace(/\/\/ node2deno:if-deno\n/g,"")}];return r.createElement("div",null,r.createElement(a.Z,{groupId:"node2deno",className:"margin-bottom--sm"},n.map((function(t,n){return r.createElement(i.Z,{value:n,label:t,onClick:function(){return setMode(n)},key:"+"+n},r.createElement(o.Z,{language:e.language},l[n](e.code)))}))))}},4572:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(7294),o=n(6010),a=n(2773),i=n(9960),l=n(2263),c="heroBanner_qdFl",s="buttons_AeoN",u=n(1374);function f(e,t,n,r,o,a,i){try{var l=e[a](i),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(r,o)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){f(a,r,o,i,l,"next",e)}function l(e){f(a,r,o,i,l,"throw",e)}i(void 0)}))}}var h=n(7757),d=n.n(h);function p(){var e=(0,r.useRef)(null);return(0,r.useEffect)((function(){if(e.current.animate){var t,n=["Node.js","Browser","TypeScript","JavaScript"],r=n.slice(),o="",a=document.createElement("div"),i=document.createElement("div"),l=document.createElement("div");a.textContent="Unofficial",i.textContent=o,l.textContent="SDK for MEGA",e.current.appendChild(a),e.current.appendChild(i),e.current.appendChild(l);var c=function(e){return new Promise((function(n){t=setTimeout(n,e)}))};return s(),function(){clearTimeout(t)}}function s(){return u.apply(this,arguments)}function u(){return(u=m(d().mark((function e(){var t,u,f,m,h,p,g;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==r.length){e.next=4;break}return e.next=3,c(5e3);case 3:r=n.slice();case 4:return t=o?"":r.shift(),u=a.getBoundingClientRect(),f=l.getBoundingClientRect(),i.textContent=t,m=a.getBoundingClientRect(),h=l.getBoundingClientRect(),p=u.left-m.left,g=f.left-h.left,t||(i.textContent=o),(o=t)&&a.animate([{transformOrigin:"top left",transform:"translateX("+p+"px)"},{transformOrigin:"top left",transform:"none"}],{duration:300,easing:"ease-out",fill:"both"}),i.animate([{transformOrigin:"top center",transform:t?"perspective(7em) rotateY(-90deg)":"none"},{transformOrigin:"top center",transform:t?"none":"perspective(7em) rotateY(90deg)"}],{duration:300,easing:"linear",fill:"both"}),o&&l.animate([{transformOrigin:"top left",transform:"translateX("+g+"px)"},{transformOrigin:"top left",transform:"none"}],{duration:300,easing:"ease-out",fill:"both"}),e.next=19,c(o?2500:300);case 19:s();case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.current.textContent="Unofficial JavaScript SDK for MEGA"}),[]),r.createElement("p",{className:"hero__subtitle flip_tagline",ref:e})}function g(){var e=(0,l.Z)().siteConfig;return r.createElement("header",{className:(0,o.Z)("hero hero--primary",c)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},e.title),r.createElement(p,null),r.createElement("div",{className:s},r.createElement(i.Z,{className:"button button--secondary button--lg",to:"/docs/tutorial/intro"},"Tutorial"),r.createElement(i.Z,{className:"button button--secondary button--lg",to:"/docs/api"},"API Reference"))))}function v(){return r.createElement(a.Z,{title:"Home"},r.createElement(g,null),r.createElement("main",null,r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--4"},r.createElement("h2",null,"Quick start"),r.createElement("p",null,"To upload files to ",r.createElement("a",{href:"https://mega.nz/"},"MEGA")," import the library using either ES modules or CommonJS."),r.createElement("p",null,'Then create a storage object to login using your e-mail and password, then wait for the "ready" event.'),r.createElement("p",null,"Finally you can call the ",r.createElement("code",null,".upload()")," method to upload files to your account.")),r.createElement("div",{className:"col col--8"},r.createElement(u.Z,{language:"js",code:"import { Storage } from 'megajs'\n\nconst storage = await new Storage({\n  email: 'user@example.com',\n  password: 'correct horse battery example'\n}).ready\n\nconst file = await storage.upload('hello-world.txt', 'Hello world!').complete\nconsole.log('The file was uploaded!', file)\n",version:"1"}))))),r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--4"},r.createElement("h2",null,"Downloading files"),r.createElement("p",null,"To download shared files then you first open a file object using the ",r.createElement("code",null,"File.fromURL()")," method."),r.createElement("p",null,"Then you load file attributes such as name and size using ",r.createElement("code",null,".loadAttributes()"),"."),r.createElement("p",null,"Finally use the ",r.createElement("code",null,".downloadBuffer()")," method to download the file which will return a Buffer with the file contents.")),r.createElement("div",{className:"col col--8"},r.createElement(u.Z,{language:"js",code:"import { File } from 'megajs'\n\nconst file = File.fromURL('https://mega.nz/file/example#example')\n\nawait file.loadAttributes()\nconsole.log(file.name) // file name\nconsole.log(file.size) // file size in bytes\n\nconst data = await file.downloadBuffer()\nconsole.log(data.toString()) // file contents\n",version:"1"}))))),r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement(i.Z,{className:"button button--secondary button--lg button--block",to:"/docs/tutorial/intro"},"Check the tutorial for more info")))),r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--12"},r.createElement("ul",null,r.createElement("li",null,"This is based on ",r.createElement("a",{href:"https://github.com/tonistiigi/mega"},"tonistiigi's mega library"),"."),r.createElement("li",null,"This is all unofficial, based on ",r.createElement("a",{href:"https://mega.nz/#developers"},"developer guide")," and site source."),r.createElement("li",null,"Make sure you agree with MEGA's ",r.createElement("a",{href:"https://mega.nz/#terms"},"Terms of Service")," before using it."))))))))}},5666:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(O){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,a=Object.create(o.prototype),i=new C(r||[]);return a._invoke=function(e,t,n){var r=f;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return T()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var l=j(i,n);if(l){if(l===p)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?d:m,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(e,n,i),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(O){return{type:"throw",arg:O}}}e.wrap=s;var f="suspendedStart",m="suspendedYield",h="executing",d="completed",p={};function g(){}function v(){}function y(){}var E={};c(E,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(S([])));b&&b!==n&&r.call(b,a)&&(E=b);var x=y.prototype=g.prototype=Object.create(E);function N(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(o,a,i,l){var c=u(e[o],e,a);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function j(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function S(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:T}}function T(){return{value:t,done:!0}}return v.prototype=y,c(x,"constructor",y),c(y,"constructor",v),v.displayName=c(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},N(L.prototype),c(L.prototype,i,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new L(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},N(x),c(x,l,"Generator"),c(x,a,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return l.type="throw",l.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:S(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=t}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}}]);