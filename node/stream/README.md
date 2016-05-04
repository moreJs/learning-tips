# node Stream
---
## stream 前言
  - stream 本身是node非常重要的一个组成部分，也是所有jser武器库中最锋利的一把尖刀，之前，对于stream的理解，一知半解，最近，项目中，有个复杂的任务流用 stream 来作为基础架构思想给 cover 了，顿时，对 stream 敬畏不已。
  - 因此，决定好好研究下

## 面向消费者的流
  - 流可以是 Readable Writable 或者 Duplex, 所有的流都是 EventEmitter 的

### Stream.Readable
  - 可读流接口，是对正在读取的数据来源的抽象
  - 包括两种模式：(流动模式 和 暂停模式),默认处于暂停模式
  - 切到流动模式
    - 添加一个 data 事件
    - 调用 resume() 方法
    - pipe() 到一个writable
  - 切回暂停模式
    - pause()
    - 移除 data 事件 ， unpipe()
  - 事件
    - data 使流进入流动模式，可以得到数据
    - end 在没有更多数据可以提供时被触发
    - close 并不是所有流都触发这个事件
    - error 当数据接收发生错误时触发改方法
  - 方法
    - read([size]) 指定要读取多少数据,从内部缓存区获取，没有数据时，会返回 null
    - setEncoding() 流返回制定编码的字符串
    - resume() 从暂停模式切换到流动模式
    - pause() 流动模式的流处于暂停状态
    - pipe() 该函数返回目标流，因此，可以建立导流链
    - unshift(chunk) '逆消费'，以便它可以传递给其他流

### Stream.Writable
  - 方法
    - write(chunk, [enc], [cb]) 向底层系统写入数据
    - end(chunk, [enc], [cb]) 当没有更多数据可以被写入时
  - 事件
    - finish 当end()被调用，并且所有数据都被写入底层的时候，触发该事件
    - pipe 可读流pipe到该可写流时
----