const EventEmitter = require("node:events")


const eventEmitter = new EventEmitter();


eventEmitter.on('start', number=> {
    console.log("Started on ", number)
})


eventEmitter.emit('start', 25)
