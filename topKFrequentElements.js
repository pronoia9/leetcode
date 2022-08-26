// ***************************************   347. Top K Frequent Elements   *************************************** //
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// https://leetcode.com/problems/top-k-frequent-elements/
//
// Runtime:         99 ms, faster than 77.43%   |   86 ms, faster than 90.50%
// Memory Usage:  46.6 MB, less than   39.45%   |   46 MB, less than   48.11%
const topKFrequent = (nums, k) => {
  const map = new Map(), bucket = [], res = [];
  // add each number to map (and their count)
  for (let num of nums) { map.set(num, (map.get(num) || 0) + 1); }
  // add values to bucket per count: bucket[number count]: Set(values...)
  for (let [value, key] of map) { bucket[key] = (bucket[key] || new Set()).add(value); }
  // add the highest count of values (at the end of bucket) to results array
  for (let i = bucket.length - 1; i >= 0 && res.length < k; i--) if (bucket[i]) res.push(...bucket[i])
  return res;
};
// **************************************************************************************************************** //

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([1, 2], 2));
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

// https://www.youtube.com/watch?v=YPTqKIgVk-k
