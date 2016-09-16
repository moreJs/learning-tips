'use strict';
var Immutable = require('immutable');
var List = Immutable.List;
var assert = require('assert');

var a = List.of(1, 2, 3);
var b = a.set(0,8);
console.log(a);
console.log(b);
assert(a === b , '果然，不相等')
