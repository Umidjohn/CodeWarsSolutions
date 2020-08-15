
// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e

function expressionMatter(a, b, c) {
    let br1 = a * (b + c);
    let br2 = a * b * c;
    let br3 = a + b * c;
    let br4 = (a + b) * c;
    if ( a == 1 && c == 1 ) return a + b + c;
    if ( br1 >= br2 && br1 >= br3 && br1 >= br4) return br1;
    if ( br2 >= br1 && br2 >= br3 && br2 >= br4) return br2;
    if ( br3 >= br1 && br3 >= br2 && br3 >= br4) return br3;
    if ( br4 >= br1 && br4 >= br2 && br4 >= br3) return br4;
}

