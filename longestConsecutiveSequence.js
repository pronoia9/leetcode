// ****************************************   128. Longest Consecutive Sequence   ***************************************** //
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
// https://leetcode.com/problems/longest-consecutive-sequence/
//
const longestConsecutive = (nums) => {
};
// ************************************************************************************************************************ //

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