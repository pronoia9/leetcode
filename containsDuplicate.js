// ******************************************   217. Contains Duplicate   ***************************************** //
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// https://leetcode.com/problems/contains-duplicate/
//
// Runtime:     6824 ms, faster than  5.00%
// Memory Usage:  48 MB, less than   97.91%
{
  const containsDuplicate = (nums) => {
    for (let i = 0; i < nums.length; i++) {
      if (nums.lastIndexOf(nums[i]) !== i) return true;
    }
    return false;
  };
}
//
// Runtime:        129 ms, faster than 60.50%
// Memory Usage:  50.8 MB, less than   63.20%
const containsDuplicate = (nums) => nums.length !== new Set(nums).size;
// **************************************************************************************************************** //

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:
// 1 <= nums.length <= 105