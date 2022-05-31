// Given an array of integers, write a function that returns true if there is a triplet (a, b, c) that satisfies a2 + b2 = c2.

// Example: 

// Input: arr[] = {3, 1, 4, 6, 5} 
// Output: True 
// There is a Pythagorean triplet (3, 4, 5).

// Input: arr[] = {10, 4, 6, 12, 5} 
// Output: False 
// There is no Pythagorean triplet. 


function isTriplet (ar, n){
    let i = 0;
    let j = 1;
    let k = 2;
    
    while (i < n){
        while (j < n){
            while (k < n){
                if (ar[i] ** 2 + ar[j] ** 2 === ar[k] ** 2){
                    return true;
                }else{
                    k++;
                }
            }
            k = i + 1;
            j++;
        }
        j = 0;
        i++;
    }
    return false;
}

let arr = [10, 4, 6, 12, 5]
let n = arr.length;

 console.log(isTriplet(arr, n));


 // Time Complexity: O(n^2)
// Space Complexity: O(1)




