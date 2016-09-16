'use strict';

const net = require('net');

const client = net.connect({port: 8124});
client.on('connection', socket => {
    console.log('haha, connected!');
    client.write('hello,server');
});

client.on('data', data => {
    console.log(`recive from server [${data}]`);
    client.end();
});
client.on('end', () => {
    console.log('connect is breaken');
});

