var secret = '4139';

function solveCode(a){
    let result='';
    let aux = '';

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

module.exports.solveCode = solveCode;