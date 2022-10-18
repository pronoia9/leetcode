// ****************************************   239. Sliding Window Maximum   *************************************** //
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
// Return the max sliding window.
// https://leetcode.com/problems/sliding-window-maximum/
// 
/** @param {number[]} nums **/ /** @param {number} k **/ /** @return {number[]} **/
//
// O(n) time
// untime:         700 ms, faster than 68.27%   |   572 ms, faster than 80.55%   |    343 ms, faster than 98.06%
// Memory Usage:  91.1 MB, less than    44.94   |    92 MB, less than   22.05%   |   78.4 MB, less than   88.67%
const maxSlidingWindow = (nums, k) => {
  const q = [], res = [];
  for (let i = 0; i < nums.length; i++) {
    while (q && nums[q[q.length - 1]] <= nums[i]) q.pop();
    q.push(i);
    // remove first element if its outside the window
    if (q[0] === i - k) q.shift();
    // if window has k elements add to results (first k-1 windows have a < k elements b/c we start from empty window and add 1 element each loop)
    if (i >= k - 1) res.push(nums[q[0]]);
  }
  return res;
};
// **************************************************************************************************************** //

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));
console.log(maxSlidingWindow([1, -1], 1));

// Example 1:
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length