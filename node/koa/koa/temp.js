'use strict';


const b = function* () {
    yield '567';
    yield 'ooooo';
}
const a = function* () {
    yield 1;
    yield () => {console.log('haha')};
    yield 2
}

let c = a();

console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
