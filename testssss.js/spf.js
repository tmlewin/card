// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
// The length of a clear path is the number of visited cells of this path.

var shortestPathBinaryMatrix = function(grid) {
    if(grid[0][0] === 1 || grid[grid.length-1][grid[0].length-1] === 1){
        return -1
    }
    let queue = []
    queue.push([0,0])
    let visited = new Set()
    visited.add(0)
    let count = 0
    while(queue.length > 0){
        let size = queue.length
        for(let i = 0; i < size; i++){
            let [x,y] = queue.shift()
            if(x === grid.length-1 && y === grid[0].length-1){
                return count+1
            }
            if(x-1 >= 0 && y-1 >= 0 && !visited.has(x-1+'-'+y-1) && grid[x-1][y-1] === 0){
                queue.push([x-1,y-1])
                visited.add(x-1+'-'+y-1)
            }
            if(x-1 >= 0 && !visited.has(x-1+'-'+y) && grid[x-1][y] === 0){
                queue.push([x-1,y])
                visited.add(x-1+'-'+y)
            }
            if(x-1 >= 0 && y+1 < grid[0].length && !visited.has(x-1+'-'+y+1) && grid[x-1][y+1] === 0){
                queue.push([x-1,y+1])
                visited.add(x-1+'-'+y+1)
            }
            if(y-1 >= 0 && !visited.has(x+'-'+y-1) && grid[x][y-1] === 0){
                queue.push([x,y-1])
                visited.add(x+'-'+y-1)
            }
            if(y+1 < grid[0].length && !visited.has(x+'-'+y+1) && grid[x][y+1] === 0){
                queue.push([x,y+1])
                visited.add(x+'-'+y+1)
            }
            if(x+1 < grid.length && y-1 >= 0 && !visited.has(x+1+'-'+y-1) && grid[x+1][y-1] === 0){
                queue.push([x+1,y-1])
                visited.add(x+1+'-'+y-1)
            }
            if(x+1 < grid.length && !visited.has(x+1+'-'+y) && grid[x+1][y] === 0){
                queue.push([x+1,y])
                visited.add(x+1+'-'+y)
            }
            if(x+1 < grid.length && y+1 < grid[0].length && !visited.has(x+1+'-'+y+1) && grid[x+1][y+1] === 0){
                queue.push([x+1,y+1])
                visited.add(x+1+'-'+y+1)
            }
        }
        count++
    }
    return -1
};


