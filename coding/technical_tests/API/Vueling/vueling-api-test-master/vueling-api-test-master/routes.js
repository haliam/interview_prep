const methods = require('./api/methods');

module.exports = (app,storage) => {
  app.get('/', (req,res,next) =>{
    methods.getHome(req,res,app,storage);
  });
  app.get('/rates.json', (req,res,next) =>{
    methods.getRates(req,res,app,storage);
  });
  app.get('/transactions.json', (req,res,next) =>{
    methods.getTransactions(req,res,app,storage);
  });
  app.get('/transactions/:sku', (req,res,next) =>{
    methods.getSKU(req,res,app,storage);
  });
  app.use( (req,res,next) => {
    res.status(404);
    res.json({
      "error": "Ruta no encontrada"
    });
  });
  app.use((err,req,res,next) => {
    res.status(500);
    res.json({
      "error": `${err}`
    });
  });
}
