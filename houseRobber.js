// *********************************************   198. House Robber   ******************************************** //
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
// https://leetcode.com/problems/house-robber/
//
/** @param {number[]} nums **/ /** @return {number} **/
//
// Runtime:        108 ms, faster than 15.31%   |     57 ms, faster than 97.84%
// Memory Usage:  42.5 MB, less than    8.18%   |   42.4 MB, less than   14.99%
const rob = (nums) => {
  let rob1 = 0, rob2 = 0;
  for (const n of nums) [rob1, rob2] = [rob2, Math.max(rob1 + n, rob2)];
  return rob2;
};
// **************************************************************************************************************** //

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 1, 1, 2]));

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400
