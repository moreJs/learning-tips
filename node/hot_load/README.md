## 代码热部署

  ### http://fex.baidu.com/blog/2015/05/nodejs-hot-swapping/(原文)
    - 基本原理，是利用 node 自身的模块机制，定时刷新模块缓存，这样，require的时候，会拿到最新的模块代码
  ### livereload
    - 基本原理，利用浏览器和server建立，websocket 通道，server监听到文件变化后，会推送给浏览器
  ### webpack hot mode
    - 基本原理
      - webpack-dev-server (node express server)
      - client (via Socket.IO)

