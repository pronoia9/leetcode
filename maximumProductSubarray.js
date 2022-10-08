// ***************************************   152. Maximum Product Subarray   ************************************** //
// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.
// A subarray is a contiguous subsequence of the array.
// https://leetcode.com/problems/maximum-product-subarray/
//
/** @param {number[]} nums **/ /** @return {number} **/
//
// DP
// Runtime:        113 ms, faster than 33.77%   |     72 ms, faster than 91.49%   |     77 ms, faster than 85.68%
// Memory Usage:  44.6 MB, less than   14.02%   |   43.7 MB, less than   39.20%   |   44.1 MB, less than   33.82%
const maxProduct = (nums) => {
  let res = nums[0], currMin = 1, currMax = 1;
  for (const n of nums) {
    if (n == 0) { currMin = 1; currMax = 1; }
    [currMin, currMax] = [Math.min(n, n * currMin, n * currMax), Math.max(n, n * currMax, n * currMin)];
    res = Math.max(n, res, currMax, currMin);
  }
  return res;
};
// **************************************************************************************************************** //

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));

// Example 1:
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// Constraints:
// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.