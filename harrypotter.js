var express = require('express');
var router = express.Router();
var http = require('http');


router.get('/', function(request, response, next) {
  var arr = [];
  http.get('http://omdbapi.com/?i=tt0241527', function(response){
    reponse.setEncoding().on('data', function(data){
      arr.push(data);
      response.render('index', {});
    })
  })

});

// within the create sever callback, we define the behavior of the server
// anytime a request comes in, it hits the callback below
var server = http.createServer(function(req, res){
  // http status code -  200 = OK
  // headers are like the address, stamp, return address
  // res is used to communicate back to the client
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello, World</h1>');
});

server.listen(3000);
