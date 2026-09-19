const EventEmitter = require('node:events')


const eventEmitter = new EventEmitter();


eventEmitter.on('start', (start, end)=> {
    console.log(`Started on ${start} to ${end}`)
})


eventEmitter.emit('start', 1, 100)