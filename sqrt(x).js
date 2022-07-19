// ***************************************************   69. Sqrt(x)   **************************************************** //
// Given a non-negative integer x, compute and return the square root of x.
// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
// https://leetcode.com/problems/sqrtx/
//
// Runtime:         78 ms, faster than 92.28%   |    128 ms, faster than 37.89%   |     91 ms, faster than 79.64%
// Memory Usage:  43.8 MB, less than   53.38%   |   43.2 MB, less than   83.80%   |   43.6 MB, less than   62.45%
const mySqrt = (x) => Math.floor(Math.sqrt(x));
//
// Runtime:        150 ms, faster than 22.82%
// Memory Usage:  43.5 MB, less than   75.09%
{
  // Because we can truncate decimal digits, we can be sure that answer will always be integer number, so we can just try every number until we hit our target:
  const mySqrt = (x) => {
    let result = 1;
    while (result * result <= x) result++;
    return result - 1;
  };
}
//
// Runtime:        126 ms, faster than 39.71%
// Memory Usage:  43.4 MB, less than   80.33%
{
  // This solution essentially does the same as a first algorithm, but it uses binary search instead.
  const mySqrt = (x) => {
    let start = 0;
    let end = x;
    let res = 0;
    while (start < end) {
      res = Math.ceil((start + end) / 2); // 1.
      if (res * res <= x && (res + 1) * (res + 1) > x) return res; // 2.
      if (res * res < x) start = res; // 3.
      else end = res; // 4.
    }
    return res;
  };
}
// ************************************************************************************************************************ //

console.log(mySqrt(4));
console.log(mySqrt(8));

// Example 1:
// Input: x = 4
// Output: 2

// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

// Constraints:
// 0 <= x <= 231 - 1