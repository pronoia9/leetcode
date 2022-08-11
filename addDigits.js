// *********************************************   258. Add Digits   ********************************************** //
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
// https://leetcode.com/problems/add-digits/
//
// Runtime:       119 ms, faster than 29.79%   |   139 ms,  faster than 14.25%   |   94 ms, faster than 63.47%
// Memory Usage: 44.5 MB, less than   15.41%   |   44.1 MB, less than   32.12%   |   44 MB, less than   48.83%
const addDigits = (num) => {
  let res = `${num}`;
  while (res.length > 1) {
    res = `${res.split('').reduce((prev, curr) => (prev += parseInt(curr)), 0)}`;
  }
  return res;
};
// **************************************************************************************************************** //

console.log(addDigits(38));
console.log(addDigits(0));

// Example 1:
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.

// Example 2:
// Input: num = 0
// Output: 0