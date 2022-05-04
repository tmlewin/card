//create a function that Strip whitespace from a string in-place
function strip(str) {
    var i = 0;
    while (i < str.length) {
        if (str[i] === " ") {
        str = str.slice(0, i) + str.slice(i + 1);
        } else {
        i++;
        }
    }
    return str;
    }


    console.log(strip("h  e ll  o "));

// Time Complexity: O(n)
// Space Complexity: O(1)




// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.


// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


function reverseWords(s) {
    var arr = s.split(" ");
    var result = "";
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== "") {
            result += arr[i] + " ";
        }
    }
    return result.slice(0, result.length - 1);
}

console.log(reverseWords("a good   example"));



// Remove duplicate chars from a string ("AAA BBB" -> "A B")


function removeDuplicateChars(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (result.indexOf(str[i]) === -1) {
            result += str[i];
        }
    }
    return result;
}


console.log(removeDuplicateChars("AAA BBB"));



// Remove duplicate chars from a string ("AAA BBB" -> "A B") using set


function removeDuplicateChars(str) {
    var result = "";
    var set = new Set();
    for (var i = 0; i < str.length; i++) {
        if (!set.has(str[i])) {
            result += str[i];
            set.add(str[i]);
        }
    }
    return result;
}


console.log(removeDuplicateChars("AAA BBB"));



//Find the first non-repeating character in a string


function firstNonRepeatingChar(str) {
    var set = new Set();
    for (var i = 0; i < str.length; i++) {
        if (!set.has(str[i])) {
            set.add(str[i]);
        } else {
            set.delete(str[i]);
        }
    }
    return set.values().next().value;
}
console.log(firstNonRepeatingChar("ABCA"));
   















