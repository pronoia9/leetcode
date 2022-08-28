// *********************************************   48. Rotate Image   ********************************************* //
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
// https://leetcode.com/problems/rotate-image/
//
// @param {number[][]} matrix
// @return {void} Do not return anything, modify matrix in-place instead.
//
// O(n^2) time, O(1) space
// Runtime:         97 ms, faster than 36.96%   |     61 ms, faster than 96.04%   |     55 ms, faster than 99.14%
// Memory Usage:  41.6 MB, less than   98.27%   |   42.3 MB, less than   36.54%   |   41.8 MB, less than   86.92%
const rotate = (matrix) => {
  for (let left = 0, right = matrix.length - 1; left < right; left++, right--) {
    for (let i = 0; i < right - left; i++) {
      // get top and bottom, and save the top left value as temp
      let top = left, bottom = right, topLeft = matrix[top][left + i];
      // move bottom left into top left
      matrix[top][left + i] = matrix[bottom - i][left];
      // move bottom right into bottom left
      matrix[bottom - i][left] = matrix[bottom][right - i];
      // move top right into bottom right
      matrix[bottom][right - i] = matrix[top + i][right];
      // move top left into top right
      matrix[top + i][right] = topLeft;
    }
  }
  return matrix;
};
// **************************************************************************************************************** //

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]));

// Example 1:
// https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Example 2:
// https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Constraints:
// n == matrix.length == matrix[i].length
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000