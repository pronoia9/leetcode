// ***************************************   76. Minimum Window Substring   *************************************** //
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.
// A substring is a contiguous sequence of characters within the string.
// https://leetcode.com/problems/minimum-window-substring/
//
/** @param {string} s **/ /** @param {string} t **/ /** @return {string} **/
//
// O(n) time, O(n) space
// Runtime:      102 ms, faster than 90.07%   |    162 ms, faster than 50.63%   |     90 ms, faster than 96.67%
// Memory Usage:  45 MB, less than   79.67%   |   45.7 MB, less than   62.04%   |   45.6 MB, less than   64.52%
const minWindow = (s, t) => {
  if (!t.length) return '';

  const countT = {}; /* Object.fromEntries(Array.from({ length: t.length }, (v, i) => [t[i], 1])) */
  for (const c of t) countT[c] = countT[c] + 1 || 1;
  let l = 0,  res = [], resLen = Infinity, have = 0;

  for (let r = 0, c = s[r]; r < s.length; r++, c = s[r]) {
    if (c in countT) {
      countT[c]--;
      if (countT[c] >= 0) have++;
    }

    while (have == t.length) {
      // update result
      if (r - l + 1 < resLen) {
        res = [l, r]
        resLen = r - l + 1;
      }

      if (s[l] in countT) {
        // pop from the left of window
        if (countT[s[l]] === 0) have--;
        countT[s[l]]++;
      }
      l++;
    }
  }

  return s.slice(res[0], res[1] + 1);
};
// **************************************************************************************************************** //

console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('a', 'a'));
console.log(minWindow('a', 'aa'));

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:
// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.

// Follow up: Could you find an algorithm that runs in O(m + n) time?