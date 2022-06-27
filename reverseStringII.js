// **********************************************   541. Reverse String II   ********************************************** //
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.
// https://leetcode.com/problems/reverse-string-ii/
//
// Runtime:         99 ms, faster than 41.04%   |    102 ms, faster than 36.10%   |     97 ms, faster than 44.16%
// Memory Usage:  45.7 MB, less than   34.29%   |   45.2 MB, less than   41.04%   |   45.8 MB, less than   34.29%
const reverseStr = (s, k) => {
  const arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (i % (k * 2) === 0) arr.splice(i, k, ...s.slice(i, i + k).split('').reverse())
  }
  return arr.join('');
};
// ************************************************************************************************************************ //

console.log(reverseStr('abcdefg', 2));
console.log(reverseStr('abcd', 2));
console.log(reverseStr('abcdef', 3));

// Example 1:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// Example 2:
// Input: s = "abcd", k = 2
// Output: "bacd"