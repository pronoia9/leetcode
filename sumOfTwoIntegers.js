// *****************************************   371. Sum of Two Integers   ***************************************** //
// Given two integers a and b, return the sum of the two integers without using the operators + and -.
// https://leetcode.com/problems/sum-of-two-integers/
//
/** @param {number} a **/ /** @param {number} b **/ /** @return {number} **/
// Runtime:         94 ms, faster than 32.79%   |     84 ms, faster than 51.47%   |     63 ms, faster than 89.68%
// Memory Usage:  41.7 MB, less than   72.86%   |   41.7 MB, less than   62.00%   |   41.6 MB, less than   72.86%
const getSum = (a, b) =>
  Array.from({ length: Math.abs(Math.min(a, b)) }, () => 0).reduce(
    (acc, curr) => (Math.sign(Math.min(a, b)) > 0 ? ++acc : --acc),
    Math.max(a, b)
  );
// **************************************************************************************************************** //

console.log(getSum(1, 2));
console.log(getSum(2, 3));
console.log(getSum(2, -3));

// Example 1:
// Input: a = 1, b = 2
// Output: 3

// Example 2:
// Input: a = 2, b = 3
// Output: 5

// Constraints:
// -1000 <= a, b <= 1000
