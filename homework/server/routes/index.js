var express = require('express');
var router = express.Router();
var http = require('http');

router.get('/', function(req, res, next) {
  var arr = [];
  http.get('http://omdbapi.com/?i=tt0241527', function(response){
    response.setEncoding().on('data', function(data){
      arr.push(data);
      res.render('index', { title: arr });
    });
  });
});

module.exports = router;
