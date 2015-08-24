var express = require('express');
var router = express.Router();
var http = require('http');
var arr = [];

router.get('/', function(req, res, next) {
  //first request
  http.get('http://omdbapi.com/?i=tt0241527', function(res){
    res.setEncoding('utf8');
    res.on('data', function(data){
      arr.push(data);
    });
    //second request
    res.on('end', function(){
      http.get('http://omdbapi.com/?i=tt0295297', function(response){
        response.setEncoding('utf8');
        response.on('data', function(data){
          arr.push(data);
      res.render('index', {
        title: "Harry Potter Homework",
        info: data
      });
        });
      });
    });
  });
  //rendering
});


module.exports = router;

