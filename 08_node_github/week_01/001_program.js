const path = require('path')

console.log("=================Test==================")
console.log("File name: ", path.basename(__filename))
// /Users/alex/projects/app/server.js ---> returns only server.js
// __filename -> gives the absolute value like full Users/alex/projects/app/server.js
console.log("This folder:", __dirname)
// full path of the directory
console.log("Node version:", process.version)