
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
