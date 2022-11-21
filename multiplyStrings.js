// *******************************************   43. Multiply Strings   ******************************************* //
// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
// https://leetcode.com/problems/multiply-strings/
//
//
{
  const multiply = (num1, num2) => `${BigInt(num1) * BigInt(num2)}`;
}
// Runtime:      104 ms,  faster than 56.25%
// Memory Usage: 43.8 MB, less than   70.63%
{
  const multiply = (num1, num2) =>
    `${
      num1.split('').reduce((prev, curr, idx) => (prev += BigInt(curr + '0'.repeat(num1.length - 1 - idx))), BigInt(0)) *
      num2.split('').reduce((prev, curr, idx) => (prev += BigInt(curr + '0'.repeat(num2.length - 1 - idx))), BigInt(0))
    }`;
}
//
// Runtime:      120 ms,  faster than 41.67%   |   125 ms,  faster than 36.61%   |   81 ms,   faster than 80.06%
// Memory Usage: 44.8 MB, less than   51.39%   |   44.8 MB, less than   51.39%   |   44.9 MB, less than   48.31% 
const multiply = (num1, num2) => {
  if (num1 === '0' || num2 === '0') return '0';

  const l1 = num1.length,
    l2 = num2.length;
  const result = Array(l1 + l2).fill(0);

  for (let i = l1 - 1; i >= 0; i--) {
    for (let j = l2 - 1; j >= 0; j--) {
      const remainder = i + j + 1;
      const total = num1[i] * num2[j] + result[remainder];
      result[remainder] = total % 10;
      result[i + j] += Math.floor(total / 10);
    }
  }

  return result.join('').replace(/^0+/, '');
};
// **************************************************************************************************************** //

console.log(multiply('2', '3'));
console.log(multiply('123', '456'));
console.log(multiply('2356', '8459'));
console.log(multiply('123456789', '987654321'));