module.exports = (value,exp) => {
  //se hace el redondeo con los decimales especificados por 'exp'
  //'exp' se asume siempre positivo
  //buscamos un metodo que nos permita hacer los calculos sin usar
  //coma flotante, usaremos siempre string y enteros
  //primero dividimos la parte entera de la decimal en dos strings
  //se asumen valores siempre positivos
  let entero;
  let decimal;
  let index = value.indexOf('.');
  if (index < 0){
    //la expresion no tiene decimales
    return value;
  } else {
    if (index === 0){
      entero = '0';
    } else {
      entero = value.substring(0, index);
    }
    decimal = value.substring(index+1);
    if (Number(exp) > 0){
      //trabajaremos con la parte decimal
      let lenDecimal = decimal.length;
      while(lenDecimal > Number(exp)) {
        decimal = roundDecimal(decimal,exp);
        lenDecimal = decimal.length;
      }
      value = entero + '.' + decimal;
      return value;
    } else {
      //aqui redondeamos la parte entera
      //debido a que se trabaja con divisas
      //no se implementa este codigo
    }
  }
}

function roundDecimal(decimal,exp){
  if(decimal.length <= exp){
    return decimal;
  }
  let lastChar;
  if(decimal.endsWith('5')){
    lastChar = decimal.charAt(decimal.length - 2);
    if (!(Number(lastChar) % 2)) {
      //numero par
      decimal = decimal.substring(0,decimal.length - 2) + lastChar;
      return decimal;
    } else {
      //numero impar
      lastChar = Number(lastChar) + 1;
      decimal = decimal.substring(0,decimal.length - 2) + lastChar;
      return decimal;
    }
  } else if (decimal.endsWith('0')){
    decimal = decimal.substring(0,decimal.length - 1);
    return decimal;
  } else {
    lastChar = decimal.charAt(decimal.length - 2);
    if (Number(decimal.charAt(decimal.length - 1)) > 5 ){
      if (Number(lastChar) === 9){
        decimal = decimal.substring(0,decimal.length - 1);
        return decimal;
      }
      lastChar = (Number(lastChar) + 1).toString();
      decimal = decimal.substring(0,decimal.length - 2) + lastChar;
      return decimal;
    } else {
      decimal = decimal.substring(0,decimal.length - 1);
      return decimal;
    }
  }
}
