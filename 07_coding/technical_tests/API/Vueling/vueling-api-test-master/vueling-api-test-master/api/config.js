const config = {
  messages: {
    NotFoundMessage: {
      "error": "not found"
    },
    remoteSvrNA: "Servicio remoto no disponible: ",
    badResponseCode: "Peticion rechazada",
    responseCode: "Codigo de respuesta: ",
    persistDataReturn: "Enviando persistent data...",
    persistDataSended: "...persistent data enviada",
    persistDataSaved: "Persistent data guardada",
    persistDataRead: "Leyendo persistent data",
    readFileError: "Error de lectura: ",
    writeFileError: "Error de escritura: ",
    remoteDataProcessing: "Procesando datos remotos...",
    remoteDataProcFinnished: "Datos remotos procesados",
    remoteDataSending: "Enviando datos ...",
    remoteDataSended: "Datos enviados",
    skuProcessing: "Procesando SKU...",
    skuProcessed: "SKU procesado"
  },
  getOpts: {
    rates: {
      url: 'http://quiet-stone-2094.herokuapp.com/rates.json',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
      },
      timeout: 1500
    },
    transactions: {
      url: 'http://quiet-stone-2094.herokuapp.com/transactions.json',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
      },
      timeout: 1500
    }
  },
  storOptions: {
    dir: 'persist',
    stringify: JSON.stringify,
    parse: JSON.parse,
    continuous: true,
    interval: false,
    ttl: false,
    expiredInterval: 3 * 60 * 1000
  },
  ratesPath: "./persistent/rates.json",
  transPath: "./persistent/transactions.json",
  skuPath: "./persistent/sku.json",
  currency: "EUR",
  exp: "2"
}
module.exports = config;
