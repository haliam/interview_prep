const express   = require('express'),
      app       = express(),
      storage = require('./api/storage');

require('./appConfig')(app);
require('./server')(app);
require('./routes')(app,storage);
