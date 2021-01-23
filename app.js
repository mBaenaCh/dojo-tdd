const codeBreaker = require('./codeBreaker');

var express = require("express");
var app = express();
app.listen( process.env.PORT || 3001, () => {
 console.log("Server running on port 3001");
});

//1st endpoint
app.get('/solver/:numero', function (req, res) {
    var numero = req.params.numero;
    let result = codeBreaker.solveCode(numero);
    console.log(result);
    res.send(result);
});

//2nd endpoint
app.get('/setSecret/:secret', function(req,res){
    var numero = req.params.secret;
    codeBreaker.setSecret(numero)
    res.send("El secret se ha modificado!");
});