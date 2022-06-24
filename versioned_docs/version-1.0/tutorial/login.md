---
sidebar_position: 3
---

# Logging in

To log in to an account use the `Storage` class:

```js node2deno-v1
import { Storage } from 'megajs'

const storage = new Storage({
  email: 'user@example.com',
  password: 'correct horse battery example',
  userAgent: 'ExampleClient/1.0'
})

// Will resolve once the user is logged in
// or reject if some error happens
await storage.ready
```

It is recommended to set up an user-agent. The library will default to `megajs/{version}` (where `{version}` is the library version). When deploying to browsers set `userAgent` to `null` as it can cause issues in some browsers which allow client-side code to override the `user-agent` header (i.e. Firefox).

Events can still be used like in V0:

```js
storage.once('ready', () => {
  // User is now logged in
})

storage.once('error', error => {
  // Some error happened
})
```

It may look weird to pass a callback to a constructor, but that's an option too:

```js
const storage = new Storage({
  email: 'user@example.com',
  password: 'correct horse battery example',
  userAgent: 'ExampleClient/1.0'
}, error => {
  if (error) {
    // Some error happened
  } else {
    // User is now logged in
  }
})
```

:::caution

If you are migrating from [tonistiigi's mega](https://github.com/tonistiigi/mega) you can still use the following code:

```js
const mega = require('megajs')

const storage = mega({
  email: 'user@example.com',
  password: 'correct horse battery example'
}, error => {
  if (error) {
    // Some error happened
  } else {
    // User is now logged in
  }
})
```

But this pattern might not be supported in future versions because it is not compatible with ES modules and causes issues with tree shaking, which is important when this using this library in a browser environment.

If you try to import the library using `import mega from 'megajs'` it will throw the following error: `SyntaxError: The requested module 'megajs' does not provide an export named 'default'`. Notice that, at the moment, Visual Studio Code will load CJS types - which still support this pattern - instead of ESM types even when using `import` instead of `require` and, because of that, it will not warn about this issue.

:::

In the next part of this tutorial we will use the `storage` object to upload a file.
