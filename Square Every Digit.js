
function squareDigits(num){
    let str = num + '';
    let str2 = '';
    let x = 1;
    for (let i = 0; i < str.length; i++ ){
        x = +str[i] * +str[i] ;
        str2 = str2 + x;
    }
    return +str2;
}

