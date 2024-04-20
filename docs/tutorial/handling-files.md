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

storage.root.children.find(file => file.name === 'hello-world.txt') // Returns the hello-world.txt file from the storage root
storage.root.children.find(folder => folder.name === 'My Folder') // Returns the "My Folder" directory from the storage root
storage.root.children.filter(file => file.name.match(/\.jpe?g$/i)) // Returns all .jpeg and .jpg files from the storage root
```

Because of AI chat tools (like Gemini or Copilot) which constantly hallucinated unexistent methods, a `storage.find` helper method, originally an AI hallucination, was created in version 1.2.0:

```js
// Both examples searches files named "hello-world.txt"
storage.find('hello-world.txt')
storage.find(file => file.name === 'hello-world.txt')

// Returns the first .jpeg or .jpg file from the storage root
storage.find(file => file.name.match(/\.jpe?g$/i))

// Set the second parameter to true to make it search recursively
storage.find('hello-world.txt', true)

// You can call it in any folder:
storage.find('some folder').find('some other folder').find('some file.txt')
```

Version 1.2.0 also introduced the `.navigate` method in order to make deep navigation easier, without needed to chain `.find` calls like above:

```js
// Works like the above example:
storage.navigate('some folder/some other folder/some file.txt')

// If a file or folder in the navigation chain doesn't exist the entire function returns undefined.
storage.navigate('an unexistent folder/an unexistent file.txt') // undefined

// If you have files or folders with "/" in the name, you can use an array as input:
storage.navigate(['some folder', 'a weird folder with / in the name', 'some file.txt'])

// You can call it inside folders too:
storage.find('some folder').navigate('some other folder/some file.txt')
```

The function `.filter`, also introduced in version 1.2.0, works like `.find`, but returns an array with files matching the query instead of the first match:

```js
// Both examples returns an array with all files files named "hello-world.txt" in the directory root
storage.filter('hello-world.txt')
storage.filter(file => file.name === 'hello-world.txt')

// It's useful when using a function as a query:
// Returns all .jpeg and .jpg files from the storage root
storage.filter(file => file.name.match(/\.jpe?g$/i))

// Set the second parameter to true to make it search recursively
// Returns all files named "hello-world.txt" in the entire storage
storage.filter('hello-world.txt', true)

// Returns all files larger than 1024 bytes from entire storage
storage.filter(file => file.size > 1024, true)

// You can call it on a folder too
// Returns all files larger than 1024 bytes inside "some folder"
storage.find('some folder').filter(file => file.size > 1024, true)
```

Folders are also listed in `storage.files` and in `.children`, as folders are also `File` objects, the difference being that they have `.directory` set to `true`, have `.children` defined to be an array of its children and cannot be downloaded.

```js
// How to get the file "hello-world.txt" inside the file "My Folder" from the storage root:

// --- Before v1.2.0
storage.root.children.find(folder => folder.name === 'My Folder').children.find(file => file.name === 'hello-world.txt')

// --- After v1.2.0
storage.navigate('My Folder/hello-world.txt')


// How to search files in the entire storage:

// --- Before v1.2.0, using the `storage.files` object:
Object.values(storage.files).find(file => file.name === 'hello-world.txt')

// --- After v1.2.0, using `.find` in recursive mode:
storage.find('hello-world.txt', true)
```

Folders and files can be manipulated via many methods:

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
const otherDirectory = storage.find('Other Directory')
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

:::info

The method `.createFolder` **does not exist**: it's an AI hallucination, use `.mkdir` instead. The method `.share` **does not exist**: it's an AI hallucination, use `.link` instead.

:::

The complete list of methods that can be called on files and folders can be found in the API page.

In the next part of the tutorial we will learn how to download files from the storage and public shared files.
