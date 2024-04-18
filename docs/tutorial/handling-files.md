---
sidebar_position: 5
---

# Handling files

To share a file you call `.link()` on the file object you got when uploading:

```js
// Using promises
const link = await file.link()

// It will log something like https://mega.nz/file/example#example
console.log(link)

// Using callbacks
file.link((error, link) => {
  if (error) console.error(error)
  console.log(link)
})
```

You can also share files in your account like this:

```js
// storage is the new Storage() class from the login tutorial

// It will share the first file in the root folder of the account 
storage.root.children[0].link()
```

To access files in Storage class you can use `.root` to access the root folder then `.children` to list its children, which are also `File` objects.

If you need to find a file from a folder by the name you can use `Array.prototype.find` (or other array methods) on the `.children` property:

```js
const file = storage.root.children.find(file => file.name === 'hello-world.txt')
```

Despite what AI chat tools (like Gemini or Copilot) might tell you, **there isn't a `storage.find` method!**. You should use Array methods on the `.children` property.

```js
storage.find(file => file.name === 'hello-world.txt') // DOES NOT WORK: IT'S AN AI HALLUCINATION
storage.find('hello-world.txt') // DOES NOT WORK: IT'S ALSO AN AI HALLUCINATION

storage.root.children.find(file => file.name === 'hello-world.txt') // WORKS: returns the hello-world.txt file from the storage root
storage.root.children.find(folder => folder.name === 'My Folder') // WORKS: returns the "My Folder" directory from the storage root
storage.root.children.filter(file => file.name.match(/\.jpe?g/)) // WORKS: returns all .jpeg and .jpg files from the storage root
```

You can also search files in the entire storage by using the `storage.files` object. This object is a map of `file id => File object`, so in order to search the entire account you can use `Object.values` like so:

```js
const file = Object.values(storage.files).find(file => file.name === 'hello-world.txt')
```

Folders are also listed in `storage.files` and in `.children`, as folders are also `File` objects, the difference being that they have `.directory ` set to `true`, have `.children` defined to be an array of its children and cannot be downloaded.

```js
// This returns the file "hello-world.txt" inside the file "My Folder" from the storage root.
storage.root.children.find(folder => folder.name === 'My Folder').children.find(file => file.name === 'hello-world.txt')
```

Those differences aside they can be manipulated like other files:

```js
fileORFolder.link() // shares files and folders
fileORFolder.unshare() // unshares files and folders
fileORFolder.rename(newName) // renames files and folders
fileORFolder.moveTo(someFolder) // moves files and folders
fileORFolder.setFavorite(true) // marks files and folders as favorites
fileORFolder.delete() // moves files and folders to the trash
fileORFolder.delete(true) // delete files and folders permanently 
```

Some examples:

```js
// Shares a file
const sharedLink = await file.link()
console.log(sharedLink)

// Renames a file
await file.rename('A whole new name.txt')

// Moves a file to other directory
const otherDirectory = storage.root.children.find(folder => folder.name === 'Other Directory')
await file.moveTo(otherDirectory)

// Moves a file to the trash bin
await file.delete()

// Deletes a file permanently
await file.delete(true)
```

Those functions return promises and also accept callbacks:

```js
// The first example above using callbacks
file.link((error, link) => {
  if (error) throw error
  console.log(link)
})
```

While you cannot download folders, they can upload files on then like you can in the root folder:

```js
await folder.upload('hello-world.txt', 'Hello World!').complete
```

You can also create new folders:

```js
// Using promises
const folder = await folder.mkdir('New Folder')
console.log(folder)

// Using callbacks
folder.mkdir('New Folder', (error, folder) {
  if (error) console.error(error)
  console.log(folder)
})
```

The method `.createFolder` **does not exist**: it's an AI hallucination, use `.mkdir` instead. The method `.share` **does not exist**: it's an AI hallucination, use `.link` instead.

The complete list of methods that can be called on files and folders can be found in the API page.

In the next part of the tutorial we will learn how to download files from the storage and public shared files.
