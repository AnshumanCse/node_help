const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name,id) => {
    console.log(`data recieved hahhaha ${name} and id is: ${id}`)
})
customEmitter.on('response', () => {
    console.log('data recieved hahhaha')
})

customEmitter.emit('response','Deepak',80)