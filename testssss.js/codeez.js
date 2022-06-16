// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

 

// Example 1:


// Input: points = [[1,1],[2,2],[3,3]]
// Output: 3
// Example 2:


// Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4
 

var maxPoints = function(points) {
    if (points.length < 2) {
        return points.length;
    }
    let max = 0;
    for (let i = 0; i < points.length; i++) {
        let map = {};
        let same = 0;
        for (let j = 0; j < points.length; j++) {
            if (i === j) {
                same++;
                continue;
            }
            let x = points[j][0] - points[i][0];
            let y = points[j][1] - points[i][1];
            let gcd1 = gcd(x, y);
            x /= gcd1;
            y /= gcd1;
            if (map[x + ',' + y]) {
                map[x + ',' + y]++;
            }
            else {
                map[x + ',' + y] = 1;
            }
        }
        let maxCount = 0;
        for (let key in map) {
            maxCount = Math.max(maxCount, map[key]);
        }
        max = Math.max(max, maxCount + same);
    }
    return max;
}


function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}


// test
console.log(maxPoints([[1,1],[2,2],[3,3]]));



