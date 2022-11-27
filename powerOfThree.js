// ********************************************   326. Power of Three   ******************************************* //
// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.
// https://leetcode.com/problems/power-of-three/
//
// Runtime:        554 ms, faster than 5.16%
// Memory Usage:  50.8 MB, less than  87.43%
const isPowerOfThree = (n) => {
  let i = 0, pow = 0;
  while (pow < n) {
    pow = Math.pow(3, i++);
    if (pow === n) return true;
  }
  return false;
};
// **************************************************************************************************************** //

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(9));

// Example 1:
// Input: n = 27
// Output: true

// Example 2:
// Input: n = 0
// Output: false

// Example 3:
// Input: n = 9
// Output: true