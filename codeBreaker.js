var secret = '4139';

function solveCode(a){
    var result='';
    var aux = '';

    for (let i = 0; secret.length ; i++){

        if (a[i] === secret[i]){
            result += 'X';
        } else if(secret.includes(a[i])){
            aux += '_';
        }
    }

    result+=aux;
    return result;
}

module.exports.solveCode = solveCode;