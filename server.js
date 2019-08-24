'use strict';

const connect = require('connect');
const serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(process.argv[2]);
console.log('Now listening on port', process.argv[2]);