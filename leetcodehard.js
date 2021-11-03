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









   















