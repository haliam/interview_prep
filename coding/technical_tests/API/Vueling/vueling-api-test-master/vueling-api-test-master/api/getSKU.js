const conf = require('./config');
const procSKU = require('./procSKU');

module.exports = (req,res,app,storage) => {
  procSKU(req,res,storage,conf);
}
