// ******************************************   42. Trapping Rain Water   ***************************************** //
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
// https://leetcode.com/problems/trapping-rain-water/
// 
/** @param {number[]} height **/ /** @return {number} **/
//
// O(n) time, O(1) space
// Runtime:        110 ms, faster than 55.12%   |    119 ms, faster than 40.51%   |     90 ms, faster than 79.04%
// Memory Usage:  42.9 MB, less than   81.96%   |   42.7 MB, less than   88.23%   |   42.9 MB, less than   81.96%
const trap = (height) => {
  if (!height) return 0;
  let l = 0, r = height.length - 1, maxL = height[l], maxR = height[r], res = 0;
  while (l < r) {
    if (maxL < maxR) {
      l++;
      maxL = Math.max(maxL, height[l]);
      res += maxL - height[l];
    }
    else {
      r--;
      maxR = Math.max(maxR, height[r]);
      res += maxR - height[r];
    }
  }
  return res;
};
// **************************************************************************************************************** //

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));

// Example 1:
// https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:
// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105