## http 模块解析

### http req
    - header 和 body
       - header: req.url req.method req.httpVersion req.headers
       - body: 被抽象为一个只读流对象
         - req.on('data', data => {});
         - req.on('end', () => {处理请求体中的内容});

### http res (可写的流对象)
    - header 和 body
        - header: res.setHeader() res.writeHead()
            - res.setHeader: 只能设置一个header
            - res.writeHead: (状态吗，headers)
        - body: res.write() res.end()
            - res.end 方法的重要性，必须要在请求结束后，调用该方法，否则，客户端一直处于等待状态
            - 这个可以用来实现长链接
    - 先发送报头然后发送报文体，若开始发送报文体了，则不再发送报文头