const codeBreaker = require('./codeBreaker');

var express = require("express");
var app = express();

//1st endpoint
app.get('/solver/:numero', function (req, res) {
    var numero = req.params.numero;
    let result = codeBreaker.solveCode(numero);
    console.log(result);
    res.send(result);
});

//2nd endpoint
app.get('/setSecret/:secret', function(req,res){
    let numero = req.params.secret;
    codeBreaker.setSecret(numero)
    return res.json ({
        secret: numero
    });
});

module.exports = app;