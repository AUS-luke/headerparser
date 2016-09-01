const express = require('express');

const app = express();
const port = process.env.PORT || 8080;


app.use('/api/whoami', (req, res) => {
  var software = req.headers['user-agent'].match(/\([a-z\d.\s;#@&]*\)/i).toString().match(/[a-z\d.\s_;\-:#@&]*/i);
  var language = req.headers['accept-language'].match(/^[a-z-]+/gi).toString();

  var obj = {
    ipaddress: req.connection.remoteAddress,
    language: language,
    software: software
  };
  res.send(obj);
  res.end();
});


app.listen(port);
