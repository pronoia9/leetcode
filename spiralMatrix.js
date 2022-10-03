// *********************************************   54. Spiral Matrix   ******************************************** //
// Given an m x n matrix, return all elements of the matrix in spiral order.
// https://leetcode.com/problems/spiral-matrix/
//
/** @param {number[][]} matrix **/ /** @return {number[]} **/
//
// O(m*n) time, O(m*n) space
// Runtime:         89 ms, faster than 54.33%   |     77 ms, faster than 72.25%   |     61 ms, faster than 94.62%
// Memory Usage:  41.9 MB, less than   46.54%   |   41.9 MB, less than   46.54%   |   41.2 MB, less than   99.40%
const spiralOrder = (matrix) => {
  const res = [];
  let left = 0, right = matrix[0].length, top = 0, bottom = matrix.length;
  while (left < right && top < bottom) {
    // get every val in the top row
    for (let i = left; i < right; i++)  res.push(matrix[top][i]);
    top++;
    // get every val in the right col
    for (let i = top; i < bottom; i++) res.push(matrix[i][right - 1]);
    right--;
    if (!(left < right && top < bottom)) break;
    // get every val in the bottom row
    for (let i = right - 1; i > left - 1; i--) res.push(matrix[bottom - 1][i]);
    bottom--;
    // get every val in the left col
    for (let i = bottom - 1; i > top - 1; i--) res.push(matrix[i][left]);
    left++;
  }
  return res;
};
// **************************************************************************************************************** //

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);

// Example 1:
// https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100