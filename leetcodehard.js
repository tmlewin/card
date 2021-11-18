// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
// Example 4:

// Input: s = "aab", p = "c*a*b"
// Output: true
// Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
// Example 5:

// Input: s = "mississippi", p = "mis*is*p*."
// Output: false
 

// Constraints:

// 1 <= s.length <= 20
// 1 <= p.length <= 30
// s contains only lowercase English letters.
// p contains only lowercase English letters, '.', and '*'.
// It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

// var isMatch =
//     function(s, p) {
//         let dp = Array(s.length + 1).fill(null).map(() => Array(p.length + 1).fill(false));
//         dp[0][0] = true;
//         for (let i = 1; i <= p.length; i++) {
//             if (p[i - 1] === '*') dp[0][i] = dp[0][i - 2];
//         }
//         for (let i = 1; i <= s.length; i++) {
//             for (let j = 1; j <= p.length; j++) {
//                 if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) dp[i][j] = dp[i - 1][j - 1];
//                 else if (p[j - 1] === '*') {
//                     if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) dp[i][j] = dp[i - 1][j] || dp[i][j - 2];
//                     else dp[i][j] = dp[i][j - 2];
//                 }
//             }
//         }
//         return dp[s.length][p.length];

// }

 












    
// console.log(isMatch('aa', 'a'))





// function plusMinus(arr,num) {
//     let pos = 0;
//     let neg = 0;
//     let zero = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) pos++;
//         else if (arr[i] < 0) neg++;
//         else zero++;
//     }
//     console.log((pos / num).toFixed(6));
//     console.log((neg / num).toFixed(6));
//     console.log((zero / num).toFixed(6));
 
// }

// plusMinus([-4, 3, -9, 0, 4, 1],6)


// create a function for anagrams that takes in two strings and returns true if they are anagrams and false if they are not


// create a merge sort function that takes in an array and returns a sorted array

// fizzbuzz


//  function fizzBuzz(n) {
//     let arr = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) arr.push('FizzBuzz');
//         else if (i % 3 === 0) arr.push('Fizz');
//         else if (i % 5 === 0) arr.push('Buzz');
//         else arr.push(i);
//     }
//     return arr;

//     }


// console.log(fizzBuzz(15))

// create a random forest classification model function that takes in an array of objects and returns a classification model that can be used to predict the class of an object


//  function randomForestClassifier(arr) {
//     let classifier = {};
//     let classArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!classArr.includes(arr[i].class)) classArr.push(arr[i].class);
//     }
//     for (let i = 0; i < classArr.length; i++) {
//         classifier[classArr[i]] = {};
//         for (let j = 0; j < arr.length; j++) {
//             if (!classifier[classArr[i]][arr[j].feature]) classifier[classArr[i]][arr[j].feature] = 0;
//             classifier[classArr[i]][arr[j].feature] += 1;
//         }
//     }
//     return classifier;
// }


//  console.log(randomForestClassifier([{      // {'class': 'A', 'feature': 'a'}
//     'class': 'A',
//     'feature': 'a'
// }, {

//     'class': 'A',
//     'feature': 'b'
// }, {
//     'class': 'A',
//     'feature': 'c'
// }, {
//     'class': 'B',
//     'feature': 'a'
// }, {
//     'class': 'B',
//     'feature': 'b'
// }, {
//     'class': 'B',
//     'feature': 'c'
// }, {
//     'class': 'C',
//     'feature': 'a'
// }, {
//     'class': 'C',
//     'feature': 'b'
// }, {
//     'class': 'C',
//     'feature': 'c'
// }]))


// create a fizzbuzz function   that takes in a number and returns a string that is the fizzbuzz of that number 


//  function fizzBuzz(n) {
//     let arr = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) arr.push('FizzBuzz');
//         else if (i % 3 === 0) arr.push('Fizz');
//         else if (i % 5 === 0) arr.push('Buzz');
//         else arr.push(i);
//     }
//     return arr;


//     }


//     console.log(fizzBuzz(15))







// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         "outerArg = " + outerArg + "\n" +
//         "innerArg = " + innerArg + "\n" +
//         "outerVar = " + outerVar + "\n" +
//         "innerVar = " + innerVar + "\n" +
//         "globalVar = " + globalVar);
    
//     })(456);
// })(123);








// function isValidSubsequence(array, sequence) {
//     let i = 0;
//     let j = 0;
//     while (i < array.length && j < sequence.length) {
//         if (array[i] === sequence[j]) {
//             j++;
//         }
//         i++;
//     }
//     return j === sequence.length;
// }


// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))




//  Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.


 function longestPalindrome(s) {
    let longest = '';
    let current = '';
    for (let i = 0; i < s.length; i++) {
        current = helper(s, i, i);
        if (current.length > longest.length) longest = current;
        current = helper(s, i, i + 1);
        if (current.length > longest.length) longest = current;
    }
    return longest;
}


function helper(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.slice(left + 1, right);
}


console.log(longestPalindrome('babad'))
















































 






   















