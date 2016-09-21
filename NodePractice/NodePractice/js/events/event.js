var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();
life.on('d', function (names) {
    console.log('a'+names+'c')
})
life.emit('d','june')