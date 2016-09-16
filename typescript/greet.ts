'use strict';

import Moment from 'mini-moment';

interface Person {
    firstName: string,
    lastName: string
}

function greeter<T>(person: T): T{
    console.log('hello:'+ person);
    return '';
};

function identity<T>(arg: T): T {
    return arg;
}

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

