
var getSkyline = function(buildings) {
    let xx = new Set();
    buildings.forEach(b => {
        xx.add(b[0]);
        xx.add(b[1]);
    });
    let xxx = Array.from(xx.keys()).sort((a,b) => a - b);
    let rtn = [];
    xxx.forEach(x => {
        let b = buildings.filter(b => b[0] === x || b[0] < x && b[1] > x);
        let max = 0;
        for(let i = 0; i < b.length; i++) {
            max = Math.max(max, b[i][2]);
        }
        rtn.push([x, max]);
    });

    for(let i = 1; i < rtn.length; i++) {
        const prv = rtn[i-1];
        const cur = rtn[i];
        if (prv[1] === cur[1]) {
            rtn.splice(i, 1);
            i--;
        }
    }

    return rtn;
};


// TimeComplexity: O(n)
// SpaceComplexity: O(n)


// solution 2

// [JavaScript] Easy and Straightforward with picture illustrations
// 29
// lMiaoj's avatar
// lMiaoj
// 880
// Last Edit: October 3, 2019 12:18 AM

// 736 VIEWS

// Inspired by @oscartsai 's solution , I came up with this solution.

// Basic Idea
// Treat all left, right positions as the candidate x-poisitons;
// For each candidate x-position, find out it's y-position by search for the highest height on top of that position;
// Determine if it's necessary to record the position by comparing the height with the previous height.


// Step 1: x-positions
// This step is very easy, use set to store all left and right
// Step 2: y-positions
// For each x-position, find out the highest height on top of it (left-exclusive, right-inclusive];
//Step 3: exclude redundant points

var getSkyline = function(buildings) {
    // store all candidate x-positions
    let cp = new Set();
    for(let [l,r,h] of buildings){
        cp.add(l);
        cp.add(r);
    }
    let cp1 = [...cp];
    cp1.sort((a,b)=>a-b);
    
    // find the height for every candidate x-position
    let n = buildings.length;
    let res = [[-1,0]];
    for(let p of cp1){
        let i = 0;
        let height = 0;
        while(i<n && buildings[i][0]<=p){
            if(buildings[i][1]>p){
                height = Math.max(height, buildings[i][2]);
            }
            i++;
        }
        if(res[res.length-1][1] === height) continue;
        res.push([p, height]);
    }
    
    return res.slice(1);
};

