// create function to solve extraLongFactorials problkem .HackerRank


function extraLongFactorials(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    console.log(factorial);
}


extraLongFactorials(25);