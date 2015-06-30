var express = require('express');


var app = express();

app.route('/')
  .get(function (req, res) {
    res.send('Hi from Express');
  });

app.listen(3000);
