// *************************************   5. Longest Palindromic Substring   ************************************* //
// Given a string s, return the longest palindromic substring in s.
// https://leetcode.com/problems/longest-palindromic-substring/
//
// Runtime:        191 ms, faster than 55.26%   |     90 ms, faster than 98.55%
// Memory Usage:  44.9 MB, less than   76.94%   |   44.7 MB, less than   79.55%
const longestPalindrome = (s) => {
  let len = s.length, longest = '';
  for (let i = 0; i < len; i++) {
    // odd palindrome
    for (let l = i, r = i; l >= 0 && r < len && s[l] === s[r]; l--, r++) {
      if (r - l + 1 > longest.length) longest = s.slice(l, r + 1);
    }
    // even palindrome
    for (l = i, r = i + 1; l >= 0 && r < len && s[l] === s[r]; l--, r++) {
      if (r - l + 1 > longest.length) longest = s.slice(l, r + 1);
    }
  }
  return longest;
};
// **************************************************************************************************************** //

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('bb'));

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.

// https://www.youtube.com/watch?v=XYQecbcd6_c
