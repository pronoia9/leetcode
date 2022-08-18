// *********************************************   46. Permutations   ********************************************* //
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
// https://leetcode.com/problems/permutations/
//
// Backtracking
// Runtime:         99 ms, faster than 68.55%   |     91 ms, faster than 78.28%
// Memory Usage:  45.6 MB, less than   19.01%   |   44.8 MB, less than   76.20%
const permute = (nums) => {
  const result = [];

  function backtrack(stack, nums) {
    if (!nums.length) result.push(stack);
    for (let i = 0; i < nums.length; i++) {
      backtrack([...stack, nums[i]], [...nums.slice(0, i), ...nums.slice(i + 1)]);
    }
  }
  backtrack([], nums);

  return result;
};
// **************************************************************************************************************** //

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]

// Constraints:
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

// https://www.youtube.com/watch?v=s7AvT7cGdSo
// https://leetcode.com/problems/permutations/discuss/654378/JavaScript-Simple-Backtracking-Solution