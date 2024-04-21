"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[834],{1629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=n(7462),i=(n(7294),n(3905)),o=n(1374);const s={sidebar_position:8},l="Network settings",r={unversionedId:"tutorial/network-settings",id:"tutorial/network-settings",title:"Network settings",description:"Network related settings, as well some login related settings, are defined in the API class.",source:"@site/docs/tutorial/network-settings.md",sourceDirName:"tutorial",slug:"/tutorial/network-settings",permalink:"/docs/1.0/tutorial/network-settings",draft:!1,editUrl:"https://github.com/qgustavor/megajs-docs/tree/main/docs/tutorial/network-settings.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Interrupted downloads",permalink:"/docs/1.0/tutorial/interrupted-downloads"},next:{title:"Advanced usage",permalink:"/docs/1.0/tutorial/advanced"}},p={},d=[],u={toc:d},c="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"network-settings"},"Network settings"),(0,i.kt)("p",null,"Network related settings, as well some login related settings, are defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"API")," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Get a File or Storage object\nconst file = File.fromURL(url)\nconst storage = new Storage(options, callback)\n\n// The API object can be accessed using:\nconst api = file.api // or storage.api\n")),(0,i.kt)("p",null,"The default API object used by the ",(0,i.kt)("inlineCode",{parentName:"p"},"File")," class can be accessed via:"),(0,i.kt)(o.Z,{language:"js",code:"import { API } from 'megajs'\nconst globalApi = API.getGlobalApi()",version:"1",mdxType:"CodeBlockSwitchable"}),(0,i.kt)("p",null,"In V0 this library used the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/request"},"request")," library, but now fetch is used and to make the library easier to use some shortcuts were added:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// The user-agent used when requesting is available via:\napi.userAgent // default: megajs/{version}\n\n// In Node the Agents used for HTTP and HTTPs are available via\napi.httpAgent\napi.httpsAgent\n")),(0,i.kt)("p",null,"Those agents can be replaced in order if you need to use a proxy. Keep in mind that you need to use an agent that supports ",(0,i.kt)("inlineCode",{parentName:"p"},"keep-alive"),"."),(0,i.kt)("p",null,"You can replace the MEGA gateway, which is useful when testing to point to a mock server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"api.gateway // default: https://g.api.mega.co.nz/\n")),(0,i.kt)("p",null,"You can also replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," wrapper function used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"api.fetch = someFetchLikeFunction\n")),(0,i.kt)("p",null,"But by doing so the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.userAgent"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"api.httpAgent")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"api.httpsAgent")," shortcuts will be ignored and will need to be reimplemented."),(0,i.kt)("p",null,"As v1.2.0 you can replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," module function. It defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"globalThis.fetch")," and, if nonexistent, it requires ",(0,i.kt)("inlineCode",{parentName:"p"},"node-fetch"),". To replace it override ",(0,i.kt)("inlineCode",{parentName:"p"},"API.fetchModule"),":"),(0,i.kt)(o.Z,{language:"js",code:"import { API } from 'megajs'\nAPI.fetchModule = someFetchImplementation",version:"1",mdxType:"CodeBlockSwitchable"}),(0,i.kt)("p",null,"If you replace ",(0,i.kt)("inlineCode",{parentName:"p"},"API.fetchModule")," all code using the library will be affected, but the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.userAgent"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"api.httpAgent")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"api.httpsAgent")," shortcuts will ",(0,i.kt)("em",{parentName:"p"},"NOT")," be ignored, as the reasoning for it is just to allow the user to provide an alternative fetch implementation for the current environment."),(0,i.kt)("p",null,"Files created with ",(0,i.kt)("inlineCode",{parentName:"p"},"new File")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"File.fromURL")," by default use a non-logged API instance and can be quite limited. To work around those limits accounts can be used, so downloading will use the limits from those:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// First log in\nconst storage = new Storage(options, callback)\n\n// Wait for the callback then get a shared file using the logged API\nconst sharedFile = File.fromURL(url, {\n  // highlight-next-line\n  api: storage.api\n})\n\n// Now downloading the shared file will use the limits from that account\n")),(0,i.kt)("p",null,"Finally the properties of the ",(0,i.kt)("inlineCode",{parentName:"p"},"API")," class can also be provided as ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage")," arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const storage = new Storage({\n  email: 'user@example.com',\n  password: 'correct horse battery example',\n  // highlight-next-line\n  userAgent: 'ExampleClient/1.0'\n}, callback)\n")),(0,i.kt)("p",null,"And that's the end of the tutorial. The next page just includes some advanced and unusual usages of the library."))}g.isMDXComponent=!0}}]);