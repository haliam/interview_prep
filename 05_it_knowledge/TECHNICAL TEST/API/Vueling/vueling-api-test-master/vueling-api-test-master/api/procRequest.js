const request = require('request');
const conf = require('./config');
const sendPersistData = require('./sendPersistData');

module.exports = (req,res,app,storage,clave) => {
  request(conf.getOpts[clave], (error,response,body) => {
    if (error) {
      console.log(conf.messages.remoteSvrNA + error.code);
      sendPersistData(res,storage,clave,conf);
    } else {
      console.log(conf.messages.responseCode + response.statusCode);
      if (response.statusCode === 200) {
        let json = JSON.parse(body);
        storage.setItemSync(clave,json);
        res.send(json);
      } else {
        console.log(conf.messages.badResponseCode);
        sendPersistData(res,storage,clave,conf);
      }
    }
  });
}
