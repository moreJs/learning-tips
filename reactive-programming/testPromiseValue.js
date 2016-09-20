'use strict';

const promiseA = new Promise((resolve, reject) => {
    resolve(1,2,3);
});
promiseA.then((i,j,k) => {console.log(i, j, k)});