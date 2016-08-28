'use strict';

const http = require('http');

const server = http.createServer();
let intervale = null;

server.on('request', (req, res) => {
    console.log(req.url, req.method, req.httpVersion);
    console.log('==================================');
    console.log(req.headers);
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // 对请求体的处理
    req.on('data', data => {
        console.log(`recive from client ${data}`);
    });
    req.on('end', () => {
        console.log('client data is over');
        res.end('hello,world\n');
    });
/*    intervale = setInterval(() => {
        console.log('[========intervale============]');
        res.write('hello,world\n');
    },1000)*/
/*    setTimeout(() => {
        clearInterval(intervale);
        res.end();
    }, 8000);*/
});
server.listen(1337, '127.0.0.1');
