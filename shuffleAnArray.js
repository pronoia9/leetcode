// *******************************************   384. Shuffle an Array   ****************************************** //
// Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.
// Implement the Solution class:
// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.
// https://leetcode.com/problems/shuffle-an-array/
//
// Runtime:        302 ms, faster than 16.16%   |   206 ms,  faster than 73.59%   |    155 ms, faster than 97.44%
// Memory Usage:  57.9 MB, less than   30.51%   |   57.9 MB, less than   30.77%   |   51.8 MB, less than   95.13%
class Solution {
  constructor(nums) { this.nums = nums; }
  reset() { return this.nums; }
  shuffle() {
    let res = [...this.nums];
    for (let i = 0; i < res.length; i++) {
      const rng = Math.floor(Math.random() * res.length);
      [res[i], res[rng]] = [res[rng], res[i]];
    }
    return res;
  }
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// **************************************************************************************************************** //

const s1 = new Solution([1, 2, 3]);

console.log(s1.nums);
console.log(s1.shuffle());
console.log(s1.reset());
console.log(s1.shuffle());
console.log(s1.nums);

// Example 1:
// Input
// ["Solution", "shuffle", "reset", "shuffle"]
// [[[1, 2, 3]], [], [], []]
// Output
// [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]
// Explanation
// Solution solution = new Solution([1, 2, 3]);
// solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
// Any permutation of [1,2,3] must be equally likely to be returned.
// Example: return [3, 1, 2]
// solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
// solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]

// Constraints:
// 1 <= nums.length <= 50
// -106 <= nums[i] <= 106
// All the elements of nums are unique.
// At most 104 calls in total will be made to reset and shuffle.