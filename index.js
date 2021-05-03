const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Olá, seja bem vindo, Josino. <br/> Para acessar meu currículo digite:<br/> localhost:3000/tais_santana.html');
  });

app.use(express.static('public'));

app.listen(3000,'0.0.0.0', function(){
    console.log('Servidor iniciado.');
});


/*

*/