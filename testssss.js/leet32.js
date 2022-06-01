// Given a binary string s and an integer k, return true if every binary code of length k is a substring of s. Otherwise, return false.

 

// Example 1:

// Input: s = "00110110", k = 2
// Output: true
// Explanation: The binary codes of length 2 are "00", "01", "10" and "11". They can be all found as substrings at indices 0, 1, 3 and 2 respectively.
// Example 2:

var hasAllCodes = function (s, k) {
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        let code = s.substring(i, i + k);
        if (code.length === k) {
        hash[code] = true;
        }
    }
    return Object.keys(hash).length === Math.pow(2, k);
    }


   








