var express = require('express');
var app = express();

app.get('/', function(req, res){
  var date = new Date();
  //var hora = date.getHours() +":"+date.getMinutes() +":"+date.getSeconds();
  res.send(date);
})

app.listen(process.env.PORT, function(){
  console.log("Servidor corriendo");
})
