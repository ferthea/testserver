var express = require('express');
var app = express();

var visits = 0;
var ips = [];

app.all('*.html', (req, res, next) => {
  flag = 0;
  visits++;

  for(i in ips){
    if (ips[i] == req.ip){
      flag = 1;
    }
  }
  if(flag == 0) ips.push(req.ip);
  console.log("tet")
  next();
})

app.get("/stats", (req, res) => {
  var user = req.query.usuario;
  var pass = req.query.password;
  if(user == "ADMIN" && pass == "ADMIN"){
    var stats = {
      "visits" : visits,
      "ips" : ips
    }
    res.send(JSON.stringify(stats));
  }else{
    res.send("NO TENES ACCESO");
  }
})

app.use(express.static('public'));

app.use(function (req, res, next) {
  res.status(404).send("Error 404 - Página no encontrada");
})

app.listen(process.env.PORT || 8080, function(){
  console.log("Servidor corriendo");
})
