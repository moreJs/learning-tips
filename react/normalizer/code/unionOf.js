'use strict';
var normalizer = require('normalizr');

var normalize = normalizer.normalize;
var Schema = normalizer.Schema;
var arrayOf = normalizer.arrayOf;
var valuesOf = normalizer.valuesOf;
var unionOf = normalizer.unionOf;

const test = new Schema('test');
const name = new Schema('name');
const age = new Schema('age');

test.define({
  user: unionOf(name, { schemaAttribute: 'name' })
});

const beforeObj = {id:1,user: {name:'morejs',age:27}};

let afterObj = normalize(beforeObj, test);
console.log(beforeObj);
console.log(afterObj.entities.test['1']);