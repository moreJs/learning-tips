'use strict';
const assert = require('assert');

function *gen(x) {
  let v1 = yield x + 1;
  let v2 = yield v1 + 2;
  return v2;
}

let fn = gen(1);
let first = fn.next();
assert.equal(first.value, 2);
assert.equal(first.done, false);
let second = fn.next(5);
assert.equal(second.value, 7);
assert.equal(second.done, false);
let final = fn.next(9);
assert.equal(final.value, 9);
assert.equal(final.done, true);