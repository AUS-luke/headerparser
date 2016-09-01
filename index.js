const express = require('express');

const app = express();
const port = process.env.PORT || 8080;


app.use('/api/whoami', (req, res) => {
  console.log(['user-agent']);
  var software = req.headers['user-agent'];
  var language = req.headers['accept-language'].match(/^[a-z-]+/gi).toString();

  var obj = {
    ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    language: language,
    software: software
  };

  res.send(obj);
  res.end();


});

app.listen(port);

//.match(/\([a-z\d.\s;#@&]*\)/i).toString().replace(/[{()}]/g, '');