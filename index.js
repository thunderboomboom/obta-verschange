const smm_obta_kit = require('smm-obta-kit');
const obta_verschange = require('obta-verschange');
const xml2js = require('xml2js');
const enzyme = require('enzyme');
const debug = require('debug');
const mysql = require('mysql');
const cheerio = require('cheerio');
const socket.io = require('socket.io');

const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('customEvent', (message) => {
  console.log(`Custom Event Received: ${message}`);
});
eventEmitter.emit('customEvent', 'Hello EventEmitter');

const assert = require('assert');
assert.strictEqual(1, 1, '1 should be equal to 1');

const fs = require('fs');
const readStream = fs.createReadStream('./example.txt');
readStream.on('data', (chunk) => {
  console.log(chunk.toString());
});

const fs = require('fs');
fs.readdir('.', { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    console.log(file.isDirectory() ? `${file.name} is a directory` : `${file.name} is a file`);
  });
});

// Get information about an Ethereum transaction
const txHash = '0xtransactionHash';
web3.eth.getTransaction(txHash).then(tx => {
  console.log('Transaction details:', tx);
}).catch(err => {
  console.error('Error getting transaction details:', err);
});