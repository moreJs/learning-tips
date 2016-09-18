'use strict';

let x = 3;

interface Named<T> {
    name: T;
}

class Person {
    name: string;
}

let p: Named<string>;
let n: Named<number>;


// 结构型子类型 , 如果 a 兼容 b, 那么 b 至少具有 a 相同的属性

let employ = {id: 123, name: 'more'};

p = employ;



