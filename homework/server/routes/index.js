var express = require('express');
var router = express.Router();
var http = require('http');

router.get('/', function(request, response, next) {
  var arr = [];
  http.get('http://omdbapi.com/?i=tt0241527', function(response){
    response.setEncoding().on('data', function(data){
      arr.push(data);
    });
    response.render('index', {
      title: "Harry Potter Homework",
      info: arr
    });
  });
});


module.exports = router;

// http.get('http://omdbapi.com/?i=tt0295297', function(response){
//   response.setEncoding().on('data', function(data){
//     arr.push(data);
//   });
