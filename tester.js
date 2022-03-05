// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1


// Input: nums = [1,3], target = 0
// Output: -1
// Explanation: 3 doesn't exist in nums so return -1


// Input: nums = [1,3], target = 2
// Output: 1
// Explanation: 2 exists in nums and its index is 1, so return 1





const search = (nums, target) => {

    let i = 0;
    let j = nums.length - 1;
    let mid = Math.floor((i + j) / 2);
    while(i <= j){
        if(nums[mid] === target){
            return mid;
        }
        if(nums[mid] > nums[j]){
            if(nums[mid] > target && target >= nums[i]){
                j = mid - 1;
            } else {
                i = mid + 1;
            }
        } else if(nums[mid] < nums[j]){
            if(nums[mid] < target && target <= nums[j]){
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        } else {
            j--;
        }
        mid = Math.floor((i + j) / 2);
    }
    return -1;
}


console.log(search([4,5,6,7,0,1,2], 0));




























 












