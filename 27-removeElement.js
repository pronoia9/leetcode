// ************************************************   27. Remove Element   ************************************************ //
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
// https://leetcode.com/problems/remove-element/
//
// Runtime:       85 ms,    faster than 41.15%   |   63 ms,   faster than 87.66%
// Memory Usage:  41.8 MB,  less than   88.93%   |   41.9 MB, less than   71.96%
export default function removeElement (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] === val && nums.splice(i--, 1);

    // console.log('[', i, ']:', nums[i], 'vs', val);
    // console.log(nums);
  }
  return nums.length;
};
// console.log(removeElement([3, 2, 2, 3], 3));
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
// ************************************************************************************************************************ //
