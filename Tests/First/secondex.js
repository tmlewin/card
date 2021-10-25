/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'

*/

const bracketCombination = ['()', '()[]{}', '(]', '([)]', '{[]}']

const mySolution = (bracketCombination) => {
    let arr = []
    //Looping thorugh the array aand using the index of method to indetify theelement as well as index position of that lement in the array

    for(let syntax of bracketCombination) {
        let bracketsIndex = bracketCombination.indexOf(syntax)
       // console.log(bracketsIndex)
        
    // if bracket is an opening bracket
        if(bracketsIndex % 2 === 0) {
          // push the closing bracket onto the the stack
          arr.push(bracketsIndex + 1)
          
        } else {
          //Array.pop() removes the most recent addition from our array, changing the length of the array, and returns the  removed element, allowing us to reference that element if needed.
          if(arr.pop() !== bracketsIndex) {
            return false;
          }
        }
      }
      return arr.length === 0
    }

console.log(mySolution('(]'))

//'([]{})[{}[{}]]{(([]))}'
