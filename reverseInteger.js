// ********************************************   7. Reverse Integer   ******************************************** //
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// https://leetcode.com/problems/reverse-integer/
//
// Runtime:        162 ms, faster than  6.49%   |     90 ms, faster than 77.07%   |     79 ms, faster than 90.19%
// Memory Usage:  43.6 MB, less than   82.40%   |   44.2 MB, less than   30.10%   |   44.1 MB, less than   47.42%
const reverse = (x) => {
  const reverse = parseInt(`${Math.abs(x)}`.split('').reverse().join(''));
  return reverse > Math.pow(2, 31) - 1 ? 0 : reverse * Math.sign(x);
}
// **************************************************************************************************************** //

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Constraints:
// -231 <= x <= 231 - 1