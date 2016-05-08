'use strict';

console.log('this is child', new Date().getTime());

process.on('message', data => {
  console.log('sub receive: ',  data);
  process.send(`i received ${data}`);
});