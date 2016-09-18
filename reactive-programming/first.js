'use strict';
const Rx = require('rx');

var subject = new Rx.Subject();

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

var observable = Rx.Observable.from([1, 2, 3]);

observable.subscribe(subject);
