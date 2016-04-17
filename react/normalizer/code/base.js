'use strict';
var normalizer = require('normalizr');

var normalize = normalizer.normalize;
var Schema = normalizer.Schema;
var arrayOf = normalizer.arrayOf;
var valuesOf = normalizer.valuesOf;
var unionOf = normalizer.unionOf;

const test = new Schema('test');
const user = new Schema('user', { idAttribute: 'name' });

test.define({
  user: unionOf(user, { schemaAttribute: 'name' })
});

const beforeObj = {id:1,user:{name:'kobe',age:38},title:'hello'};

let afterObj = normalize(beforeObj, test);
console.log(beforeObj);
console.log(afterObj.entities.test['1']);