# why cluster ?
  - js 代码运行在单进程中的单线程 v8 实例中
  - 未捕获的异常，会造成程序崩溃，影响产品化

# 解决方案
  - 启动多个进程，每个进程各自用一个cpu，在node中，child_process模块用来干这件事情，该模块提供了随意创建子进程的能力

    - fork
      - 通过 fork() 出来的 work,都是独立和全新的 v8
      - 需要至少 30ms 的启动时间 和至少 10 mb 的内存, fork 的成本稍微有点高啊

    - exec
      - 执行已经有的命令 shell

    - execFile
      - 执行文件

    - spawn
      - nice

# 进程间相互通信


  - IPC
    - 子进程对象通过 send() 方法实现 master 向 work 发送信息
    - message 事件，用来接收 从 master send 来的信息
    - core: 通过子进程对象本身


  - 句柄传递(进程间传递句柄)

