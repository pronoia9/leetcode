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
const isValidSudoku = (board) => {
  for (let row = 0; row < 9; row++) {
    // reset maps
    let rowMap = new Map(Object.entries({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }));
    let colMap = new Map(Object.entries({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }));
    let boxMap = new Map(Object.entries({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }));

    // board[i][j] cols
    for (let col = 0; col < 9; col++) {
      // set rowMap per row
      board[row][col] !== '.' && rowMap.set(board[row][col], rowMap.get(board[row][col]) + 1);

      // set colMap per col
      board[col][row] !== '.' && colMap.set(board[col][row], colMap.get(board[col][row]) + 1);

      // box rows 0-2, 3-5, 6-8 | cols 0-2, 3-5, 6-8
      // set boxMap
      if (row === 0 || row === 3 || row === 6) {
        board[row];
      }
      // box check
      for (let [key, value] of boxMap.entries()) {
        if (value > 1) return false;
      }
    }
    // col check
    for (let [key, value] of colMap.entries()) {
      if (value > 1) return false;
    }
    // row check
    for (let [key, value] of rowMap.entries()) {
      if (value > 1) return false;
    }

    console.log(rowMap);
    console.log(colMap);
    console.log(boxMap);
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
// console.log(isValidSudoku());

['[r=0][c=0]', '[r=0][c=1]', '[r=0][c=2]', '[r=0][c=3]', '[r=0][c=4]', '[r=0][c=5]', '[r=0][c=6]', '[r=0][c=7]', '[r=0][+c=8]']
['[r=1][c=0]', '[r=1][c=1]', '[r=1][c=2]', '[r=1][c=3]', '[r=1][c=4]', '[r=1][c=5]', '[r=1][c=6]', '[r=1][c=7]', '[r=1][+c=8]']
['[r=2][c=0]', '[r=2][c=1]', '[r=2][c=2]', '[r=2][c=3]', '[r=2][c=4]', '[r=2][c=5]', '[r=2][c=6]', '[r=2][c=7]', '[r=2][+c=8]']
['[r=3][c=0]', '[r=3][c=1]', '[r=3][c=2]', '[r=3][c=3]', '[r=3][c=4]', '[r=3][c=5]', '[r=3][c=6]', '[r=3][c=7]', '[r=3][+c=8]']
['[r=4][c=0]', '[r=4][c=1]', '[r=4][c=2]', '[r=4][c=3]', '[r=4][c=4]', '[r=4][c=5]', '[r=4][c=6]', '[r=4][c=7]', '[r=4][+c=8]']
['[r=5][c=0]', '[r=5][c=1]', '[r=5][c=2]', '[r=5][c=3]', '[r=5][c=4]', '[r=5][c=5]', '[r=5][c=6]', '[r=5][c=7]', '[r=5][+c=8]']
['[r=6][c=0]', '[r=6][c=1]', '[r=6][c=2]', '[r=6][c=3]', '[r=6][c=4]', '[r=6][c=5]', '[r=6][c=6]', '[r=6][c=7]', '[r=6][+c=8]']
['[r=7][c=0]', '[r=7][c=1]', '[r=7][c=2]', '[r=7][c=3]', '[r=7][c=4]', '[r=7][c=5]', '[r=7][c=6]', '[r=7][c=7]', '[r=7][+c=8]']
['[r=8][c=0]', '[r=8][c=1]', '[r=8][c=2]', '[r=8][c=3]', '[r=8][c=4]', '[r=8][c=5]', '[r=8][c=6]', '[r=8][c=7]', '[r=8][+c=8]']