var secret = '';

function solveCode(a){
    //console.log('Secret en el metodo solveCode', secret);
    let result='';
    let aux = '';
    
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

function setSecret(s){
    this.secret = s;
}

function getSecret(){
    return this.secret;
}

module.exports.solveCode = solveCode;
module.exports.setSecret = setSecret;
module.exports.getSecret = getSecret;