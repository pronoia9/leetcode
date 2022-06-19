// *************************************************   283. Move Zeroes   ************************************************* //
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// https://leetcode.com/problems/move-zeroes/
//
// Runtime:       117 ms, faster than 66.08%   |   174 ms,  faster than 18.61%   |   83 ms,   faster than 98.88%
// Memory Usage: 46.6 MB, less than   68.72%   |   46.2 MB, less than   89.89%   |   45.9 MB, less than   99.13%
const moveZeroes = (nums) => {
  return nums.sort((a, b) => {
    if (a !== 0 && b === 0) return -1;
    if (a === 0 && b !== 0) return 1;
    return 0;
  })
};
// ************************************************************************************************************************ //

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
// console.log(moveZeroes());

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1, 3, 12, 0, 0]

// Example 2:
// Input: nums = [0]
// Output: [0]