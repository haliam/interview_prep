module.exports = (res,storage,clave,conf) => {
  let json = storage.getItemSync(clave);
  if(typeof(json) === 'undefined'){
    res.send(JSON.stringify(conf.messages.NotFoundMessage));
  } else {
    res.send(json);
  }
}
