---
sidebar_position: 3
---

# Logging in

To log in to an account use the `Storage` class:

import CodeBlockSwitchable from '@site/src/components/CodeBlockSwitchable'
import codeExampleLogin from '!!raw-loader!./code-example-login.js'

<CodeBlockSwitchable language="js" code={codeExampleLogin} />

It may look weird to pass a callback to a constructor, but that's an option too:

```js
const storage = new Storage({
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

While is recommended to set up an user-agent before logging-in, in V0 the steps for doing so are a bit complicated. You can either switch to V1 or read more about it in the [advanced usage page](advanced.md).

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

:::

In the next part of this tutorial we will use the `storage` object to upload a file.
