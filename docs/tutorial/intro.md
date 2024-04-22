---
sidebar_position: 1
---

# Introduction

The most common usage of this library - at least as found in GitHub - is uploading files, but you can use it to download shared files and folders and manage files in accounts, like moving files, renaming, changing colors and marking files as favorites. Node.js is often used, but this library is also compatible with browsers.

This tutorial will guide you how to use most of the features of this library.

You can follow some of those examples in a browser console. There are just few live examples because most examples would need an MEGA account and, while this tutorial could prompt you to give your account credentials, is better to avoid that to improve security. You can also try those examples on Deno, altought this library doesn't officially support it ([more info here](install.md)).

:::note

This library handles MEGA encryption, file and folder handling and networking. Since this is a library focused on work on multiple platforms (Node.js and browsers) **it does not and will not** handle file reading, file writting nor any platform-specific file operations.

You should implement file I/O using the functions provided by your platform (like reading files using `fs.createReadStream` on Node and `<input type="file">` on browsers, and writting using `fs.createWriteStream` on Node and `<a download>` on browsers).

:::
