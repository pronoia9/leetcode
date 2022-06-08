// ***************************   34. Find First and Last Position of Element in Sorted Array   **************************** //
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
//
// Runtime:       121 ms,  faster than  5.89%
// Memory Usage:  42.9 MB, less than   28.62%
const searchRange = (nums, target) => {
  return [nums.indexOf(target), nums.lastIndexOf(target)];
};
// ************************************************************************************************************************ //

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));