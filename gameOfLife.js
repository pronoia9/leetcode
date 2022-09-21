// *********************************************   289. Game of Life   ******************************************** //
// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.
// https://leetcode.com/problems/game-of-life/
//
/** @param {number[][]} board **/ /** @return {void} Do not return anything, modify board in-place instead. **/
//
// O(9*n*m) time, O(1) spcae
// Runtime:        100 ms, faster than 38.12%   |     76 ms, faster than 79.24%
// Memory Usage:  41.9 MB, less than   90.42%   |   42.1 MB, less than   71.06%
const gameOfLife = (board) => {
  const ROWS = board.length, COLS = board[0].length, map = new Map(Object.entries({ 0: 0, 1: 0, 2: 1, 3: 1 }));
  // helper
  const countNeighbors = (r, c) => {
    let neighbors = 0;
    for (let i = r - 1; i < r + 2; i++) {
      for (let j = c - 1; j < c + 2; j++) {
        if ((i === r && j === c) || i < 0 || j < 0 || i === ROWS || j === COLS) continue;
        if (board[i][j] === 1 || board[i][j] === 3) neighbors++;
      }
    }
    return neighbors;
  };
  // put map values
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const nei = countNeighbors(r, c);
      if (board[r][c]) {
        if (nei === 2 || nei === 3) board[r][c] = 3;
      }
      else if (nei === 3) board[r][c] = 2;
    }
  }
  // put new values from map
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      board[r][c] = map.get(`${board[r][c]}`);
    }
  }
  return board;
};
// **************************************************************************************************************** //

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
);
console.log(
  gameOfLife([
    [1, 1],
    [1, 0],
  ])
);

// Example 1:
// https://assets.leetcode.com/uploads/2020/12/26/grid1.jpg
// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

// Example 2:
// https://assets.leetcode.com/uploads/2020/12/26/grid2.jpg
// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]

// Constraints:
// m == board.length
// n == board[i].length
// 1 <= m, n <= 25
// board[i][j] is 0 or 1.

// Follow up:
// Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?

//   i  |  OG  |  NEW
// -------------------
//   0  |  0   |  0
//   1  |  1   |  0
//   2  |  0   |  1
//   3  |  1   |  1