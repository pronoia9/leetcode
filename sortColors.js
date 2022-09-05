// **********************************************   75. Sort Colors   ********************************************* //
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.
// https://leetcode.com/problems/sort-colors/
//
/** @param {number[]} nums **/
/** @return {void} Do not return anything, modify nums in-place instead. **/
//
// O(n) time  |  O(1) space
// Runtime:        134 ms, faster than 5.01%   |     57 ms, faster than 98.37%   |     84 ms, faster than 60.61%
// Memory Usage:  42.3 MB, less than  40.67%   |   42.3 MB, less than   40.67%   |   42.4 MB, less than   28.47%
const sortColors = (nums) => {
  let left = 0, right = nums.length - 1;
  for (let i = left; i <= right; i++) {
    // left case
    if (nums[i] == 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
    }
    // right case
    else if (nums[i] == 2) {
      [nums[right], nums[i]] = [nums[i], nums[right]];
      right--;
      i--;
    }
  }
  return nums;
};
// **************************************************************************************************************** //

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

// Constraints:
// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.

// Follow up: Could you come up with a one-pass algorithm using only constant extra space?