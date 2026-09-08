const convertAmount = require ('./convertAmount');
const roundHalfEven = require('./roundHalfEven');

module.exports = (req,transactions,rates,conf) => {
  let skuFound = false;
  let total = 0;
  let lista = [];
  for (let value of transactions){
    //extraemos 'amount' y 'currency' del 'sku' solicitado
    if (value.sku === req.params.sku){
      let fromCurrency = value.currency;
      let toCurrency = conf.currency;
      let amount = convertAmount(fromCurrency,toCurrency,value.amount,rates);
      amount = roundHalfEven(amount,conf.exp);
      lista.push({'sku': value.sku,'amount': amount,'currency': toCurrency});
      total += Number(amount);
      skuFound = true;
    }
  }
  if (skuFound){
    total = roundHalfEven(total.toString(),conf.exp)
    let suma = [{'sku': req.params.sku,'total': total.toString(),'currency': conf.currency}];
    let skuResponse = [{'lista': lista},{'total': suma}];
    let respuesta = JSON.stringify(skuResponse);
    return respuesta;
  } else {
    let respuesta = JSON.stringify(conf.messages.NotFoundMessage);
    return respuesta;
  }
}
