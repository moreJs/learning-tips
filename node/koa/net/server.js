'use strict';

const net = require('net');

const server = net.createServer();
server.on('connection', socket => {
    socket.on('data', data => {
        socket.write(`server recive the data from client, content is [${data}]`);
    });
    socket.on('end', () => {
        console.log('链接断开');
    });
    socket.write('welcome to connect to tcp server');
});

server.on('close', () => {
    console.log('sorry, i need to exit');
});
server.on('error', err => {
    console.log('there is something wrong![${err}]');
});
server.listen(8124, () => {
    console.log('server is starting working');
});