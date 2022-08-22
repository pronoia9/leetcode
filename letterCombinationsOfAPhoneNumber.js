// *********************************   17. Letter Combinations of a Phone Number   ******************************** //
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
// https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
//
// Backtracking
// Runtime:         96 ms, faster than 33.28%   |     79 ms, faster than 65.32%
// Memory Usage:  42.2 MB, less than   45.79%   |   42.3 MB, less than   33.33%
const letterCombinations = (digits) => {
  if (!digits) return [];
  const res = [],
    map = new Map(Object.entries({ 2: ['a', 'b', 'c'], 3: ['d', 'e', 'f'], 4: ['g', 'h', 'i'], 5: ['j', 'k', 'l'], 6: ['m', 'n', 'o'], 7: ['p', 'q', 'r', 's'], 8: ['t', 'u', 'v'], 9: ['w', 'x', 'y', 'z'] }));

  const backtrack = (idx = 0, str = '') => {
    if (str.length === digits.length) res.push(str);
    else map.get(digits[idx]).forEach((c) => backtrack(idx + 1, str + c));
  };
  backtrack();
  return res;
};
// **************************************************************************************************************** //

console.log(letterCombinations('23'));
console.log(letterCombinations(''));
console.log(letterCombinations('2'));
console.log(letterCombinations('5'));

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:
// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

// https://www.youtube.com/watch?v=0snEunUacZY