// ************************************   300. Longest Increasing Subsequence   *********************************** //
// Given an integer array nums, return the length of the longest strictly increasing subsequence.
// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].
// https://leetcode.com/problems/longest-increasing-subsequence/
//
/** @param {number[]} nums **/ /** @return {number} **/
//
// DP
// O(n^2) time, O(n) space
// Runtime:        217 ms, faster than 54.56%   |    179 ms, faster than 72.15%   |    189 ms, faster than 68.82%
// Memory Usage:  43.6 MB, less than   78.91%   |   43.8 MB, less than   65.14%   |   43.5 MB, less than   83.39%
const lengthOfLIS = (nums) => {
  const LIS = Array.from({ length: nums.length }, () => 1);
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) LIS[i] = Math.max(LIS[i], 1 + LIS[j]);
    }
  }
  return Math.max(...LIS);
};
// **************************************************************************************************************** //

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));

// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// Constraints:
// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104

// Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?