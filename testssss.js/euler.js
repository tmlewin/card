// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// var largestPrimeFactor = function(num) {
//       let largest = 0;
//       let i = 2;
//       while (i <= num) {
//          if (num % i === 0) {
//                largest = i;
//                num = num / i;
//          } else {
//                i++;
//          }
//       }
//       return largest;
//    };

//    console.log(largestPrimeFactor(600851475143));


// var largestPrimeFactor = function (num) {
//    let largestPrime = 0;
//    let i = 2;

//    while (i <= num)
//    {
//        if (num % i === 0){
//            largestPrime = i;
//            num = num / i;            
//        }else{
//            i++;
//        }
//    }
  
// }

// console.log(largestPrimeFactor(600851475143));

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 

// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.


// var missingNumber = function(nums) {
//     let sum = 0;
//     let i = 0;
//     while (i < nums.length) {
//         sum += nums[i];
//         i++;
//     }
//     return (nums.length * (nums.length + 1)) / 2 - sum;
// }