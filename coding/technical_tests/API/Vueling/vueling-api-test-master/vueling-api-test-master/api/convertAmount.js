module.exports = (fromCurrency,toCurrency,amount,rates) => {
  let monto = convertAmount(fromCurrency,toCurrency,amount,rates)
  return monto;
}

function convertAmount(fromCurrency,toCurrency,amount,rates) {

  //si las divisas son iguales devolvemos el monto sin modificar
  if (fromCurrency === toCurrency){
    monto = amount;
    return monto;
  } else {
    //verificamos si existe una tasa de cambio directa
    var isDirect = false;
    var rate;
    for(let value of rates){
      if(fromCurrency === value.from && toCurrency === value.to){
        isDirect = true;
        rate = value.rate;
      }
    }

    if(isDirect){
      //el cambio es directo, calculamos el monto y devolvemos
      monto = (Number(amount) * Number(rate)).toString();
      return monto;
    } else {
      //el cambio no es directo, se debe realizar un cambio previo
      //buscamos una divisa con cambio directo y calculamos el monto
      //convertido a esa divisa
      for(let value of rates){
        if(toCurrency === value.to){
          //hallamos una divisa con cambio directo
          //calculamos el monto sobre esta divisa
          toCurrency = value.from;
          monto = convertAmount(fromCurrency,toCurrency,amount,rates);
          //el siguiente break es por cuestiones de optimizacion
          break;
        }
      }
      return monto;
    }
  }
}
