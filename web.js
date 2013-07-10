var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  var buffer = new Buffer(100);
  buffer = fs.readFileSync("index.html");
  var string = buffer.toString('utf8');

  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
