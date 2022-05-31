// **************************************   26. Remove Duplicates from Sorted Array   ************************************* //
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// 
// Runtime:       115 ms,   faster than 48.41%   |   133 ms,  faster than 36.09%   |   116 ms,  faster than 47.72%
// Memory Usage:  44.2 MB,  less than   95.50%   |   45 MB,   less than   37.54%   |   44.5 MB, less than   82.00%
const removeDuplicates = (nums) => {
  return nums.reduce((prev, curr, idx) => {
    nums.splice(idx, nums.lastIndexOf(curr) - idx);
    !prev.includes(curr) && (prev += curr);
    return prev;
  }, `${nums[0]}`).length;
};

// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// ************************************************************************************************************************ //