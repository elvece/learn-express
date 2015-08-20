// requirements
var express = require('express'),
  app = express();

// a "GET" request to "/" will run the function below
app.get("/", function (request, response) {
  // send back the response: 'Hello World'
  response.send("Hello World");
});

// start the server
app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});

var vegetables = [
  "Carrots",
  "Cucumber",
  "Peas"
   ];

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.get("/vegetables", function (req, res) {
  //send all the veggies
  res.send(vegetables.join(", "));
});

app.listen(3000, function () {
  console.log("Go to localhost:3000/");
});

app.get("/hello/:name", function (req, res) {
  res.send( "Hello, " + req.params.name );
});

app.get("/hi", function (req, res) {
  var name = req.query.name;
  res.send("Hello, " + name);
});

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  // use res.render
  res.render('index', {name: "Elie"});
});






