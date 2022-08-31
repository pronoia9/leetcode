// **************************************   287. Find the Duplicate Number   ************************************** //
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.
// https://leetcode.com/problems/find-the-duplicate-number/
//
// @param {number[]} nums
// @return {number}
//
// O(n) time  |  O(1) space
// Runtime:        142 ms, faster than 54.86%   |   130 ms, faster than 64.86%   |    134 ms, faster than 61.04%
// Memory Usage:  50.1 MB, less than   59.57%   |    50 MB, less than   67.44%   |   49.6 MB, less than   90.51%
const findDuplicate = (nums) => {
  let slow = 0, fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow == fast) {
      let slow2 = 0;
      while (true) {
        slow = nums[slow];
        slow2 = nums[slow2];
        if (slow == slow2) return slow;
      }
    }
  }
};
// **************************************************************************************************************** //

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));

// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2

// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3

// Constraints:
// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.

// Follow up:
// How can we prove that at least one duplicate number must exist in nums?
// Can you solve the problem in linear runtime complexity?

// https://www.youtube.com/watch?v=wjYnzkAhcNk
// https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/