
There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

    You are given money in nominal value of n with 1<=n<=1500.

    Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

    Good Luck!!!
function solve(n) {
    let arr = [10,20,50,100,200,500];
    let count = 0;
    for (let i =  arr.length ; i >= 0; i--) {
        if (( n / arr[i]) >= 1 ) {
            count = count + 1;
            n = n - arr[i];
            i++;
        }
        else continue;
    }
    if (n > 0)  return -1 ;
    else return count;

}