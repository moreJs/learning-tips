'use strict';

const koa = require('koa');
const app = koa();


app.use(function * (next){
    console.log('before middleware 1');
    yield next;
    console.log('after middleware 1');
});

app.use(function* () {
    this.body = 'hello';
});


app.listen(3001, () => {
    console.log('server is starting on port 3001');
});