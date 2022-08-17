// ************************************   33. Search in Rotated Sorted Array   ************************************ //
// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.
// https://leetcode.com/problems/search-in-rotated-sorted-array/
//
// Runtime:         97 ms, faster than 37.56%   |     95 ms, faster than 41.28%
// Memory Usage:  42.3 MB, less than   32.06%   |   42.2 MB, less than   55.87%
{
  const search = (nums, target) => nums.indexOf(target);
}
//
// Runtime:         79 ms, faster than 69.34%   |     69 ms, faster than 85.90%
// Memory Usage:  42.3 MB, less than   32.06%   |   41.8 MB, less than   93.19%
{
  const search = (nums, target) => {
    const start = target >= nums[0];
    let pivot;

    // IF START:  for (let i = 0; i < nums.length - 1; i++)
    // IF !START: for (let i = nums.length - 1; i >= 0; i--)
    for (let i = start ? 0 : nums.length - 1; (start ? i < nums.length : i >= 0) && !pivot; start ? i++ : i--) {
      if (start && nums[i] > nums[i + 1]) pivot = i;
      else if (!start && nums[i] > nums[i + 1]) pivot = i;
      if (nums[i] === target) return i;
    }
    return -1;
  };
}
//
// Binary Search
// Runtime:        102 ms, faster than 29.02%   |     67 ms, faster than 88.39%   |    107 ms, faster than 21.51%
// Memory Usage:  41.8 MB, less than   87.56%   |   42.1 MB, less than   55.87%   |   41.5 MB, less than   98.28%
const search = (nums, target) => {
  let left = 0, middle, right = nums.length - 1;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    // if we got a result
    if (target == nums[middle]) return middle;
    // left sorted portion
    if (nums[left] <= nums[middle]) {
      if (target > nums[middle] || target < nums[left]) left = middle + 1;
      else right = middle - 1;
    }
    // right sorted poriton
    else {
      if (target < nums[middle] || target > nums[right]) right = middle - 1;
      else left = middle + 1;
    }
  }
  return -1;
};
// **************************************************************************************************************** //

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 5));
console.log(search([3, 5, 1], 3));

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:
// Input: nums = [1], target = 0
// Output: -1

// Constraints:
// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -104 <= target <= 104

// https://www.youtube.com/watch?v=U8XENwh8Oy8
