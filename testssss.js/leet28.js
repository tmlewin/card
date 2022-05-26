// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100


// Solution 1:
// Time: O(m*n)
// Space: O(1)
// Runtime: 68ms
// Memory Usage: 35.8MB


var spiralOrder = function(matrix) {
    if (matrix.length === 0) return [];
    let result = [];
    let row = 0;
    let col = 0;
    let rowEnd = matrix.length - 1;
    let colEnd = matrix[0].length - 1;
    while (row <= rowEnd && col <= colEnd) {
        for (let i = col; i <= colEnd; i++) {
            result.push(matrix[row][i]);
        }
        row++;
        for (let i = row; i <= rowEnd; i++) {
            result.push(matrix[i][colEnd]);
        }
        colEnd--;
        if (row > rowEnd) break;
        for (let i = colEnd; i >= col; i--) {
            result.push(matrix[rowEnd][i]);
        }
        rowEnd--;
        if (col > colEnd) break;
        for (let i = rowEnd; i >= row; i--) {
            result.push(matrix[i][col]);
        }
        col++;
    }
    return result;
}