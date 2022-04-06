// create for  function with container with most water 


function maxArea(height) {
    var maxArea = 0;
    var left = 0;
    var right = height.length - 1;
    while (left < right) {
        var area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}


