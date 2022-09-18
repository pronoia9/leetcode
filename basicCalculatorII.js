// ***************************************   227. Basic Calculator II   *************************************** //
// Given a string s which represents an expression, evaluate this expression and return its value.
// The integer division should truncate toward zero.
// You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].
// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
// https://leetcode.com/problems/basic-calculator-ii/
//
/** @param {string} s **/ /** @return {number} **/
// Runtime:        157 ms, faster than 24.89%   |   140 ms, faster than 40.06%   |     89 ms, faster than 93.71%
// Memory Usage:  50.8 MB, less than   32.33%   |    51 MB, less than   29.04%   |   50.8 MB, less than   32.33%
const calculate = (s) => {
  const calc = s.match(/(\d+)|[+-/*]/g), // arrayify digits + operators
    res = [+calc.shift()], // get first digit as integer (+) and remove it from calc array
    ops = {
      '+': (n) => res.push(n), // only add + and - to the res array
      '-': (n) => res.push(-n), // for * and / pop the last number from res and apply the operation on it
      '*': (n) => res.push(res.pop() * n),
      '/': (n) => res.push((res.pop() / n) | 0),
    };

  for (let i = 0; i < calc.length; i++) ops[calc[i]]?.(+calc[i + 1]); // add + or - operations to res
  return res.reduce((acc, curr) => acc + curr); // calculate the remaining +/- operations and return the accumulate
};
// **************************************************************************************************************** //

// console.log(calculate('3+2*2'));
// console.log(calculate(' 3/2 '));
console.log(calculate(' 3+5 / 2 '));

// Example 1:
// Input: s = "3+2*2"
// Output: 7

// Example 2:
// Input: s = " 3/2 "
// Output: 1

// Example 3:
// Input: s = " 3+5 / 2 "
// Output: 5

// Constraints:
// 1 <= s.length <= 3 * 105
// s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
// s represents a valid expression.
// All the integers in the expression are non-negative integers in the range [0, 231 - 1].
// The answer is guaranteed to fit in a 32-bit integer.