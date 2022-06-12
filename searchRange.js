// ***************************   34. Find First and Last Position of Element in Sorted Array   **************************** //
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
//
// Runtime:      121 ms,  faster than  5.89%   |   78 ms, faster than 56.92%   |   53 ms,   faster than 98.84%
// Memory Usage: 42.9 MB, less than   28.62%   |   43 MB, less than   17.37%   |   42.5 MB, less than   74.68%
{
  const searchRange = (nums, target) => {
    return [nums.indexOf(target), nums.lastIndexOf(target)];
  };
}
//
// Runtime:      96 ms,   faster than 27.70%
// Memory Usage: 42.7 MB, less than   53.31%
{
  const searchRange = (nums, target) => {
    const res = nums.reduce((prev, curr, idx) => {
      if (curr === target) prev.length < 2 ? prev.push(idx) : (prev[1] = idx);
      if (idx === nums.length - 1 && prev.length === 1) prev.push(prev[0]);
      return prev;
    }, []);

    return res.length === 2 ? res : [-1, -1];
  };
}
// ************************************************************************************************************************ //

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
// console.log(searchRange([], 0));
// console.log(searchRange([1], 1));
// console.log(searchRange([1, 3], 1));
// console.log(searchRange([3, 3, 3], 3));