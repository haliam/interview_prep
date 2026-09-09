const procRequest = require('./procRequest');
let clave = 'transactions';

module.exports = (req,res,app,storage) => {
  procRequest(req,res,app,storage,clave);
}
