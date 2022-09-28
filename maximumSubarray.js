// *******************************************   53. Maximum Subarray   ******************************************* //
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.
// https://leetcode.com/problems/maximum-subarray/
//
/** @param {number[]} nums **/ /** @return {number} **/
//
// O(n) time, O(1) space
// Runtime:        139 ms, faster than 36.87%   |    116 ms, faster than 66.48%
// Memory Usage:  50.1 MB, less than   79.14%   |   50.7 MB, less than   24.20%
const maxSubArray = (nums) => {
  let maxSub = nums[0], curSum = 0;
  for (const num of nums) {
    if (curSum < 0) curSum = 0;
    curSum += num;
    maxSub = Math.max(maxSub, curSum);
  }
  return maxSub;
};
// **************************************************************************************************************** //

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.