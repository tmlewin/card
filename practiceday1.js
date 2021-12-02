// function for balanced brackets and parenthesis in a string


// function balancedBrackets(str) {
//     var stack = [];
//     var brackets = {
//         '{': '}',
//         '[': ']',
//         '(': ')'
//     };
//     for (var i = 0; i < str.length; i++) {
//         var ch = str[i];
//         if (brackets[ch]) {
//             stack.push(ch);
//         } else if (brackets[stack.pop()] !== ch) {
//             return false;
//         }
//     }
//     return stack.length === 0;
// }

// console.log(balancedBrackets('{[()]}'));
// console.log(balancedBrackets('{[(])}'));


// create a unit test function for balancedBrackets function
// function testBalancedBrackets(str, expected) {
//     var result = balancedBrackets(str);
//     if (result === expected) {
//         console.log('passed');
//     } else {
//         console.log('failed');
//     }
// }


// testBalancedBrackets('{[()]}', true);
// testBalancedBrackets('{[(])}', false);



// let arrs = [1,3,6,14,20,21,65,75,82,102,130,145,175]
// let value = 145


// const search = (arr, value)=>{
//     let start = 0
//     let end = arr.length - 1

//     while(start <= end){
//     let median = Math.round((start + end) /2)

//     if(arr[median] == value){
//     return `The value at an index of ${median} is equal to ${arr[median]}`
//     }else if(arr[median] < value){
//     start = median + 1
//     }else{

//     end = median - 1

//     }
// }
//     return false
    
// }


// console.log(search(arrs,value))



// class Stack {
//     constructor(element) {
//       this.element = element;
//       this.item = [];
//       this.size = 0;
//     }
//     // create push
//     push(element) {
//       this.item[this.size] = element;
//       this.size = this.size + 1;
//     }
    

//        unshift(element){
//         for(let i = this.item.length - 1; i >= 0; i--){
//             this.item[i + 1] = this.item[i]

            
//         }
//         this.item[0] = element
//         this.size++

//     }
//     print() {
//       console.log(this.item);
//     }
//   }
  
//   let lst = new Stack();
//   lst.push('How');
//   lst.push('are');
//   lst.push('you');
//   lst.unshift('thanks');
//   lst.print();
  

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.


// function minMaxSum(arr) {
//     let min = 0;
//     let max = 0;
//     let sum = 0;
//     for(let i= 0; i< arr.length; i++){
//         sum = sum + arr[i]

//     }
//     min = sum  - Math.max(...arr)
//     max = sum - Math.min(...arr)
//     console.log(min, max)
// }


// minMaxSum([1, 2, 3, 4, 5])



// function miniMaxSum(arr) {
//     // Write your code here
//    let minSum;
//    let maxSum;
//    let sum;
   
//    // Create a for loop to figure out what index to exclude
//    for(let i =0; i < arr.length; i ++){
//        // i tells us what index to exclude
//        sum = 0;
//        for(let j = 0; j < arr.length; j++){
//            // if we hit the i, that means we just skip that index
//            if(i != j){
//                sum += arr[j]
//            }   
//        }
//        // initializes the maxSum and minSum
//        if( i == 0){
//            minSum = sum;
//            maxSum = sum;
//        }
       
//         // Sets the sum to minSum/maxSum
//        if(sum < minSum) {
//            minSum = sum;
//        }
//        if(sum > maxSum){
//            maxSum = sum
//        }
//    }
   
//    console.log(`${minSum} ${maxSum}`);
// }

// miniMaxSum([1, 2, 3, 4, 5])






// calculate the diagonal difference between two arrays and return the absolute difference
//  function diagonalDifference(arr) {
//     let leftToRight = 0;
//     let rightToLeft = 0;
//     for(let i = 0; i < arr.length; i++){
//         // console.log(arr[i][i])
//         leftToRight += arr[i][i];
//         // console.log('we are testing '+ leftToRight)
//         rightToLeft += arr[i][arr.length - 1 - i];
//     }
//     return Math.abs(leftToRight - rightToLeft);
// }


// console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));


// Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false
// Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
// Output: true
// Explanation:
// In the above grid, the diagonals are:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
// In each diagonal all elements are the same, so the answer is True.
        
// const  isToeplitzMatrix = function(matrix) {
//     for(let i = 0; i < matrix.length; i++){
//         for(let j = 0; j < matrix[i].length; j++){
//             if(i != 0 && j != 0){
//                 if(matrix[i][j] != matrix[i-1][j-1]){
//                     return false
//                 }
//             }
//         }
//     }
//     return true
    
// }


// arr = [9,2,3,3,5,5,5,1,2,8,8,0]


// const dup = (arr) =>{
//     let newArr = []
//     for(let i = 0; i < arr.length; i++){
//         if(!newArr.includes(arr[i])){
//             newArr.push(arr[i])
//         }

//     }
//     return newArr
// }


// console.log(dup(arr))
// console.log(arr)


// function for Trapping Rain Water


//  function trap(arr) {
//     let left = 0;

//     let right = arr.length - 1;
//     let leftMax = 0;
//     let rightMax = 0;
//     let total = 0;
//     while(left < right){
//         if(arr[left] < arr[right]){
//             if(arr[left] > leftMax){
//                 leftMax = arr[left]
//             }else{
//                 total += leftMax - arr[left]
//             }
//             left++
//         }else{
//             if(arr[right] > rightMax){
//                 rightMax = arr[right]
//             }else{
//                 total += rightMax - arr[right]
//             }
//             right--
//         }
//     }   
//     return total
// }


// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))


// We have a setup with 20 API servers in parallel that require 20 seconds to handle a total of 20 requests. How long would it take to handle a total of 50 requests if we increase the setup to 50 API servers?



// Our infrastructure has been infected with a virus that doubles the number of infected machines every hour. At its current rate, given the total number of machines, all machines are expected to be infected 16 hours after the initial infection. How many hours should it therefore take for half of the machines to be infected?  (Hint: you can use the fact that the number of infected machines is equal to the number of infected machines after 16 hours.)   (Hint: you can use the fact that the number of infected machines is equal to the number of infected machines after 16 hours.)        

















 
     



























// function miniMaxSum(arr) {
//     let min = 0;
//     let max = 0;
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     min = sum - Math.max(...arr);
//     max = sum - Math.min(...arr);
//     console.log(min, max);
// }


// miniMaxSum([1, 3, 5, 7, 9]);


    

























































































































































































































































































