// Find the minimum and maximum element in an array
//  - The minimum and maximum elements are not necessarily integers.
//  - If there are multiple minimum or maximum elements, you may return any one of them.
//  - Your solution should be in logarithmic time complexity.
//  - Example 1:
//  - Input: nums = [1,2,3,4,5,6,7,8,9,10]
//  - Output: [1,10]
//  - Example 2:
//  - Input: nums = [1,2]
//  - Output: [1,2]
//  - Example 3:
//  - Input: nums = [1]
//  - Output: [1,1]
//  - Constraints:
//  - 0 <= nums.length <= 10^5
//  - -10^9 <= nums[i] <= 10^9


var findMinMax = function(nums) {
    let min = nums[0];
    let max = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < min) {
            min = nums[i];
        }
        if(nums[i] > max) {
            max = nums[i];
        }
    }
    return [min, max];
}










