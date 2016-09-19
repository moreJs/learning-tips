'use strict';

const Rx = require('rx');

// 只发射一次 ？
// Observable
// const requestStream = Rx.Observable.just('https://api.github.com/users');
// requestStream.subscribe(url => console.log(url), err => console.log('err' + err), complete => console.log('complete'));

const makerPlainStream = index => {
    return Rx.Observable.create(observer => {
        let i = index || 0;
        const id = setInterval(() => {
            observer.onNext(i++);
            i == 21 && observer.completed();
        });
        return () => clearInterval(id);
    });  
};

const makerArrayStream = array => Rx.Observable.from(array || [1,2,3]);

const stream = makerPlainStream();
const mStream = makerPlainStream(10);

const Sstream = stream.map(i => i * 2);

const Mstream = Sstream.merge(mStream);

const ArrayStream = makerArrayStream([1, 2, 3]);
const ArrayStream2 = makerArrayStream([11, 22, 33]);

const finalArrayStream = ArrayStream.combineLatest(ArrayStream2);


finalArrayStream.subscribe(url => {console.log(url); temp = url}, err => console.log('err' + err), complete => console.log('complete'));

