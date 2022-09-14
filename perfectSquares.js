// *******************************************   279. Perfect Squares   ******************************************* //
// Given an integer n, return the least number of perfect square numbers that sum to n.
// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
// https://leetcode.com/problems/perfect-squares/
//
/** @param {number} n **/ /** @return {number} **/
// DP, O(n * √n) time
// Runtime:        400 ms, faster than 35.73%   |    369 ms, faster than 37.33%
// Memory Usage:  44.3 MB, less than   83.43%   |   44.5 MB, less than   77.45%
{
  const numSquares = (n) => {
    const dp = Array.from({ length: n + 1 }, (v, i) => (i == 0 ? 0 : n));
    for (let target = 1; target < n + 1; target++) {
      for (let s = 1; s < target + 1; s++) {
        const square = s * s;
        if (target - square < 0) break;
        dp[target] = Math.min(dp[target], 1 + dp[target - square]);
      }
    }
    return dp[n];
  };
}
//
// Runtime:        226 ms, faster than 70.86%   |    228 ms, faster than 70.26%   |    167 ms, faster than 89.62%
// Memory Usage:  48.3 MB, less than   40.52%   |   48.1 MB, less than   42.91%   |   47.6 MB, less than   49.10%
const numSquares = (n) => {
  let dp = [0];
  for (let target = 1; target <= n; target++) {
    dp[target] = n;
    for (let s = 1; s * s <= target; s++) {
      dp[target] = Math.min(dp[target], dp[target - s * s] + 1);
    }
  }
  return dp[n];
};
// **************************************************************************************************************** //

console.log(numSquares(12));
console.log(numSquares(13));

// Example 1:
// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.

// Example 2:
// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

// Constraints:
// 1 <= n <= 104