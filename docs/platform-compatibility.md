---
sidebar_position: 5
---

# Platform compatibility

This library started as a fork of [tonistiigi's mega](https://www.npmjs.com/package/mega), which was focused to run on Node.js with claimed support based on Browserify (which seems to have stopped working somehow), so one of the reasons for the fork is to restore support for running it on browsers.

## Node.js

Following its origins, this library still focuses on Node.js and is mostly used and tested on this platform.

Version 1.2.0 added a change that made the library use the global `fetch` library when available instead of relying on `node-fetch`. All test cases are passing and none of the applications wrote by the library's author broke, so seems that's fine. If you have issues on that, debug the issue and send a pull request.

## Browsers

As stated in the beginning, one of the reasons for this fork was to restore browser support (so it could be used in [direct-mega](https://github.com/qgustavor/direct-mega)). Browser support was added by creating a browser version that uses pure-JS functions instead of Node.js equivalents (mostly crypto functions, in which case the crypto functions used are old ones tonistiigi used, with many fixes and improvements). The browser code is also tested in every release using Deno (which provides a similar environment to a browser).

## Deno

Deno is partially supported:

It can't connect to MEGA uploading and downloading servers due to issues related to weak TLS ciphers. That's something that cannot be fixed by this library and neither Deno developers ([source](https://github.com/denoland/deno/issues/6427#issuecomment-813662658)) nor MEGA developers ([source](https://mega.io/developers), quoted: "MEGA’s HTTPS access supports most ciphers/hashes and uses [...] **RC4/MD5** [...]") want to fix.

Is still possible to use Deno by disabling HTTPS when uploading or downloading, but that's even worse than using MD5 and, because of that, the only choice for this library is not supporting Deno entirely. Since RC4 is broken and outdated, the trend is to more and more TLS libraries to stop supporting it, then MEGA will have to support strong ciphers in all of their servers. Notice that, since MEGA works in browsers, they already enable strong ciphers depending on the user-agent, but that's not the case for all user-agents.

Besides downloading and uploading files, this library works perfectly on Deno. In fact, as stated above, it's used to test the browser builds of the library.

::: tip

*Can someone convince MEGA to enable strong TLS on all their servers?* The fact they use still RC4 is really bad: cryptography is not a joke, even if they also use AES along, AES is used with static keys per file, which is not ideal for encrypted network connections and can lead to issues. Disabling HTTPS in clients and disabling strong ciphers in the servers they are increasing the risk of their users having data leaked and privacy reduced.

The argument that they want to save CPU resources is really weak as modern ciphers are both safer than RC4 [and even faster than RC4](https://news.ycombinator.com/item?id=6549166) (and that's from 2013!), so it doesn't even make sense for MEGA to use RC4 to save CPU resources, instead, they are just putting their users at higher risk.

:::

## Other JavaScript environments

Should work like Node.js or Deno, depending on how the environment handles weak TLS cyphers. I tested the home page demo for downloading on [Bun](https://bun.sh/) and it worked well, so, because it aims to be compatible with Node.js, it seems to work like Node.js.
