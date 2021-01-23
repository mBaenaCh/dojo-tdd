const codeBreaker = require('./codeBreaker');

var express = require("express");
var app = express();

//1st endpoint: Solve a codebreaker with a given number
app.get('/solver/:numero', function (req, res) {
    var numero = req.params.numero;
    let result = codeBreaker.solveCode(numero);
    res.send(result);
});

//2nd endpoint: Set the secret before a codebreaker solve tryout
app.get('/setSecret/:secret', function(req,res){
    let numero = req.params.secret;
    codeBreaker.setSecret(numero)
    return res.json ({
        secret: numero
    });
});

module.exports = app;