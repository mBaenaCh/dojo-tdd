let secret = '';

function solveCode(a){
    let result='';
    let aux = '';
    //setSecret(s);
    
    for (let i = 0; i < this.secret.length ; i++){

        if (a[i] === this.secret[i]){
            result+='X';
        } else if(this.secret.includes(a[i])){
            aux+='_';
        }
    }

    result+=aux;
    return result;
}

function setSecret (s){
    this.secret = s;
}

function getSecret (){
    return this.secret;
}

module.exports.solveCode = solveCode;
module.exports.setSecret = setSecret;