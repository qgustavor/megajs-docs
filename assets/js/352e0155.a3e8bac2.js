"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[657],{7395:function(t){t.exports=JSON.parse('{"pluginId":"default","version":"1.0","label":"1.0","banner":null,"badge":true,"className":"docs-version-1.0","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Tutorial","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/tutorial/intro","docId":"tutorial/intro"},{"type":"link","label":"Installing","href":"/docs/tutorial/install","docId":"tutorial/install"},{"type":"link","label":"Logging in","href":"/docs/tutorial/login","docId":"tutorial/login"},{"type":"link","label":"Uploading files","href":"/docs/tutorial/uploading","docId":"tutorial/uploading"},{"type":"link","label":"Handling files","href":"/docs/tutorial/handling-files","docId":"tutorial/handling-files"},{"type":"link","label":"Downloading files","href":"/docs/tutorial/downloading","docId":"tutorial/downloading"},{"type":"link","label":"Interrupted downloads","href":"/docs/tutorial/interrupted-downloads","docId":"tutorial/interrupted-downloads"},{"type":"link","label":"Network settings","href":"/docs/tutorial/network-settings","docId":"tutorial/network-settings"},{"type":"link","label":"Advanced usage","href":"/docs/tutorial/advanced","docId":"tutorial/advanced"},{"type":"link","label":"Security","href":"/docs/tutorial/security","docId":"tutorial/security"}]},{"type":"link","label":"API Reference","href":"/docs/api","docId":"api"},{"type":"link","label":"Migrating from V0","href":"/docs/migrating-from-v0","docId":"migrating-from-v0"}]},"docs":{"api":{"id":"api","title":"API Reference","description":"Promises","sidebar":"tutorialSidebar"},"migrating-from-v0":{"id":"migrating-from-v0","title":"Migrating from V0","description":"Most of the changes from V0 to V1 are internal changes, like replacing request with fetch and migrating dependencies, but there were a few breaking changes.","sidebar":"tutorialSidebar"},"tutorial/advanced":{"id":"tutorial/advanced","title":"Advanced usage","description":"This library supports separating downloading/uploading from encryption steps. It\'s quite unusual but maybe it\'s useful for someone as seems tonistiigi supported those things by exporting low level encrypt and decrypt functions.","sidebar":"tutorialSidebar"},"tutorial/downloading":{"id":"tutorial/downloading","title":"Downloading files","description":"To share a download you call .downloadBuffer() or .download() on the file object:","sidebar":"tutorialSidebar"},"tutorial/handling-files":{"id":"tutorial/handling-files","title":"Handling files","description":"To share a file you call .link() on the file object you got when uploading:","sidebar":"tutorialSidebar"},"tutorial/install":{"id":"tutorial/install","title":"Installing","description":"If you are targeting Node or using a build tool, then you need to install the library first:","sidebar":"tutorialSidebar"},"tutorial/interrupted-downloads":{"id":"tutorial/interrupted-downloads","title":"Interrupted downloads","description":"If a download gets interrupted - because connection issues or user action - you need to create other stream to resume it:","sidebar":"tutorialSidebar"},"tutorial/intro":{"id":"tutorial/intro","title":"Introduction","description":"The most common usage of this library - at least as found in GitHub - is uploading files, but you can use it to download shared files and folders and manage files in accounts, like moving files, renaming, changing colors and marking files as favorites. Node is often used, but this library is also compatible with browsers and Deno.","sidebar":"tutorialSidebar"},"tutorial/login":{"id":"tutorial/login","title":"Logging in","description":"To log in to an account use the Storage class:","sidebar":"tutorialSidebar"},"tutorial/network-settings":{"id":"tutorial/network-settings","title":"Network settings","description":"Network related settings, as well some login related settings, are defined in the API class.","sidebar":"tutorialSidebar"},"tutorial/security":{"id":"tutorial/security","title":"Security","description":"MEGA is primarily a file hosting website that uses end-to-end cryptography, but there are some things that need attention in order to keep it secure:","sidebar":"tutorialSidebar"},"tutorial/uploading":{"id":"tutorial/uploading","title":"Uploading files","description":"Once you logged into your account you can upload files by calling storage.upload():","sidebar":"tutorialSidebar"}}}')}}]);