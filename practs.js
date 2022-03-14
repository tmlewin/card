// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


// Solution 1:
// Time: O(n)
// Space: O(n)


var isValid = function(s) {
    let stack = [];
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] in map) {
        if (stack.length === 0 || stack.pop() !== map[s[i]]) {
            return false;
        }
        } else {
        stack.push(s[i]);
        }
    }
    return stack.length === 0;
    };


    console.log(isValid("()[]{}"));