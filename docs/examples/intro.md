---
sidebar_position: 1
---

# Introduction

In this section there are code examples meant to be run using Deno.

[Deno](https://deno.com/) is a secure-by-default JavaScript runtime that allows code to be loaded and run from the Internet, so you can just run those examples by typing commands like `deno run https://mega.js.org/...` in your terminal, *which may look unsafe*, but it isn't as since Deno includes security features that allow you to know and permit (or not) the code to run dangerous actions, like reading or writing files, accessing environment variables, connecting to remote servers, and so on.

Code examples are sorted in those levels:

1. Simple examples that show how to use the library but aren't too useful on their own.
2. More advanced examples that might be useful for someone using this library to automate their workflow.
3. Complete single-file applications that might be sourced from real applications.
4. Advanced examples that aren't too useful but show some extra functionality of the library

Notice that most the examples do not include error handling for simplicity sake. This library already retries in case of connection errors while uploading and downloading, but you might have to add error checks and proper error handling on real applications for many uncounted cases like handling wrong account credentials, handling non-existent files, handling errors while reading or writing to the disk, permission checking, and so on.

Also notice that, despite Deno being used for the demos for the reasons stated above, this library is mostly focused on Node.js and uses Buffer and Stream implementations, based on Node.js code, for many of its methods (like downloading and uploading files). Some of the examples using workarounds to use Node.js compatible APIs with Deno APIs (like using `for await` to get data from the download readable stream instead of using `pipe`), but it should be noted that all of those can easily be modified to work with Node.js APIs by replacing Deno's APIs (like `Deno.open`) by their Node.js equivalents (like `fs.createReadStream`).
