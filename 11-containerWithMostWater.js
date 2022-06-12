// ******************************************   11. Container With Most Water   ******************************************* //
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.
// https://leetcode.com/problems/container-with-most-water/
//
// Runtime:      163 ms, faster than 6.85%
// Memory Usage:  49 MB, less than   97.18%
{
  const maxArea = (height) => {
    let first = 0;
    let last = height.length - 1;
    let area = 0;

    while (first < last) {
      let calc = (last - first) * Math.min(height[first], height[last]);
      calc > area && (area = calc);

      height[first] > height[last] ? last-- : first++;
    }

    return area;
  };
}
//
// Runtime:      134 ms,  faster than 17.74%   |   119 ms,  faster than 31.78%   |   136 ms, faster than 16.37%   |   88 ms, faster than 74.80% 
// Memory Usage: 49.6 MB, less than   51.97%   |   50.1 MB, less than   15.26%   |   50 MB,  less than   23.62%   |   49 MB, less than   95.16%
const maxArea = (height) => {
  let area = 0;
  for (let left = 0, right = height.length - 1; left < right; height[left] > height[right] ? right-- : left++) {
    let calc = (right - left) * Math.min(height[left], height[right]);
    calc > area && (area = calc);
  }
  return area;
};
//
// const maxArea = (height) => {
//   return height.reduce((prev, curr, idx) => {
//     for (let i = idx + 1; i < height.length; i++) {
//       const area = (i - idx) * (curr > height[i] ? height[i] : curr);
//       prev < area && (prev = area);
//     }
//     return prev;
//   }, 0);
// };
//
// const maxArea = (height) => {
//   return height.reduce((prev, curr, idx) => {
//     let area = height.slice(idx + 1).reduce((p, c, i) => {
//       let a = (i + 1) * (curr > c ? c : curr);
//       return p < a ? a : p;
//     }, 0);
//     return prev < area ? area : prev;
//   }, 0);
// };
// ************************************************************************************************************************ //
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([1, 1]));
// console.log(maxArea([4, 3, 2, 1, 4]));
// console.log(maxArea([2, 1]));
