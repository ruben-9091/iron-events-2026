const pino = require('pino');
const config = require ('./config');

const logger = pino.child({
    service: 'build.service',
    version: 'build.version'
});

module.exports = logger; 