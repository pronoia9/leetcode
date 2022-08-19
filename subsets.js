// ************************************************   78. Subsets   *********************************************** //
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
// https://leetcode.com/problems/subsets/
//
// Backtracking
// Runtime:          90 ms, faster than 58.81%   |     72 ms, faster than 88.29%   |     77 ms, faster than 79.30%
// Memory Usage:   42.6 MB, less than   95.70%   |   43.3 MB, less than   64.99%   |   42.7 MB, less than   95.70%
const subsets = (nums) => {
  const len = nums.length, res = new Set(), subset = [];
  const dfs = (i) => {
    if (i >= len) {
      res.add([...subset]);
      return;
    }
    // decision to include nums[i]
    subset.push(nums[i]);
    dfs(i + 1);
    // decision NOT to include nums[i]
    subset.pop();
    dfs(i + 1);
  };
  dfs(0);
  return [...res];
};
// Runtime:        126 ms, faster than  9.66%   |    100 ms, faster than 41.13%   |     95 ms, faster than 50.73%
// Memory Usage:  43.2 MB, less than   70.11%   |   42.7 MB, less than   95.70%   |   42.6 MB, less than   97.51%
{
  const subsets = (nums) => {
    const len = nums.length,  res = [],  subset = [];
    const dfs = (i) => {
      if (i >= len) {
        res.push([...subset]);
        return;
      }
      // decision to include nums[i]
      subset.push(nums[i]);
      dfs(i + 1);
      // decision NOT to include nums[i]
      subset.pop();
      dfs(i + 1);
    };
    dfs(0);
    return res;
  };
}
// **************************************************************************************************************** //

console.log(subsets([1, 2, 3]));
// console.log(subsets([0]));

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
