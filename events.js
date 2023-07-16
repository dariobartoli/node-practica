const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (data, secondData) =>{
    console.log('recibido');
    console.log(data);
    console.log(secondData);
})

customEmitter.emit('response', 'hello word', [1,2,3])


