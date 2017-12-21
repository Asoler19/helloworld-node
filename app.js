// 8)Create a github repository named helloworld-node. Create a node server which has one route only. The route responds with the text "hello world" when it receives a get request to the default route ('http://servername:port/').

var express = require('express');
var app = express();

// Routes
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);