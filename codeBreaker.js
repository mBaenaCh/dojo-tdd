var secret = '';

function solveCode(a, s){
    let result='';
    let aux = '';
    secret = s;
    
    for (let i = 0; i < secret.length ; i++){

        if (a[i] === secret[i]){
            result+='X';
        } else if(secret.includes(a[i])){
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

module.exports.solveCode = solveCode,setSecret;