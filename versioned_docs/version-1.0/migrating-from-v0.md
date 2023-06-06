---
sidebar_position: 3
---

# Migrating from V0

Most of the changes from V0 to V1 are internal changes, like replacing request with fetch and migrating dependencies, but there were a few breaking changes.

## Uploading streams without specifying a file size

Because uploading streams without specifying a file size requires the library to buffer the entire stream in memory and forgetting to specify the file size was a simple mistake to do (even megajs-cli got it wrong) this behavior is not allowed now.

Check `.upload()` calls and add the `size` argument if missing.

If you can't add the `size` argument and prefer the library to do buffering then is possible to restore the old behavior by setting `allowUploadBuffering` to `true` in the `upload` arguments.

## There is no request anymore

Check for `api.requestModule` usages in your code and update those to use fetch. There are some shortcuts in V1 which can help, as documented [here](tutorial/network-settings.md).

## Downloads and uploads retry on errors

Now downloading and uploading will retry up to eight times when downloading or uploading a chunk, defaulting to the following function:

```js
File.defaultHandleRetries = (tries, error, cb) => {
  if (tries > 8) {
    cb(error)
  } else {
    setTimeout(cb, 1000 * Math.pow(2, tries))
  }
}
```

To restore the behavior from V0 replace the handler to this function

```js
File.defaultHandleRetries = (tries, error, cb) => {
  cb(error)
}
```

## Code uses modern JavaScript

Code is not being compiled down to ES5 anymore. It would require Babel and it is slow. If you target older browsers compile the code to ES5 using [Babel](https://babeljs.io/).

## Methods now return promises

Many methods in V0 returned `this`. While returning `this` is useful in some cases (as popularized by jQuery) because this library works asynchronously that's not so useful. Because of that now methods return promises which are more useful. Check if your code relies on the return value of the library methods (except by `MutableFile.prototype.upload()`, `File.prototype.download()` and `new Storage()`, those were kept the same). Also, because of that, promise support is now required, even when using callbacks, since promises are used internally.

## Some functions throw errors synchronously

Since streams throw errors synchronously now `.encrypt()` and `.verify()` also do the same.

## Streaming libraries were updated or replaced

It should not cause many issues, but maybe can cause changes in library behavior in case you depended on some Streams1 behavior. It may make the library more responsive than before, after all, the main reason to update those libraries was to fix Deno support.
