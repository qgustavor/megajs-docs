---
sidebar_position: 5
---

# Handling files

To share a file you call `.link()` on the file object you got when uploading:

```js
file.link((error, link) => {
  if (error) console.error(error)

  // It will log something like https://mega.nz/file/example#example
  console.log(link)
})
```

You can also share files in your account like this:

```js
// storage is the new Storage() class from the login tutorial

// It will share the first file in the root folder of the account 
storage.root.children[0].link(callback)
```

To access files in Storage class you can use `.root` to access the root folder then `.children` to list its children, which are also `File` objects.

If you need to find a file from a folder by the name you can use `Array.prototype.find`:

```js
const file = storage.root.children.find(file => file.name === 'hello-world.txt')
```

You can also search files in the entire storage by using the `storage.files` object. This object is a map of `file id => File object`, so in order to search the entire account you can use `Object.values` like so:

```js
const file = Object.values(storage.files).find(file => file.name === 'hello-world.txt')
```

Folders are also listed in `storage.files` and in `.children`, as folders are also `File` objects, the difference being that they have `.directory ` set to `true`, have `.children` defined to be an array of its children and cannot be downloaded.

Those differences aside they can be manipulated like other files:

```js
fileORFolder.link(callback) // shares files and folders
fileORFolder.rename(newName, callback) // renames files and folders
fileORFolder.moveTo(someFolder, callback) // moves files and folders
fileORFolder.setFavorite(true, callback) // marks files and folders as favorites
fileORFolder.delete(callback) // moves files and folders to the trash
fileORFolder.delete(true, callback) // delete files and folders permanently 
```

While you cannot download folders, they can upload files on then like you can in the root folder:

```js
folder.upload('hello-world.txt', 'Hello World!', callback)
```

You can also create new folders:

```js
folder.mkdir('New Folder', (error, folder) {
  if (error) console.error(error)
  console.log(folder)
})
```

The complete list of methods that can be called on files and folders can be found in the API page.

In the next part of the tutorial we will learn how to download files from the storage and public shared files.
