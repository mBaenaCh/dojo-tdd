const codeBreaker = require('./codeBreaker');

var express = require("express");
var app = express();
app.listen(3001, () => {
 console.log("Server running on port 3001");
});

//1st endpoint
app.get('/solver', function (req, res) {
    res.send(codeBreaker.solveCode('4139'));
});

//2nd endpoint
app.post('/setSecret', function(req,result){

});