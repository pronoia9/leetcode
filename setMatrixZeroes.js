// *******************************************   73. Set Matrix Zeroes   ****************************************** //
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.
// https://leetcode.com/problems/set-matrix-zeroes/
//
/** @param {number[][]} matrix **/ /** @return {void} Do not return anything, modify matrix in-place instead. **/
// O(m*n) time, O(1) space
// Runtime:        168 ms, faster than 10.61%   |    146 ms, faster than 28.80%
// Memory Usage:  44.4 MB, less than   88.90%   |   44.1 MB, less than   97.71%
const setZeroes = (matrix) => {
  const rowLen = matrix.length, colLen = matrix[0].length;
  let rowZero = false;

  // determine which rows/cols need to be zero
  for (let row = 0; row < rowLen; row++) {
    for (let col = 0; col < colLen; col++) {
      if (matrix[row][col] == 0) {
        matrix[0][col] = 0;
        if (row > 0) matrix[row][0] = 0;
        else rowZero = true;
      }
    }
  }
  // update with 0s
  for (let row = 1; row < rowLen; row++) {
    for (let col = 1; col < colLen; col++) {
      if (matrix[0][col] == 0 || matrix[row][0] == 0) matrix[row][col] = 0;
    }
  }
  // first in cols
  if (matrix[0][0] == 0) for (let row = 0; row < rowLen; row++) matrix[row][0] = 0;
  // first row
  if (rowZero) matrix[0].fill(0);

  return matrix;
};
// **************************************************************************************************************** //

// console.log(
//   setZeroes([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ])
// );
// console.log(
//   setZeroes([
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5],
//   ])
// );
console.log(
  setZeroes([
    [-4, -2147483648, 6, -7, 0],
    [-8, 6, -8, -6, 0],
    [2147483647, 2, -9, -6, -10],
  ])
);

// Example 1:
// https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Example 2:
// https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Constraints:
// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1

// Follow up:
// A straightforward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?