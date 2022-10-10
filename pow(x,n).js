// ***********************************************   50. Pow(x, n)   ********************************************** //
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
// https://leetcode.com/problems/powx-n/
//
/** @param {number} x **/ /** @param {number} n **/ /** @return {number} **/
//
// Runtime:        100 ms, faster than 47.20%   |    109 ms, faster than 29.48%   |     87 ms, faster than 69.63%
// Memory Usage:  42.3 MB, less than   38.85%   |   42.2 MB, less than   49.43%   |   42.1 MB, less than   49.43%
const myPow = (x, n) => {
  if (n == 0) return 1;
  if (x == 0) return 0;
  if (n == 1) return x;
  if (n == -1) return 1 / x;
  if (n % 2) return x * myPow(x, n - 1);
  else {
    let res = myPow(x, n / 2);
    return res * res;
  }
};
// **************************************************************************************************************** //

console.log(myPow(2.0, 10));
console.log(myPow(2.1, 3));
console.log(myPow(2.0, -2));
console.log(myPow(34.00515, -3));

// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Constraints:
// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n is an integer.
// -104 <= xn <= 104