'use strict';
function greeter(person) {
    console.log('hello:' + person);
    return '';
}
;
function identity(arg) {
    return arg;
}
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
