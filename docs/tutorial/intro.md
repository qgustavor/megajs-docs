---
sidebar_position: 1
---

# Introduction

The most common usage of this library - at least as found in GitHub - is uploading files, but you can use it to download shared files and folders and manage files in accounts, like moving files, renaming, changing colors and marking files as favorites. This tutorial will guide you how to use most of the features of this library.

If you prefer checking example code, check the "Code examples" section on the sidebar which have a lot of code examples which can be run using Deno.

:::note

This library handles MEGA encryption, file and folder handling and networking. Since this is a library focused on work on multiple platforms (Node.js and browsers) **it does not and will not** handle file reading, file writing nor any platform-specific file operations.

You should implement file I/O using the functions provided by your platform (like reading files using `fs.createReadStream` on Node and `<input type="file">` on browsers, and writing using `fs.createWriteStream` on Node and `<a download>` on browsers).

:::
