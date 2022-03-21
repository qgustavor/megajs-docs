"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[102],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7462),a=n(7294),o=n(2389),i=n(3725),l=n(6010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),k=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,a.useState)(g),j=N[0],O=N[1],T=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=k[m];null!=E&&E!==j&&h.some((function(e){return e.value===E}))&&O(E)}var x=function(e){var t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==j&&(C(t),O(r),null!=m&&w(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function p(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},7488:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(9877),l=n(8215),s=["components"],u={sidebar_position:2},p="Installing",c={unversionedId:"tutorial/install",id:"tutorial/install",title:"Installing",description:"If you are targeting Node or using a build tool, then you need to install the library first:",source:"@site/docs/tutorial/install.md",sourceDirName:"tutorial",slug:"/tutorial/install",permalink:"/docs/next/tutorial/install",editUrl:"https://github.com/qgustavor/megajs-docs/tree/master/docs/tutorial/install.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/next/tutorial/intro"},next:{title:"Logging in",permalink:"/docs/next/tutorial/login"}},d={},m=[],f={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing"},"Installing"),(0,o.kt)("p",null,"If you are targeting Node or using a build tool, then you need to install the library first:"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install megajs@1\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add megajs@1\n")))),(0,o.kt)("p",null,"Since V1 it already includes TypeScript types (thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ChampionBuffalo1"},"ChampionBuffalo1")," for contributing)."),(0,o.kt)("p",null,"If you are working directly from a browser or from Deno you can import the library using ES modules:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// @deno-types=\"https://cdn.skypack.dev/megajs@1/types/es.d.ts\"\nimport { Storage } from 'https://cdn.skypack.dev/megajs@1'\n")),(0,o.kt)("p",null,"Skypack supports ",(0,o.kt)("inlineCode",{parentName:"p"},"?dts")," to provide type declarations but it will return Node types which are not compatible with Deno. That's why you need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"@deno-types")," to load the correct type declarations. You will also need to run Deno with ",(0,o.kt)("inlineCode",{parentName:"p"},"--allow-net")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--prompt")," because MEGA use multiple domains and Deno still not support something like ",(0,o.kt)("inlineCode",{parentName:"p"},"--allow-net=*.mega.co.nz")," (the API still uses ",(0,o.kt)("inlineCode",{parentName:"p"},".co.nz"),", not ",(0,o.kt)("inlineCode",{parentName:"p"},".nz"),")."),(0,o.kt)("p",null,"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," tags to load the UMD version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<script src="https://unpkg.com/megajs@1/dist/main.browser-umd.js"><\/script>\n')),(0,o.kt)("p",null,"It will load the library in ",(0,o.kt)("inlineCode",{parentName:"p"},"window.mega"),", so ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage")," will be available via ",(0,o.kt)("inlineCode",{parentName:"p"},"window.mega.Storage"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"File")," via ",(0,o.kt)("inlineCode",{parentName:"p"},"window.mega.File")," and so on."),(0,o.kt)("p",null,"You can also host the above files into your server instead of loading those from unpkg or Skypack which may help privacy and security."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Remember to import the browser version when targeting the browser environment, even when using build tools, as it includes browser-compatible cryptographic functions instead of depending on ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/crypto.html"},"the Node crypto module"),". Trying to use a browser port of Node crypto like ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/crypto-browserify"},"crypto-browserify")," can result in huge build sizes and hurt performance. Because Deno's environment is similar to browser's Deno also use the browser version."))),(0,o.kt)("p",null,"In the next part of this tutorial we will login to a MEGA account using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage")," class loaded above."))}v.isMDXComponent=!0}}]);