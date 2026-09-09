const totalizarSKU = require('./totalizarSKU');

module.exports = (req,res,storage,conf) => {
  console.log(conf.messages.persistDataRead);
  let transactions = storage.getItemSync('transactions');
  let rates = storage.getItemSync('rates');
  let respuesta = totalizarSKU(req,transactions,rates,conf);
  console.log(conf.messages.skuProcessed);
  res.send(respuesta);
}
