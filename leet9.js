// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

var merge = function(intervals) {
    let merged = [];
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length; i++) {
        if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
            merged.push(intervals[i]);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
        }
    }
    return merged;
};


console.log(merge([[1,3],[2,6],[8,10],[15,18]]));