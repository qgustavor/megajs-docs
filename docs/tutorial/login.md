---
sidebar_position: 3
---

# Logging in

To log in to an account use the `Storage` class:

import CodeBlockSwitchable from '@site/src/components/CodeBlockSwitchable'
import codeExampleLogin from '!!raw-loader!./code-example-login.js'

<CodeBlockSwitchable language="js" code={codeExampleLogin} version={1} />

It is recommended to set up an user-agent instead of using the library's default.

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

:::

In the next part of this tutorial we will use the `storage` object to upload a file.
