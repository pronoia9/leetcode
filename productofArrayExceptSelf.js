// *************************************   238. Product of Array Except Self   ************************************ //
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// https://leetcode.com/problems/product-of-array-except-self/
//
// @param {number[]} nums
// @return {number[]}
//
// https://www.youtube.com/watch?v=bNvIQI2wAjk
// O(n) space, O(1) space (not counting result array)
// Runtime:        115 ms, faster than 89.21%   |    119 ms, faster than 85.72%   |    102 ms, faster than 97.52%
// Memory Usage:  55.3 MB, less than   37.21%   |   54.7 MB, less than   49.31%   |   54.7 MB, less than   49.31%
const productExceptSelf = (nums) => {
  const res = new Array(nums.length);
  // store prefix
  for (let i = 0, prefix = 1; i < nums.length; i++) (res[i] = prefix), (prefix *= nums[i]);
  // get postfix
  for (let i = nums.length - 1, postfix = 1; i >= 0; i--) (res[i] *= postfix), (postfix *= nums[i]);
  return res;
};
//
{
  const productExceptSelf = (nums) =>
    nums.map((num, idx) => (num = nums.reduce((prod, curr, i) => (prod *= idx !== i ? curr : 1), 1)));
}
// **************************************************************************************************************** //

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:
// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)