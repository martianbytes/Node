const EventEmitter = require('node:events')

/*
If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.

emit is used to trigger an event
on is used to add a callback function that's going to be executed when the event is triggered
*/

const eventEmitter = new EventEmitter();

eventEmitter.on('start', ()=> {
    console.log("Started")
});


eventEmitter.emit("start")