// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.


// Example:


// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:


// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


//   2.
//   Time complexity: O(n)
//   Space complexity: O(1)
 var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(sum > max) {
            max = sum;
        }
        if(sum < 0) {
            sum = 0;
        }
    }
    return max;
};




 