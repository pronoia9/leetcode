// ******************************************   130. Surrounded Regions   ***************************************** //
// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.
// A region is captured by flipping all 'O's into 'X's in that surrounded region.
// https://leetcode.com/problems/surrounded-regions/
// 
/** @param {character[][]} board **/ /** @return {void} Do not return anything, modify board in-place instead. **/
//
// O(n*m) time, O(1)space
// Runtime:        145 ms, faster than 51.67%   |    73 ms, faster than 99.46%
// Memory Usage:  46.3 MB, less than   80.09%   |   45.9 MB, less than  93.54%
{
  const solve = (board) => {
    const ROWS = board.length, COLS = board[0].length;

    const capture = (r, c) => {
      if (r < 0 || c < 0 || r == ROWS || c == COLS || board[r][c] != 'O') return;
      board[r][c] = 'T';
      capture(r + 1, c);
      capture(r - 1, c);
      capture(r, c + 1);
      capture(r, c - 1);
    };

    // capture the unsurrounded regions (connected to border) (Os to Ts)
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS; c++)
        if ((r == 0 || c == 0 || r == ROWS - 1 || c == COLS - 1) && board[r][c] == 'O') capture(r, c);

    // capture the surrounded regions inside the border (Os to Xs)
    for (let r = 1; r < ROWS - 1; r++) for (let c = 1; c < COLS - 1; c++) board[r][c] == 'O' && (board[r][c] = 'X');

    // uncapture the unsurrounded regions (Ts to Os)
    for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) if (board[r][c] == 'T') board[r][c] = 'O';

    return board;
  };
}
//
// Runtime:        134 ms, faster than 63.83%   |     87 ms, faster than 94.94%   |     91 ms, faster than 92.68%
// Memory Usage:  46.3 MB, less than   80.09%   |   46.5 MB, less than   72.66%   |   46.3 MB, less than   80.09%
const solve = (board) => {
  const ROWS = board.length, COLS = board[0].length;

  const capture = (r, c) => {
    if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] != 'O') return;
    board[r][c] = 'T';
    capture(r + 1, c);
    capture(r - 1, c);
    capture(r, c + 1);
    capture(r, c - 1);
  };

  // capture the unsurrounded regions (connected to border) (Os to Ts)
  for (let r = 0, c = 0; c < COLS - 1; c++) capture(r, c);
  for (let r = 0, c = COLS - 1; r < ROWS - 1; r++) capture(r, c);
  for (let r = ROWS - 1, c = 0; c < COLS - 1; c++) capture(r, c);
  for (let r = 0, c = 0; r < ROWS - 1; r++) capture(r, c);

  // capture the surrounded regions inside the border (Os to Xs)
  for (let r = 1; r < ROWS - 1; r++) for (let c = 1; c < COLS - 1; c++) board[r][c] == 'O' && (board[r][c] = 'X');

  // uncapture the unsurrounded regions (Ts to Os)
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) if (board[r][c] == 'T') board[r][c] = 'O';

  return board;
};
// **************************************************************************************************************** //

console.log(
  solve([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ])
);
console.log(solve([['X']]));
console.log(
  solve([
    ['O', 'O', 'O'],
    ['O', 'O', 'O'],
    ['O', 'O', 'O'],
  ])
);

// Example 1:
// https://assets.leetcode.com/uploads/2021/02/19/xogrid.jpg
// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Notice that an 'O' should not be flipped if:
// - It is on the border, or
// - It is adjacent to an 'O' that should not be flipped.
// The bottom 'O' is on the border, so it is not flipped.
// The other three 'O' form a surrounded region, so they are flipped.

// Example 2:
// Input: board = [["X"]]
// Output: [["X"]]

// Constraints:
// m == board.length
// n == board[i].length
// 1 <= m, n <= 200
// board[i][j] is 'X' or 'O'.