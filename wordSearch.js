// **********************************************   79. Word Search   ********************************************* //
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
// https://leetcode.com/problems/word-search/
//
/** @param {character[][]} board **/ /** @param {string} word **/ /** @return {boolean} **/
//
// Recursive Backtracking (DFS)
// Runtime:       1509 ms, faster than 30.94%
// Memory Usage:  48.1 MB, less than   50.14%
const exist = (board, word) => {
  const ROWS = board.length, COLS = board[0].length, path = new Set();

  const dfs = (row, col, i) => {
    if (i === word.length) return true;
    if ((row < 0 || col < 0) || (row >= ROWS || col >= COLS) || word[i] != board[row][col] || (path.has(`${row}-${col}`))) return false;

    path.add(`${row}-${col}`);
    const top = dfs(row - 1, col, i + 1),
      right =   dfs(row, col + 1, i + 1),
      bottom =  dfs(row + 1, col, i + 1),
      left =    dfs(row, col - 1, i + 1);
    path.delete(`${row}-${col}`);
    return top || right || bottom || left;
  }

  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) if (dfs(r, c, 0)) return true;
  return false;
};
// **************************************************************************************************************** //

console.log(exist([
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']],
    'ABCCED')
);
console.log(exist([
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']],
    'SEE')
);
console.log(exist([
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']],
    'ABCB')
);

// Example 1:
// https://assets.leetcode.com/uploads/2020/11/04/word2.jpg
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:
// https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:
// https://assets.leetcode.com/uploads/2020/10/15/word3.jpg
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// Constraints:
// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

// Follow up: Could you use search pruning to make your solution faster with a larger board?