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
  for (let i = 0; i < 9; i++) {
    let row = board[i];
    // reset maps
    let rowMap = new Map(Object.entries({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }));
    let colMap = new Map(Object.entries({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }));
    let boxMap = new Map(Object.entries({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }));

    // set rowMap per row
    for (let j = 0; j < 9; j++) {
      row[j] !== '.' && rowMap.set(row[j], rowMap.get(row[j]) + 1);
    }
    // row check
    for (let [key, value] of rowMap.entries()) {
      if (value > 1) return false;
    }

    // set colMap per col
    row[0] !== '.' && colMap.set(row[0], colMap.get(row[0]) + 1);
    // col check
    for (let [key, value] of colMap.entries()) {
      if (value > 1) return false;
    }

    console.log(rowMap);
    console.log(colMap);
    // console.log(boxMap);
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
