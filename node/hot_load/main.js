'use strict';

function cleanCache(module) {
  let realPath = require.resolve(module);
  require.cache[realPath] = null;
}

setInterval(() => {
  cleanCache('./work.js');
  let work = require('./work.js');
  console.log(work);
}, 5000);