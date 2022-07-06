// **********************************************   509. Fibonacci Number   *********************************************** //
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).
// https://leetcode.com/problems/fibonacci-number/
//
// Runtime:         74 ms, faster than 80.04%
// Memory Usage:  41.9 MB, less than   59.33%
const fib = (n) => {
  if (n <= 1) return n;
  let a = 0, b = 1;
  while (n-- > 1) {
    const sum = a + b;
    a = b;
    b = sum;
  }
  return b;
};
//
// ************************************************************************************************************************ //

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.