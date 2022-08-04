// ****************************************   350. Intersection of Two Arrays II   **************************************** //
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
// https://leetcode.com/problems/intersection-of-two-arrays-ii/
//
// Runtime:        101 ms, faster than 47.31%   |     71 ms, faster than 90.91%
// Memory Usage:  44.2 MB, less than   34.05%   |   44.6 MB, less than   22.57%
const intersect = (nums1, nums2) => {
  if (nums1.length < nums2.length) {
    const temp = nums1; nums1 = nums2; nums2 = temp;
  }

  const map1 = new Map(), map2 = new Map(), common = [];
  nums1.forEach((num) => map1.set(num, (map1.get(num) || 0) + 1));
  nums2.forEach((num) => map2.set(num, (map2.get(num) || 0) + 1));

  map2.forEach((key, num) => {
    if (map1.has(num)) for (let i = 0; i < Math.min(map1.get(num), key); i++) { common.push(num); }
  });

  return common;
};
// ************************************************************************************************************************ //

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 2], [2, 1]));

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
