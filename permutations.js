// *********************************************   46. Permutations   ********************************************* //
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
// https://leetcode.com/problems/permutations/
//
const permute = (nums) => {};
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