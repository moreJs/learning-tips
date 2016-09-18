## RxJx

***

### 一些基本概念
 - 一切皆流，流是可观察的对象,可以被观察、订阅等。
    - 创建流
    ```js
        - let requestStream = RX.Observable.just('www.baidu.com')
    ```
    - 订阅流
    ```js
        - requestStream.subscript(url => {

            });
    ```
    - 综合示例
    ```js
        - requestStream.subscribe(function(requestUrl) {
                // 执行异步请求
                var responseStream = Rx.Observable.create(function (observer) {
                    jQuery.getJSON(requestUrl)
                    .done(function(response) { observer.onNext(response); })
                    .fail(function(jqXHR, status, error) { observer.onError(error); })
                    .always(function() { observer.onCompleted(); });
                });
            
                responseStream.subscribe(function(response) {
                    // 业务逻辑
                });
            }
    ```
- 把一个流转化为一个新流
    - map(f) 函数
    ```js
        - var responseMetastream = requestStream
            .map(function(requestUrl) {
                return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl));
            });
    ```
    - flatMap(): 将枝干的流发射到主干上,也可以理解为用树干的流代替主干的流
    ```js
        - var responseStream = requestStream
            .flatMap(function(requestUrl) {
                return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl));
            });
    ```
    - merge() 把两个流合并起来
    ```js
        - var requestStream = refreshClickStream
            .map(function() {
                var randomOffset = Math.floor(Math.random()*500);
                return 'https://api.github.com/users?since=' + randomOffset;
            })
            .merge(Rx.Observable.just('https://api.github.com/users'));
    ```
    - startWith(x) 都会把x作为这个流的启示输入并发射出来,简单说就是立马发射一次该流
    ```js
        - var requestStream = refreshClickStream.startWith('startup click')
            .map(function() {
                var randomOffset = Math.floor(Math.random()*500);
                return 'https://api.github.com/users?since=' + randomOffset;
            });
    ```