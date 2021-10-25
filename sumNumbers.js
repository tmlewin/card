function sum(n) {
    if (n == 0) {
        return 0 // exit condition
    } else {
        return n  + sum(n -1) // or do sum(--n) // return value plus result of recursive call

    }  
    
}

console.log(sum(3));
