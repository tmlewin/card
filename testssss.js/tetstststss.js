const foo = (arr) => {
    // created an empty array that would store the result
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        // using modulus to chedck for even numbers
        if(i % 2 === 0){
            // the icremented value is stored in the array
            newArr.push(arr[i] + 1)
        } else {
            // in the else the decremented value is then stored using the push() function
            newArr.push(arr[i] - 1)
        }
    }
    return newArr
}


console.log(foo([10, 10, 10, 10, 10]))