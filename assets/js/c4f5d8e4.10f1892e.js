"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[195],{1374:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),l=n(1736),a=n(9877),o=n(8215);n(2263);function c(e){var t=e.version||0,n=["Node ESM","Node CJS",t>0?"Browser/Deno":"Browser"],c=[function(e){return e},function(e){return e.replace(/import (.+?) from 'megajs'/g,"const $1 = require('megajs')")},function(e){return e.replace(/import (.+?) from 'megajs'/g,"import $1 from 'https://unpkg.com/megajs@"+t+"/dist/main.browser-es.js'")}];return r.createElement("div",null,r.createElement(a.Z,{groupId:"node2deno",className:"margin-bottom--sm"},n.map((function(t,n){return r.createElement(o.Z,{value:n,label:t,onClick:function(){return setMode(n)},key:"+"+n},r.createElement(l.Z,{language:e.language},c[n](e.code)))}))))}},9294:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(7294),l=n(6010),a=n(2434),o=n(9960),c=n(2263),s="heroBanner_qdFl",i="buttons_AeoN",m=n(1374);function u(){var e=(0,c.Z)().siteConfig;return r.createElement("header",{className:(0,l.Z)("hero hero--primary",s)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},e.title),r.createElement("p",{className:"hero__subtitle"},"Unofficial JavaScript SDK for Mega"),r.createElement("div",{className:i},r.createElement(o.Z,{className:"button button--secondary button--lg",to:"/docs/tutorial/intro"},"Tutorial"),r.createElement(o.Z,{className:"button button--secondary button--lg",to:"/docs/api"},"API Reference"))))}function d(){return r.createElement(a.Z,{title:"Home"},r.createElement(u,null),r.createElement("main",null,r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--4"},r.createElement("h2",null,"Quick start"),r.createElement("p",null,"To upload files to ",r.createElement("a",{href:"https://mega.nz/"},"Mega")," import the library using either ES modules or CommonJS."),r.createElement("p",null,'Then create a storage object to login using your e-mail and password, then wait for the "ready" event.'),r.createElement("p",null,"Finally you can call the ",r.createElement("code",null,".upload()")," method to upload files to your account.")),r.createElement("div",{className:"col col--8"},r.createElement(m.Z,{language:"js",code:"import { Storage } from 'megajs'\n\nconst storage = new Storage({\n  email: 'user@example.com',\n  password: 'correct horse battery example'\n})\n\nstorage.once('ready', () => {\n  storage.upload('hello-world.txt', 'Hello world!', (error, file) => {\n    if (error) return console.error('There was an error:', error)\n    console.log('The file was uploaded!', file)\n  })\n})\n",version:1}))))),r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--4"},r.createElement("h2",null,"Downloading files"),r.createElement("p",null,"To download shared files then you first open a file object using the ",r.createElement("code",null,"File.fromURL()")," method."),r.createElement("p",null,"Then you load file attributes such as name and size using ",r.createElement("code",null,".loadAttributes()"),"."),r.createElement("p",null,"Finally use the ",r.createElement("code",null,".download()")," method to download the file which will return a Buffer with the file contents.")),r.createElement("div",{className:"col col--8"},r.createElement(m.Z,{language:"js",code:"import { File } from 'megajs'\n\nconst file = File.fromURL('https://mega.nz/file/example#example')\n\nfile.loadAttributes(error => {\n  if (error) return console.error(error)\n  console.log(file.name) // file name\n  console.log(file.size) // file size in bytes\n\n  file.download((error, data) => {\n    if (error) return console.error(error)\n    console.log(data.toString()) // file contents\n  })\n})\n",version:1}))))),r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement(o.Z,{className:"button button--secondary button--lg button--block",to:"/docs/tutorial/intro"},"Check the tutorial for more info")))),r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--12"},r.createElement("ul",null,r.createElement("li",null,"This is based on ",r.createElement("a",{href:"https://github.com/tonistiigi/mega"},"tonistiigi's mega library"),"."),r.createElement("li",null,"This is all unofficial, based on ",r.createElement("a",{href:"https://mega.nz/#developers"},"developer guide")," and site source."),r.createElement("li",null,"Make sure you agree with Mega's ",r.createElement("a",{href:"https://mega.nz/#terms"},"Terms of Service")," before using it."))))))))}}}]);