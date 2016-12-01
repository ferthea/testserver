var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile('index.html');
})

app.get('*', function(req, res){
  res.sendStatus(404);
})


app.listen(process.env.PORT || 8080, function(){
  console.log("Servidor corriendo");
})
