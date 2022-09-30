// ********************************************   56. Merge Intervals   ******************************************* //
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
// https://leetcode.com/problems/merge-intervals/
//
/** @param {number[][]} intervals **/ /** @return {number[][]} **/
//
// O(nlogn) time
// Runtime:        111 ms, faster than 90.06%
// Memory Usage:  48.3 MB, less than   94.33%
const merge = (intervals) => {
  intervals.sort(([a1, b1], [a2, b2]) => a1 - a2);
  const res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i], lastEnd = res[res.length - 1][1];
    if (start <= lastEnd) res[res.length - 1][1] = Math.max(lastEnd, end);
    else res.push(intervals[i]);
  }
  return res;
};
// **************************************************************************************************************** //

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(merge([[1, 4], [4, 5]]));

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:
// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104