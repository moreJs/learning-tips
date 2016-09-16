## 大纲

### koa 面对的起点

  - node 自身提供了 net 模块，负责封装了tcp这层传输层的细节，通过该模块，我们可以很轻松的建立一个基于tcp的socket，对外服务，但是很显然，这层，或者说这个模块，只负责通信，飞鸽传情，但是里面的数据包的具体内容或者说应用层的协议并不负责解析。

     - const tcpServer = net.createServer();
     - tcpServer.on('connection', socket => {});
     - tcpServer.listen(port, () => {console.log('now server is listening port', port)});
     - 其中，socket 被封装为可读可写流

  - http 模块，集成 net 模块，是更高级 http 层的封装, 将 socket 拆封为可读的 httprequest对象, 和 httpresponse对象，分别对应从请求报文中读取header和body，以及设置和写 http response 的 header 和 body，从上面的描述就可以看出来，这两个对象，只是提供了读和写的能力，对http的约定都没有具体的实现，比如说缓存，认证，上传等，因此，这些都需要一个框架来实现，这也就是koa的一个非常重要的使用，封装http常用的能力。

      - const httpServer = http.createServer((req,res) => {res.writeHead{};res.end();});
      - httpServer.listen(port, () => {console.log('new http server is starting')});

  - 综上所述，这就是koa面临的起点，需要对http协议约定，进行服务器端的实现，客服端已经由浏览器来实现了，koa 通过 middleware 的方式来对各个协议要求进行逐一击破
  - 因此，我们要对 koajs group下面的middlerware 进行深入的学习下，看看他们都是为了解决什么问题而引入的


### koa 的 middleware

### koa 自身的代码逻辑