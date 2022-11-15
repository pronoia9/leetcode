// ******************************************   88. Merge Sorted Array   ****************************************** //
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
// https://leetcode.com/problems/merge-sorted-array/
//
// Runtime:      96 ms,   faster than 25.13%   |   68 ms,   faster than 76.46%   |   79 ms,   faster than 51.54%
// Memory Usage: 42.3 MB, less than   28.54%   |   42.3 MB, less than   28.54%   |   42.2 MB, less than   55.42%
{
  const merge = (nums1, m, nums2, n) => {
    for (let i = m; i < nums1.length; i++) {
      nums1[i] = nums2[i - m];
    }
    nums1.sort((a, b) => a - b);
  };
}
//
// Runtime:      88 ms,   faster than 36.85%   |   101 ms,  faster than 19.04%   |   95 ms,   faster than 26.41%
// Memory Usage: 41.9 MB, less than   85.49%   |   42.1 MB, less than   68.20%   |   42.1 MB, less than   68.20%
{
  const merge = (nums1, m, nums2, n) => {
    nums1.splice(m, n, ...nums2);
    nums1.sort((a, b) => a - b);
  };
}
// **************************************************************************************************************** //

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));