// *********************************************   189. Rotate Array   ******************************************** //
// Given an array, rotate the array to the right by k steps, where k is non-negative.
// https://leetcode.com/problems/rotate-array/
//
/** @param {number[]} nums **/ /** @param {number} k **/ /** @return {void} Do not return anything, modify nums in-place instead. **/
// Runtime:        106 ms, faster than 89.10%   |   174 ms, faster than 33.05%   |   166 ms, faster than 44.37%
// Memory Usage:  51.4 MB, less than   75.55%   |    51 MB, less than   91.91%   |    51 MB, less than   91.91%
const rotate = (nums, k) => {
  nums.push(...nums.splice(0, nums.length - (k % nums.length)));
  return nums;
};
//
// Runtime:        195 ms, faster than 11.77%   |    221 ms, faster than  5.01%   |    140 ms, faster than 66.27%
// Memory Usage:  59.6 MB, less than    5.01%   |   59.7 MB, less than    5.01%   |   59.6 MB, less than    5.01%
{
  const rotate = (nums, k) => {
    for (let i = nums.length - 1; i >= 0; i--) nums[i + k] = nums[i];
    for (let j = k - 1; j >= 0; j--) nums[j] = nums.pop();
    return nums;
  };
}
// **************************************************************************************************************** //

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotate([-1, -100, 3, 99], 2));

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:
// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

// Follow up:
// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?