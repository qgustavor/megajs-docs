"use strict";(self.webpackChunkmegajs_docs=self.webpackChunkmegajs_docs||[]).push([[581],{5610:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"1.0","banner":null,"badge":true,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Tutorial","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/1.0/tutorial/intro","docId":"tutorial/intro","unlisted":false},{"type":"link","label":"Installing","href":"/docs/1.0/tutorial/install","docId":"tutorial/install","unlisted":false},{"type":"link","label":"Logging in","href":"/docs/1.0/tutorial/login","docId":"tutorial/login","unlisted":false},{"type":"link","label":"Uploading files","href":"/docs/1.0/tutorial/uploading","docId":"tutorial/uploading","unlisted":false},{"type":"link","label":"Handling files","href":"/docs/1.0/tutorial/handling-files","docId":"tutorial/handling-files","unlisted":false},{"type":"link","label":"Downloading files","href":"/docs/1.0/tutorial/downloading","docId":"tutorial/downloading","unlisted":false},{"type":"link","label":"Interrupted downloads","href":"/docs/1.0/tutorial/interrupted-downloads","docId":"tutorial/interrupted-downloads","unlisted":false},{"type":"link","label":"Network settings","href":"/docs/1.0/tutorial/network-settings","docId":"tutorial/network-settings","unlisted":false},{"type":"link","label":"Advanced usage","href":"/docs/1.0/tutorial/advanced","docId":"tutorial/advanced","unlisted":false},{"type":"link","label":"Security","href":"/docs/1.0/tutorial/security","docId":"tutorial/security","unlisted":false}]},{"type":"category","label":"Code examples","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Folder shared with custom key","href":"/docs/1.0/examples/custom-key-folder-share","docId":"examples/custom-key-folder-share","unlisted":false},{"type":"link","label":"File deleting","href":"/docs/1.0/examples/file-deleting","docId":"examples/file-deleting","unlisted":false},{"type":"link","label":"File downloading","href":"/docs/1.0/examples/file-downloading","docId":"examples/file-downloading","unlisted":false},{"type":"link","label":"File renaming","href":"/docs/1.0/examples/file-renaming","docId":"examples/file-renaming","unlisted":false},{"type":"link","label":"File searching","href":"/docs/1.0/examples/file-searching","docId":"examples/file-searching","unlisted":false},{"type":"link","label":"File sharing","href":"/docs/1.0/examples/file-sharing","docId":"examples/file-sharing","unlisted":false},{"type":"link","label":"File uploading","href":"/docs/1.0/examples/file-uploading","docId":"examples/file-uploading","unlisted":false},{"type":"link","label":"Folder uploading","href":"/docs/1.0/examples/folder-uploading","docId":"examples/folder-uploading","unlisted":false},{"type":"link","label":"File iterating","href":"/docs/1.0/examples/iterating-files","docId":"examples/iterating-files","unlisted":false},{"type":"link","label":"Recursive folder uploading","href":"/docs/1.0/examples/recursive-folder-uploading","docId":"examples/recursive-folder-uploading","unlisted":false},{"type":"link","label":"Shared file downloading","href":"/docs/1.0/examples/shared-file-downloading","docId":"examples/shared-file-downloading","unlisted":false}]},{"type":"link","label":"API Reference","href":"/docs/1.0/api","docId":"api","unlisted":false},{"type":"link","label":"Migrating from old versions","href":"/docs/1.0/migrating-from-old-versions","docId":"migrating-from-old-versions","unlisted":false},{"type":"link","label":"Platform compatibility","href":"/docs/1.0/platform-compatibility","docId":"platform-compatibility","unlisted":false}]},"docs":{"api":{"id":"api","title":"API Reference","description":"This library handles MEGA encryption, file and folder handling and networking. Since this is a library focused on work on multiple platforms (Node.js and browsers) it does not and will not handle file reading, file writting nor any platform-specific file operations.","sidebar":"tutorialSidebar"},"examples/custom-key-folder-share":{"id":"examples/custom-key-folder-share","title":"Folder shared with custom key","description":"Use this code if you want to share a folder, doesn\'t care too much about its security, and want the key part of the URL to be readable. You just need to find a 22 character string ending with A, Q, g or w. Example//mega.nz/#F!Example!MidnightBlueCrayonDraw. Other example key is \\"DeepSeaTreasureHunting\\".","sidebar":"tutorialSidebar"},"examples/file-deleting":{"id":"examples/file-deleting","title":"File deleting","description":"This example is meant to be run using Deno. You can try by running this code at your console:","sidebar":"tutorialSidebar"},"examples/file-downloading":{"id":"examples/file-downloading","title":"File downloading","description":"This example is meant to be run using Deno. You can try by running this code at your console:","sidebar":"tutorialSidebar"},"examples/file-renaming":{"id":"examples/file-renaming","title":"File renaming","description":"This example is meant to be run using Deno. You can try by running this code at your console:","sidebar":"tutorialSidebar"},"examples/file-searching":{"id":"examples/file-searching","title":"File searching","description":"This example is meant to be run using Deno. You can try by running this code at your console:","sidebar":"tutorialSidebar"},"examples/file-sharing":{"id":"examples/file-sharing","title":"File sharing","description":"This example is meant to be run using Deno. You can try by running this code at your console:","sidebar":"tutorialSidebar"},"examples/file-uploading":{"id":"examples/file-uploading","title":"File uploading","description":"This example is meant to be run using Deno. You can try by running this code at your console:","sidebar":"tutorialSidebar"},"examples/folder-uploading":{"id":"examples/folder-uploading","title":"Folder uploading","description":"This example is meant to be run using Deno. You can try by running this code at your console:","sidebar":"tutorialSidebar"},"examples/iterating-files":{"id":"examples/iterating-files","title":"File iterating","description":"This example is meant to be run using Deno. You can try by running this code at your console:","sidebar":"tutorialSidebar"},"examples/recursive-folder-uploading":{"id":"examples/recursive-folder-uploading","title":"Recursive folder uploading","description":"Check the simpler non-recursive example before checking this one!","sidebar":"tutorialSidebar"},"examples/shared-file-downloading":{"id":"examples/shared-file-downloading","title":"Shared file downloading","description":"This example is meant to be run using Deno. You can try by running this code at your console:","sidebar":"tutorialSidebar"},"migrating-from-old-versions":{"id":"migrating-from-old-versions","title":"Migrating from old versions","description":"Migrating from tonistiigi\'s mega","sidebar":"tutorialSidebar"},"platform-compatibility":{"id":"platform-compatibility","title":"Platform compatibility","description":"This library started as a fork of tonistiigi\'s mega, which was focused to run on Node.js with claimed support based on Browserify (which seems to have stopped working somehow), so one of the reasons for the fork is to restore support for running it on browsers.","sidebar":"tutorialSidebar"},"tutorial/advanced":{"id":"tutorial/advanced","title":"Advanced usage","description":"This library supports separating downloading/uploading from encryption steps. It\'s quite unusual but maybe it\'s useful for someone as seems tonistiigi supported those things by exporting low level encrypt and decrypt functions.","sidebar":"tutorialSidebar"},"tutorial/downloading":{"id":"tutorial/downloading","title":"Downloading files","description":"To share a download you call .downloadBuffer() or .download() on the file object:","sidebar":"tutorialSidebar"},"tutorial/handling-files":{"id":"tutorial/handling-files","title":"Handling files","description":"To share a file you call .link() on the file object you got when uploading:","sidebar":"tutorialSidebar"},"tutorial/install":{"id":"tutorial/install","title":"Installing","description":"If you are targeting Node or using a build tool, then you need to install the library first:","sidebar":"tutorialSidebar"},"tutorial/interrupted-downloads":{"id":"tutorial/interrupted-downloads","title":"Interrupted downloads","description":"If a download gets interrupted - because connection issues or user action - you need to create other stream to resume it:","sidebar":"tutorialSidebar"},"tutorial/intro":{"id":"tutorial/intro","title":"Introduction","description":"The most common usage of this library - at least as found in GitHub - is uploading files, but you can use it to download shared files and folders and manage files in accounts, like moving files, renaming, changing colors and marking files as favorites. This tutorial will guide you how to use most of the features of this library.","sidebar":"tutorialSidebar"},"tutorial/login":{"id":"tutorial/login","title":"Logging in","description":"To log in to an account use the Storage class:","sidebar":"tutorialSidebar"},"tutorial/network-settings":{"id":"tutorial/network-settings","title":"Network settings","description":"Network related settings, as well some login related settings, are defined in the API class.","sidebar":"tutorialSidebar"},"tutorial/security":{"id":"tutorial/security","title":"Security","description":"MEGA is primarily a file hosting website that uses end-to-end cryptography, but there are some things that need attention in order to keep it secure:","sidebar":"tutorialSidebar"},"tutorial/uploading":{"id":"tutorial/uploading","title":"Uploading files","description":"Once you logged into your account you can upload files by calling storage.upload():","sidebar":"tutorialSidebar"}}}')}}]);