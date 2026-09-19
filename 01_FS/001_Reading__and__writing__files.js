const fs = require('fs')

const textIn = fs.readFileSync('./readfiles/input.txt', 'utf-8')
console.log(textIn)

const textOut = `This is what I want to say today: ${textIn}. \nToday: ${Date.now()}`
fs.writeFileSync('./readfiles/output.txt', textOut)
console.log('File Written successfully.')