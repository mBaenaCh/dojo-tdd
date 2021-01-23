var secret = '4139';

function solveCode(a, s){
    let result='';
    let aux = '';
    setSecret(s);
    
    for (let i = 0; i < getSecret().length ; i++){

        if (a[i] === getSecret()[i]){
            result+='X';
        } else if(getSecret().includes(a[i])){
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

module.exports.solveCode = {solveCode,setSecret};