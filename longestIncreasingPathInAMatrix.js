// *********************************   329. Longest Increasing Path in a Matrix   ********************************* //
// Given an m x n integers matrix, return the length of the longest increasing path in matrix.
// From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).
// https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
//
/** @param {number[][]} matrix **/ /** @return {number} **/
//
// O(n*m) time, O(n*m) space
// Runtime:        168 ms, faster than 67.45%   |    160 ms, faster than 73.53%   |    144 ms, faster than 82.74%
// Memory Usage:  45.5 MB, less than   94.12%   |   45.3 MB, less than   96.27%   |   45.6 MB, less than   93.14%
const longestIncreasingPath = (matrix) => {
  const ROWS = matrix.length, COLS = matrix[0].length,
    dp = Array.from({ length: matrix.length }, () => Array.from({ length: matrix[0].length }));

  const dfs = (r, c, prev) => {
    if (r < 0 || r == ROWS || c < 0 || c == COLS || matrix[r][c] <= prev) return 0;
    if (dp[r][c]) return dp[r][c];
    let res = 1;
    res = Math.max(
      res,
      1 + dfs(r + 1, c, matrix[r][c]),
      1 + dfs(r - 1, c, matrix[r][c]),
      1 + dfs(r, c + 1, matrix[r][c]),
      1 + dfs(r, c - 1, matrix[r][c])
    );
    dp[r][c] = res;
    return res;
  };

  for (let row = 0; row < ROWS; row++) for (let col = 0; col < COLS; col++) dfs(row, col, -1);
  return Math.max(...dp.map((row) => Math.max(...row)));
};
// **************************************************************************************************************** //

console.log(
  longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1],
  ])
);
console.log(
  longestIncreasingPath([
    [3, 4, 5],
    [3, 2, 6],
    [2, 2, 1],
  ])
);
console.log(longestIncreasingPath([[1]]));

// Example 1:
// https://assets.leetcode.com/uploads/2021/01/05/grid1.jpg
// Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
// Output: 4
// Explanation: The longest increasing path is [1, 2, 6, 9].

// Example 2:
// https://assets.leetcode.com/uploads/2021/01/27/tmp-grid.jpg
// Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
// Output: 4
// Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

// Example 3:
// Input: matrix = [[1]]
// Output: 1

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 200
// 0 <= matrix[i][j] <= 231 - 1