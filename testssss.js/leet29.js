// k largest(or smallest) elements in an array

// Difficulty Level : Medium
// Last Updated : 18 May, 2022
 
// Question: Write an efficient program for printing k largest elements in an array. Elements in an array can be in any order.
// For example, if the given array is [1, 23, 12, 9, 30, 2, 50] and you are asked for the largest 3 elements i.e., k = 3 then your program should print 50, 30, and 23.


// Solution:
// 1. Sort the array.
// 2. Print the last 3 elements.
// 3. Sort the array in descending order.
// 4. Print the first 3 elements.
// 5. Sort the array in ascending order.
// 6. Print the last 3 elements.
// 7. Sort the array in descending order.
// 8. Print the first 3 elements.


// Time: O(n log n)
// Space: O(1)




function kLargest(arr, n, k) {
    let result = [];
    arr.sort((a, b) => b - a);
    for (let i = 0; i < k; i++) {
        result.push(arr[i]);
    }
    return result;
}


// driver program
let arr = [1, 23, 12, 9, 30, 2, 50];
let k = 3;
let n = arr.length;
console.log(kLargest(arr, n, k));


// Time: O(n log n)
// Space: O(1)


