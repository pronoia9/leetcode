// *********************************************   322. Coin Change   ********************************************* //
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.
// https://leetcode.com/problems/coin-change/
//
/** @param {number[]} coins **/ /** @param {number} amount **/ /** @return {number} **/
//
// DP - Bottom-up
// O(amount * coins.length) time, O(amount) space
// Runtime:        323 ms, faster than 22.26%   |    151 ms, faster than 75.90%
// Memory Usage:  47.4 MB, less than   59.46%   |   47.4 MB, less than   58.45% 
const coinChange = (coins, amount) => {
  const dp = Array.from({ length: amount + 1 }, () => Infinity);
  dp[0] = 0;
  for (let i = 1; i < amount + 1; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }
  return dp[amount] !== Infinity ? dp[amount] : -1;
};
// **************************************************************************************************************** //

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));

// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Example 3:
// Input: coins = [1], amount = 0
// Output: 0

// Constraints:
// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104