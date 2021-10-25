//Test Function which is a skeleton for the main method

// function sumPrimeNumbers(num) {

//     for (var i = 2; i <= num; i++){
//         console.log(i);
      
        
//     }
// }
// sumPrimeNumbers(10)




// --- We need to breakdown the solution into 2 functions  function to chedk for prime numbers and funmction to sum prime numbers

// Function to check for prime numnbers
function validatePrime(input) {

    for (var j = 2; j < input; j++){
        // We can check for prime numbers using the modulos operator
        if(input % j === 0){
            // so if the remainder of the value  vs the loop value equals 0 it returns false else it breaks out of the loop[ and returns the value of the prime number
            return false;

        }

    }
    return true
}
let out = validatePrime(137)
console.log(out)


// Function to sum Prime numbers and funmction
// function sumPrimeNumbers(num){
//     var sum = 0
//       for (var i = 2; i <= num; i++){
//          // console.log(i)
//     // calling the validate function in the conditional to check for [prime nhumbers]

//         if(validatePrime(i)){
//             sum += i
//          }
//      }
//      return sum

// }

let out = validatePrime(137)
console.log(out)