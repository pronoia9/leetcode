// *************************************************   15. 3Sum   ************************************************* //
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// https://leetcode.com/problems/3sum/
//
/** @param {number[]} nums **/ /** @return {number[][]} **/
//
// O(nlogn) + O(n^2) = O(n^2) time, O(1) space
// Runtime:        216 ms, faster than 70.72%   |    193 ms, faster than 79.82%
// Memory Usage:  52.7 MB, less than   60.69%   |   52.5 MB, less than   71.89%
{
  const threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < nums.length; i++) {
      const a = nums[i];
      if (i > 0 && a == nums[i - 1]) continue;
      let left = i + 1,
        right = nums.length - 1;
      while (left < right) {
        const sum = a + nums[left] + nums[right];
        if (sum > 0) right--;
        else if (sum < 0) left++;
        else {
          res.push([a, nums[left], nums[right]]);
          while (nums[left + 1] === nums[left]) left++;
          while (nums[right - 1] === nums[right]) right--;
          left++;
          right--;
        }
      }
    }

    return res;
  };
}
//
// Runtime:        131 ms, faster than 98.41%   |    207 ms, faster than 75.03%
// Memory Usage:  53.2 MB, less than   33.86%   |   52.8 MB, less than   54.42%
{
  const threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length; i++) {
      let left = i + 1,
        right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum < 0) left++;
        else if (sum > 0) right--;
        else if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          while (nums[left + 1] === nums[left]) left++;
          while (nums[right - 1] === nums[right]) right--;
          left++;
          right--;
        }
      }
      while (nums[i + 1] === nums[i]) i++;
    }

    return result;
  };
}
//
// Runtime:        143 ms, faster than 93.67%   |    130 ms, faster than 98.63%
// Memory Usage:  53.1 MB, less than   37.86%   |   52.4 MB, less than   71.89%
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) left++;
      else if (sum > 0) right--;
      else if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left + 1] === nums[left]) left++;
        while (nums[right - 1] === nums[right]) right--;
        left++;
        right--;
      }
    }
  }

  return result;
};
// **************************************************************************************************************** //

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105