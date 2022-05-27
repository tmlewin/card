// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

var largestPrimeFactor = function(num) {
      let largest = 0;
      let i = 2;
      while (i <= num) {
         if (num % i === 0) {
               largest = i;
               num = num / i;
         } else {
               i++;
         }
      }
      return largest;
   };

   console.log(largestPrimeFactor(600851475143));
