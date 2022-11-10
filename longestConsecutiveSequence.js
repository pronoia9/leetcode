// *************************************   128. Longest Consecutive Sequenc   ************************************* //
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
// https://leetcode.com/problems/longest-consecutive-sequence/
//
// Runtime:        124 ms, faster than 86.68%   |    167 ms, faster than 67.27%   |    173 ms, faster than 64.86%
// Memory Usage:  58.1 MB, less than   44.04%   |   58.7 MB, less than   32.80%   |   58.5 MB, less than   33.44%
const longestConsecutive = (nums) => {
  if (nums.length < 1) return 0;
  let set = new Set(nums.sort((a, b) => a - b)), prev = null, count = [0];
  set.forEach(num => {
    if (num === prev + 1) count[count.length - 1]++;
    else count.push(1);
    prev = num;
  });
  return Math.max(...count);
};
// **************************************************************************************************************** //

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([]));
console.log(longestConsecutive([0]));
console.log(longestConsecutive([1, 2, 0, 1]));

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9