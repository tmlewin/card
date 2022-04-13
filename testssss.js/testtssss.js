// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.


// Example 1:


// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]


// Example 2:


// Input: n = 1
// Output: [[1]]


// Constraints:


// 1 <= n <= 20


// Solution:


// 1.
// Time complexity: O(n^2)
// Space complexity: O(n^2)
var generateMatrix = function(n) {
    let matrix = [];
    for(let i = 0; i < n; i++) {
        matrix[i] = [];
        for(let j = 0; j < n; j++) {
            matrix[i][j] = 0;
        }
    }
    let count = 1;
    let row = 0;
    let col = 0;
    let maxRow = n - 1;
    let maxCol = n - 1;
    while(row <= maxRow && col <= maxCol) {
        for(let i = col; i <= maxCol; i++) {
            matrix[row][i] = count;
            count++;
        }
        row++;
        for(let i = row; i <= maxRow; i++) {
            matrix[i][maxCol] = count;
            count++;
        }
        maxCol--;
        for(let i = maxCol; i >= col; i--) {
            matrix[maxRow][i] = count;
            count++;
        }
        maxRow--;
        for(let i = maxRow; i >= row; i--) {
            matrix[i][col] = count;
            count++;
        }
        col++;
    }
    return matrix;
};


// 2.


 






