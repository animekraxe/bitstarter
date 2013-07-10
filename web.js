var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var filestring = fs.readFileSync('index.html').toString();

console.log(filestring);

app.get('/', function(request, response) {
  response.send(filestring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

