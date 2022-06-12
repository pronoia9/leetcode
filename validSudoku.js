// *************************************************   36. Valid Sudoku   ************************************************* //
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// https://leetcode.com/problems/valid-sudoku/
// Constraints:
// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.
//
// Runtime:      127 ms,  faster than 32.15%7   |   127 ms,  faster than 32.15%   |   89 ms,   faster than 77.19%   |   121 ms,  faster than 37.85%
// Memory Usage: 44.4 MB, less than   94.86%7   |   45.3 MB, less than   56.82%   |   44.7 MB, less than   80.44%   |   44.8 MB, less than   75.78%
{
  const isValidSudoku = (board) => {
    for (let row = 0; row < 9; row++) {
      // reset per row
      let rowNums = [];
      let colNums = [];
      let boxNums = [];

      // board[i][j] cols
      for (let col = 0; col < 9; col++) {
        // ROW  CHECK + ADD
        // check the rowNums array for a duplicate, return false if we already have the same number, if not add the number to rowNums array
        if (rowNums.includes(board[row][col])) return false;
        board[row][col] !== '.' && rowNums.push(board[row][col]);

        // COL  CHECK + ADD
        // reversing row/col simplifies checking this as in board[row=5] itll check board[col=0][row=5], board[col=1][row=5], and so on
        if (colNums.includes(board[col][row])) return false;
        board[col][row] !== '.' && colNums.push(board[col][row]);

        // BOX  CHECK + ADD  (0-2, 3-5, 6-8)
        let b = board[3 * Math.floor(row / 3) + Math.floor(col / 3)][3 * (row % 3) + (col % 3)];
        // console.log('row:', row, '  col:', col, '  box:', '['+(3 * Math.floor(row / 3) + Math.floor(col / 3))+']'+'['+(3 * (row % 3) + (col % 3))+']')
        if (boxNums.includes(b)) return false;
        b !== '.' && boxNums.push(b);
      }
    }

    return true;
  };
}
//
// Runtime:      100 ms,  faster than 62.09%   |   102 ms,  faster than 59.84%   |   110 ms,  faster than 50.38%   |   97 ms,   faster than 66.27%   |   82 ms,   faster than 87.44%
// Memory Usage: 44.5 MB, less than   89.16%   |   44.4 MB, less than   92.29%   |   44.6 MB, less than   85.13%   |   44.6 MB, less than   89.16%   |   44.3 MB, less than   94.86%
const isValidSudoku = (board) => {
  for (let row = 0; row < 9; row++) {
    let rowNums = new Set(), colNums = new Set(), boxNums = new Set();

    for (let col = 0; col < 9; col++) {
      if (rowNums.has(board[row][col])) return false;
      board[row][col] !== '.' && rowNums.add(board[row][col]);

      if (colNums.has(board[col][row])) return false;
      board[col][row] !== '.' && colNums.add(board[col][row]);

      let b = board[3 * Math.floor(row / 3) + Math.floor(col / 3)][3 * (row % 3) + (col % 3)];
      if (boxNums.has(b)) return false;
      b !== '.' && boxNums.add(b);
    }
  }

  return true;
};
// ************************************************************************************************************************ //

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['.', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
console.log(
  isValidSudoku([
    ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
    ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
    ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
    ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
    ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
  ])
);
// console.log(isValidSudoku());

// ['[r=0][c=0]', '[r=0][c=1]', '[r=0][c=2]', '[r=0][c=3]', '[r=0][c=4]', '[r=0][c=5]', '[r=0][c=6]', '[r=0][c=7]', '[r=0][+c=8]']
// ['[r=1][c=0]', '[r=1][c=1]', '[r=1][c=2]', '[r=1][c=3]', '[r=1][c=4]', '[r=1][c=5]', '[r=1][c=6]', '[r=1][c=7]', '[r=1][+c=8]']
// ['[r=2][c=0]', '[r=2][c=1]', '[r=2][c=2]', '[r=2][c=3]', '[r=2][c=4]', '[r=2][c=5]', '[r=2][c=6]', '[r=2][c=7]', '[r=2][+c=8]']
// ['[r=3][c=0]', '[r=3][c=1]', '[r=3][c=2]', '[r=3][c=3]', '[r=3][c=4]', '[r=3][c=5]', '[r=3][c=6]', '[r=3][c=7]', '[r=3][+c=8]']
// ['[r=4][c=0]', '[r=4][c=1]', '[r=4][c=2]', '[r=4][c=3]', '[r=4][c=4]', '[r=4][c=5]', '[r=4][c=6]', '[r=4][c=7]', '[r=4][+c=8]']
// ['[r=5][c=0]', '[r=5][c=1]', '[r=5][c=2]', '[r=5][c=3]', '[r=5][c=4]', '[r=5][c=5]', '[r=5][c=6]', '[r=5][c=7]', '[r=5][+c=8]']
// ['[r=6][c=0]', '[r=6][c=1]', '[r=6][c=2]', '[r=6][c=3]', '[r=6][c=4]', '[r=6][c=5]', '[r=6][c=6]', '[r=6][c=7]', '[r=6][+c=8]']
// ['[r=7][c=0]', '[r=7][c=1]', '[r=7][c=2]', '[r=7][c=3]', '[r=7][c=4]', '[r=7][c=5]', '[r=7][c=6]', '[r=7][c=7]', '[r=7][+c=8]']
// ['[r=8][c=0]', '[r=8][c=1]', '[r=8][c=2]', '[r=8][c=3]', '[r=8][c=4]', '[r=8][c=5]', '[r=8][c=6]', '[r=8][c=7]', '[r=8][+c=8]']

/*
[r=0][c=0] [r=0][c=1] [r=0][c=2]    [r=0][c=3] [r=0][c=4] [r=0][c=5]    [r=0][c=6] [r=0][c=7] [r=0][+c=8]
[r=1][c=0] [r=1][c=1] [r=1][c=2]    [r=1][c=3] [r=1][c=4] [r=1][c=5]    [r=1][c=6] [r=1][c=7] [r=1][+c=8]
[r=2][c=0] [r=2][c=1] [r=2][c=2]    [r=2][c=3] [r=2][c=4] [r=2][c=5]    [r=2][c=6] [r=2][c=7] [r=2][+c=8]


[r=3][c=0] [r=3][c=1] [r=3][c=2]    [r=3][c=3] [r=3][c=4] [r=3][c=5]    [r=3][c=6] [r=3][c=7] [r=3][+c=8]
[r=4][c=0] [r=4][c=1] [r=4][c=2]    [r=4][c=3] [r=4][c=4] [r=4][c=5]    [r=4][c=6] [r=4][c=7] [r=4][+c=8]
[r=5][c=0] [r=5][c=1] [r=5][c=2]    [r=5][c=3] [r=5][c=4] [r=5][c=5]    [r=5][c=6] [r=5][c=7] [r=5][+c=8]


[r=6][c=0] [r=6][c=1] [r=6][c=2]    [r=6][c=3] [r=6][c=4] [r=6][c=5]    [r=6][c=6] [r=6][c=7] [r=6][+c=8]
[r=7][c=0] [r=7][c=1] [r=7][c=2]    [r=7][c=3] [r=7][c=4] [r=7][c=5]    [r=7][c=6] [r=7][c=7] [r=7][+c=8]
[r=8][c=0] [r=8][c=1] [r=8][c=2]    [r=8][c=3] [r=8][c=4] [r=8][c=5]    [r=8][c=6] [r=8][c=7] [r=8][+c=8]
*/
