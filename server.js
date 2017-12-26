var lepat = __dirname
const path = require('path');
const express = require('express');
const app = express();

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
app.get('/', function(req, res) {

  res.render(lepat + '/accueil.html', {
    
  });

});

app.get('/fr_FR/doc', function(req, res){
  res.render(lepat + '/Documentation/docfr.html', {
    
  });
})



app.use(function(req, res, next){
  res.setHeader('Content-Type', 'text/plain');
  res.send(404, 'Page introuvable !');
});


app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);
