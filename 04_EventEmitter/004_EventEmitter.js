// 1. Import the EventEmitter class
const EventEmitter = require('events');

// 2. Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// 3. Register a Listener (Subscribing to an event)
// .on(eventName, callback)
myEmitter.on('orderPlaced', (orderId, total) => {
  console.log(`[Notification Service] Sending email for Order #${orderId} - $${total}`);
});

myEmitter.on('orderPlaced', (orderId) => {
  console.log(`[Inventory Service] Updating stock for Order #${orderId}`);
});

// 4. Emit/Publish the Event (Broadcasting to all listeners)
// .emit(eventName, ...args)
myEmitter.emit('orderPlaced', 101, 49.99);