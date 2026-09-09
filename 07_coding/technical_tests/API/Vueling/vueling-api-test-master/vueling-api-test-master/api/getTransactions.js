const procRequest = require('./procRequest');
const clave = 'transactions';

module.exports = (req,res,app,storage) => {
  procRequest(req,res,app,storage,clave);
}
