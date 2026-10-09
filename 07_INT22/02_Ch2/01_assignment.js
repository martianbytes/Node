// use os module to print whether cpu has more than 2 cores
const os = require('os')

console.log(os.cpus().length > 2)
console.log(os.cpus()) //returns object
console.log(os.cpus().length)