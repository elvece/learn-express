// var http = require('http');

// // within the create sever callback, we define the behavior of the server
// // anytime a request comes in, it hits the callback below
// var server = http.createServer(function(request, response){
//   // http status code -  200 = OK
//   // headers are like the address, stamp, return address
//   // response is used to communicate back to the client
//   response.writeHead(200, {'Content-Type': 'text/html'});
//   response.end('<h1>Hello, World</h1>');
// });

// server.listen(3000);

//solve with readFileSync() - synchronous
var fs = require("fs");
var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
var split = str.split('\n').length;
console.log(split -2);

//solve with with readFile() - asynchronous (allows multiple happendings)!
var callback = fs.readFile(process.argv[2], function(error, data){
  if (error) {
    console.log(error);
  }
  console.log(data);
  var result = data.toString().split('\n').length;
  console.log(result - 2);
});

