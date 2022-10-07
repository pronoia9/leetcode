// ***********************************************   55. Jump Game   ********************************************** //
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.
// https://leetcode.com/problems/jump-game/
//
/** @param {number[]} nums **/ /** @return {boolean} **/
//
// Greedy
// O(n) time, O(1) space
// Runtime:        114 ms, faster than 68.92%   |     71 ms, faster than 98.34%
// Memory Usage:  46.8 MB, less than   40.87%   |   45.8 MB, less than   93.49%
const canJump = (nums) => {
  let goal = nums[nums.length - 1];
  for (let i = nums.length - 1; i >= 0; i--) if (i + nums[i] >= goal) goal = i;
  return goal == 0;
};
// **************************************************************************************************************** //

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Constraints:
// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105