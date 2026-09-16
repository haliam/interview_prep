const storage = require('node-persist');
const conf = require('./config');

storage.initSync(conf.storOptions);

module.exports = storage;
