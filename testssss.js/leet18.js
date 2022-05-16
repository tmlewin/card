// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


 var isIsomorphic = function(s, t) {
        let map = new Map()
        let map2 = new Map()
        for(let i = 0; i < s.length; i++){
            if(!map.has(s[i])){
                map.set(s[i], t[i])
                map2.set(t[i], s[i])
            }else{
                if(map.get(s[i]) !== t[i]){
                    return false
                }
            }
        }
        for(let i = 0; i < t.length; i++){
            if(!map2.has(t[i])){
                return false
            }else{
                if(map2.get(t[i]) !== s[i]){
                    return false
                }
            }
        }
        return true
    }





