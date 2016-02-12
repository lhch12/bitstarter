var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";
var logger = require('morgan');
var http = require('http');

var app = express();
app.use(logger('combined'));

// var server = http.createServer(app);
// server.listen(8080);

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});
