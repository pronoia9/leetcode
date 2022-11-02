// **************************************   171. Excel Sheet Column Number   ************************************** //
// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...
// https://leetcode.com/problems/excel-sheet-column-number/
//
// Runtime:        104 ms, faster than 54.26%
// Memory Usage:  43.5 MB, less than   67.26%
{
  const titleToNumber = (columnTitle) => {
    let total = 0;
    for (let i = 0, j = columnTitle.length - 1; i < columnTitle.length; i++, j--) {
      // total += Math.pow(26, columnTitle.length - 1 - i) * (columnTitle.charCodeAt(i) - 64);
      total += Math.pow(26, j) * (columnTitle.charCodeAt(i) - 64);
    }
    return total;
  };
}
//
// Runtime:        118 ms, faster than 35.13%
// Memory Usage:  43.5 MB, less than   62.16%
{
  const titleToNumber = (columnTitle) => {
    let total = 0;
    for (let i = 0, j = columnTitle.length - 1; i < columnTitle.length; i++, j--) {
      total = total * 26 + (columnTitle.charCodeAt(i) - 64);
    }
    return total;
  };
}
//
// Runtime:         79 ms, faster than 86.38%
// Memory Usage:  43.5 MB, less than  62.16%
const titleToNumber = (columnTitle) => columnTitle.split('').reduce((total, char) => total * 26 + (char.charCodeAt(0) - 64), 0)
// **************************************************************************************************************** //

// console.log('A'.charCodeAt(0) - 1);
// console.log(total * 26);
// console.log(Math.pow(26, (columnTitle.length - i - 1)));
// console.log(columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
// console.log(columnTitle.charCodeAt(i) - 64);

console.log(titleToNumber('A'));
console.log(titleToNumber('AB'));
console.log(titleToNumber('ZY'));
console.log(titleToNumber('AAA'));
console.log(titleToNumber('ZAA'));
console.log(titleToNumber('FXSHRXW'));

// Example 1:
// Input: columnTitle = "A"
// Output: 1

// Example 2:
// Input: columnTitle = "AB"
// Output: 28

// Example 3:
// Input: columnTitle = "ZY"
// Output: 701

// Constraints:
// 1 <= columnTitle.length <= 7
// columnTitle consists only of uppercase English letters.
// columnTitle is in the range ["A", "FXSHRXW"].