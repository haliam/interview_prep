const procRequest = require('./procRequest');
const clave = 'rates';

module.exports = (req,res,app,storage) => {
  procRequest(req,res,app,storage,clave);
}
