// ***********************************************   43. Multiply Strings   *********************************************** //
// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
// https://leetcode.com/problems/multiply-strings/
//
// Runtime:      104 ms,  faster than 56.25%
// Memory Usage: 43.8 MB, less than   70.63%

const multiply = (num1, num2) =>
  `${
    num1.split('').reduce((prev, curr, idx) => (prev += BigInt(curr + '0'.repeat(num1.length - 1 - idx))), BigInt(0)) *
    num2.split('').reduce((prev, curr, idx) => (prev += BigInt(curr + '0'.repeat(num2.length - 1 - idx))), BigInt(0))
  }`;

// ************************************************************************************************************************ //

console.log(multiply('2', '3'));
console.log(multiply('123', '456'));
console.log(multiply('2356', '8459'));
console.log(multiply('123456789', '987654321'));