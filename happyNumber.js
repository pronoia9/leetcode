// ********************************************   202. Happy Number   ********************************************* //
// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.
// https://leetcode.com/problems/happy-number/
//
// Runtime:         99 ms, faster than 52.85%
// Memory Usage:  44.3 MB, less than   36.96%
{
  const sumOfSquares = (n) => `${n}`.split('').reduce((acc, curr) => (acc += Math.pow(curr, 2)), 0);
  const isHappy = (n) => {
    const set = new Set();
    while (n !== 1) {
      if (!set.has(n)) set.add(n);
      else return false;
      n = sumOfSquares(n);
    }
    return n === 1;
  };
}
//
// Runtime:         78 ms, faster than 81.46%   |     77 ms, faster than 83.06%   |   71 ms, faster than 90.27%
// Memory Usage:  44.5 MB, less than   26.18%   |   44.5 MB, less than   21.38%   |   44 MB, less than   47.44%
const sumOfSquares = (n) => `${n}`.split('').reduce((acc, curr) => (acc += Math.pow(curr, 2)), 0);
const isHappy = (n) => {
  const set = new Set();
  while (n !== 1) {
    n = sumOfSquares(n);
    if (!set.has(n)) set.add(n);
    else return false;
  }
  return n === 1;
};
// **************************************************************************************************************** //

console.log(isHappy(19));
console.log(isHappy(2));

// Example 1:
// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// Example 2:
// Input: n = 2
// Output: false

// Constraints:
// 1 <= n <= 231 - 1

// https://leetcode.com/problems/happy-number/discuss/488750/Javascript-greater-full-explanation-no-strings-uses-Set()