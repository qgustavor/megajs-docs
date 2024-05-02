import { getLoggedInStorage } from './logging-in-demo.js'
import * as path from 'https://deno.land/std@0.188.0/path/mod.ts'
import prettyBytes from 'npm:pretty-bytes'
import ProgressBar from 'https://deno.land/x/progress@v1.4.5/mod.ts'

// Generate a 7z file by compressing a ../dist folder (requires 7z in the path)
const buildName = new Date().toISOString().slice(0, 13) + '.7z'
const buildPath = path.fromFileUrl(new URL('./' + buildName, import.meta.url))
const rootPath = path.fromFileUrl(new URL('../dist', import.meta.url))
const command = new Deno.Command('7z', {
  args: ['a', buildPath, rootPath]
})
const { code, stderr } = await command.output()
if (code !== 0) {
  console.error(new TextDecoder().decode(stderr))
  throw Error(`7z exited with ${code}`)
}
const data = await Deno.readFile(buildPath)
console.log('Got a', data.length, 'byte (' + prettyBytes(data.length) + ') bundle')

// Log in intro MEGA
const storage = await getLoggedInStorage()

// Try to find a folder where files will be shared
const rootFolderName = 'Distributed files'
let rootFolder = storage.find(rootFolderName)

// If no folder is found, ask user if the script can create one
if (!rootFolder) {
  console.log('Root folder not found, create one?')
  const promptResult = window.confirm('>')
  if (!promptResult) throw Error('Aborted')
    
  // If allowed, the script will create the folder and share it with a custom key
  rootFolder = await storage.mkdir(rootFolderName)
  const link = await rootFolder.link({ key: 'DeepSeaTreasureHunting' })
  console.log('Base folder created and shared:', link)
}

// Prune folder
if (rootFolder.children) {
  // Sort files in the folder by timestamp, them remove the first most recent ones from the array
  const childToDelete = rootFolder.children.slice().sort((a, b) => {
    return b.timestamp - a.timestamp
  }).slice(10)
  
  // Them delete all files that remained
  for (const entry of childToDelete) {
    await entry.delete(true)
  }
  
  // Check if a duplicate file exists and, if so, delete it
  const duplicateBuild = rootFolder.find(buildName)
  if (duplicateBuild) await duplicateBuild.delete(true)
}

// Create a progress bar to track the upload progress
const progressBar = new ProgressBar({
  display: ':title :percent :bar :time/:eta',
  title: 'Uploading ' + buildName + ':',
  total: data.length
})
progressBar.render(0)

// Upload the file
const uploadStream = rootFolder.upload({
  name: buildName,
  // Seems that setting maxConnections to 1 improved results
  maxConnections: 1,
  // Because... the same reason shown as in all other examples
  forceHttps: false
}, data)

// Handle progress events
uploadStream.on('progress', event => {
  progressBar.render(event.bytesUploaded)
})

// Create a timeout to handle bad network connections
// (at the time I implemented this code my Internet connection was really bad)
const maxTimeout = 36e5 // 60 minutes
let timeoutTimer
let exitCode = 0
try {
  await Promise.race([
    uploadStream.complete,
    new Promise((resolve, reject) => {
      timeoutTimer = setTimeout(reject, maxTimeout, Error('Upload timeout out'))
    })
  ])

  console.log('\n\n' + buildName, 'was uploaded')
} catch (error) {
  console.error(error)
  exitCode = 1
}

// Clear up things
clearTimeout(timeoutTimer)
await storage.close().catch(() => { /* Ignore errors at this step */ })
await Deno.remove(buildPath)
Deno.exit(exitCode)
