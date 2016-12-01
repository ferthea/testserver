var express = require('express');
var app = express();

app.get('/', function(req, res){
  var date = new Date();
  //var hora = date.getHours() +":"+date.getMinutes() +":"+date.getSeconds();
  res.send(date);
})

app.listen(8080, function(){
  console.log("Servidor corriendo");
})
