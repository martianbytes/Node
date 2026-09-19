const fs = require('fs')


fs.rename("before.json", "after.json", (err)=> {
    console.error(err)
})