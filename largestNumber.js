// ********************************************   179. Largest Number   ******************************************* //
// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
// Since the result may be very large, so you need to return a string instead of an integer.
// https://leetcode.com/problems/largest-number/
// 
/** @param {number[]} nums **/ /** @return {string} **/
//
// Runtime:        110 ms, faster than 38.37%   |     98 ms, faster than 62.60%   |     72 ms, faster than 91.28%
// Memory Usage:  43.5 MB, less than   95.74%   |   44.1 MB, less than   59.88%   |   43.5 MB, less than   95.74%
const largestNumber = (nums) => {
  nums.sort((a, b) => parseInt(`${b}${a}`) - parseInt(`${a}${b}`));
  return `${nums.join('')}`;
};
// **************************************************************************************************************** //

console.log(largestNumber([10, 2]));
console.log(largestNumber([3, 30, 34, 5, 9]));

// Example 1:
// Input: nums = [10,2]
// Output: "210"

// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 109