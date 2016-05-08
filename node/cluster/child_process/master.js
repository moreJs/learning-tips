'use strict';

const cpus = require('os').cpus();
const processM = require('child_process');

for(let i in cpus) {
  let subProcess = processM.fork('./work.js');
  subProcess.send('msg form master');
  subscriptMsg(subProcess);
/*  processM.spawn('node', ['./work.js']);
  processM.exec('node ./work.js');
  processM.execFile('./work.js');*/
}
function subscriptMsg(msg) {
  msg.on('message', data => {
    console.log('recive form sub', data);
  });
}