// ***********************************************   169. Majority Element   ********************************************** //
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// https://leetcode.com/problems/majority-element/
//
// Runtime:        116 ms, faster than 30.00%   |   72 ms, faster than 92.29%   |     73 ms, faster than 90.90%
// Memory Usage:  43.1 MB, less than   93.14%   |   44 MB, less than   53.82%   |   43.4 MB, less than   85.32%
const majorityElement = (nums) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) + 1 || 1));
    if (map.get(nums[i]) >= nums.length / 2) return nums[i];
  }
};
// ************************************************************************************************************************ //

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:
// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?