
var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
var db = require("./models");
// var request = require('request');
var Hashids = require('hashids');
hashids = new Hashids("this is my salt");
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', function(req, res) {
//   // you can now access the newly created task via the variable data
  res.render('index');

});



app.post('/links', function(req,res){
  var newLink = req.body.q;
  
  console.log(newLink);
  
  var hash = hashids.encode('newLink');
  console.log("hash is:" + hash);

  db.link.create({url: newLink, hash: hash }).then(function(){
   res.send("success");

 })
 });

 

app.get('/links/:id', function(req,res){
  //displays short url
});



app.get('/:hash', function(req,res){
  //takes has & redirects the user to the long url
});


















var port = 3000;
app.listen(port, function() {
  console.log("You're listening to the smooth sounds of port " + port);
});  




