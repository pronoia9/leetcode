// ************************************   84. Largest Rectangle in Histogram   ************************************ //
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
// https://leetcode.com/problems/largest-rectangle-in-histogram/
//
/** @param {number[]} heights **/ /** @return {number} **/
//
// O(n) time, O(n) space
// Runtime:        185 ms, faster than 46.78%   |    177 ms, faster than 51.96%
// Memory Usage:  71.7 MB, less than   22.92%   |   71.3 MB, less than   23.31%
{
  const largestRectangleArea = (heights) => {
    const stack = [];
    let maxArea = 0;
    for (let i = 0, h = heights[i]; i < heights.length; i++, h = heights[i]) {
      let start = i;
      while (stack.length && stack[stack.length - 1][1] > h) {
        const [index, height] = stack.pop();
        maxArea = Math.max(maxArea, height * (i - index));
        start = index;
      }
      stack.push([start, h]);
    }
    for (const [i, h] of stack)  maxArea = Math.max(maxArea, h * (heights.length - i));
    return maxArea;
  };
}
//
// Runtime:        160 ms, faster than 64.21%   |    150 ms, faster than 72.45%
// Memory Usage:  70.4 MB, less than   25.35%   |   70.4 MB, less than   24.96%
const largestRectangleArea = (heights) => {
  heights.push(0);
  let stack = [], maxArea = 0;
  for (let i = 0, h = heights[i]; i < heights.length; i++, h = heights[i]) {
    let start = i;
    while (stack.length && stack[stack.length - 1][1] > h) {
      const [index, height] = stack.pop();
      maxArea = Math.max(maxArea, height * (i - index));
      start = index;
    }
    stack.push([start, h]);
  }
  return maxArea;
};
// **************************************************************************************************************** //

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleArea([2, 4]));

// Example 1:
// https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg
// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

// Example 2:
// https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg
// Input: heights = [2,4]
// Output: 4

// Constraints:
// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104