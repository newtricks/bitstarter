var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var readFile = function(filename) {
    return fs.readFileSync(filename).toString();
};

app.get('/', function(request, response) {
  response.send(readFile('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
