---
sidebar_position: 8
---

# Network settings

Network related settings, as well some login related settings, are defined in the `API` class.

```js
// Get a File or Storage object
const file = File.fromURL(url)
const storage = new Storage(options, callback)

// The API object can be accessed using:
const api = file.api // or storage.api
```

The default API object used by the `File` class can be accessed via:

import CodeBlockSwitchable from '@site/src/components/CodeBlockSwitchable'
import codeExampleApi from '!!raw-loader!./code-example-api.js'

<CodeBlockSwitchable language="js" code={codeExampleApi} version={1}  />

In V0 this library used the [request](https://www.npmjs.com/package/request) library, but now fetch is used and to make the library easier to use some shortcuts were added:

```js
// The user-agent used when requesting is available via:
api.userAgent // default: megajs/{version}

// In Node the Agents used for HTTP and HTTPs are available via
api.httpAgent
api.httpsAgent
```

Those agents can be replaced in order if you need to use a proxy. Keep in mind that you need to use an agent that supports `keep-alive`.

You can replace the Mega gateway, which is useful when testing to point to a mock server:

```js
api.gateway // default: https://g.api.mega.co.nz/
```

You can also replace the `fetch` function used:

```js
api.fetch = someFetchLikeFunction
```

But by doing so the `api.userAgent`, `api.httpAgent` and `api.httpsAgent` shortcuts will be ignored and will need to be reimplemented.

Files created with `new File` and `File.fromURL` by default use a non-logged API instance and can be quite limited. To work around those limits accounts can be used, so downloading will use the limits from those:

```js
// First log in
const storage = new Storage(options, callback)

// Wait for the callback then get a shared file using the logged API
const sharedFile = File.fromURL(url, {
  // highlight-next-line
  api: storage.api
})

// Now downloading the shared file will use the limits from that account
```

Finally all those properties of the `API` class can also be provided as `Storage` and `File` arguments:

```js
const storage = new Storage({
  email: 'user@example.com',
  password: 'correct horse battery example',
  // highlight-next-line
  userAgent: 'ExampleClient/1.0'
}, callback)
```

And that's the end of the tutorial. The next page just includes some advanced and unusual usages of the library.
