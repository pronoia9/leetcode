// ****************************************   240. Search a 2D Matrix II   **************************************** //
// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
// https://leetcode.com/problems/search-a-2d-matrix-ii/
//
/** @param {number[][]} matrix **/ /** @param {number} target **/ /** @return {boolean} **/
//
// O(m + n) time, o(1) space
// Runtime:        627 ms, faster than 73.24%
// Memory Usage:  45.2 MB, less than   54.40%
{
  const searchMatrix = (matrix, target) => {
    let n = matrix.length, m = matrix[0].length, row = n - 1, col = 0;
    while (row >= 0 && col < m) {
      const curr = matrix[row][col];
      if (curr == target) return true;
      if (curr < target) col += 1;
      else row -= 1;
    }
    return false;
  };
}
//
// Runtime:        450 ms, faster than 92.95%
// Memory Usage:  44.2 MB, less than   98.85%
const searchMatrix = (matrix, target) => {
  let row = matrix.length - 1, col = 0;
  while (row >= 0 && col < matrix[row].length) {
    const curr = matrix[row][col];
    if (curr == target) return true;
    if (curr < target) col += 1;
    else row -= 1;
  }
  return false;
};
//
// Runtime:       5893 ms, faster than 15.55%
// Memory Usage:  44.5 MB, less than   94.06%
{
  const searchMatrix = (matrix, target) => {
    for (let row = matrix.length - 1; row >= 0; row--) {
      for (let col = 0; col < matrix[row].length; col++) {
        const curr = matrix[row][col];
        console.log(curr);
        if (curr > target) break;
        if (curr == target) return true;
      }
    }
    return false;
  };
}
// **************************************************************************************************************** //

console.log(
  searchMatrix(
    [
      [ 1,  4,  7, 11, 15],
      [ 2,  5,  8, 12, 19],
      [ 3,  6,  9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
console.log(
  searchMatrix(
    [
      [ 1,  4,  7, 11, 15],
      [ 2,  5,  8, 12, 19],
      [ 3,  6,  9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20
  )
);
console.log(searchMatrix([[-1, 3],], 3));
console.log(searchMatrix([[-5]], -5));

// Example 1:
// https://assets.leetcode.com/uploads/2020/11/24/searchgrid2.jpg
// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true

// Example 2:
// https://assets.leetcode.com/uploads/2020/11/24/searchgrid.jpg
// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// Output: false

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= n, m <= 300
// -109 <= matrix[i][j] <= 109
// All the integers in each row are sorted in ascending order.
// All the integers in each column are sorted in ascending order.
// -109 <= target <= 109