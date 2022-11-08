// ****************************   3. Longest Substring Without Repeating Characters   ***************************** //
// Given a string s, find the length of the longest substring without repeating characters.
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
//
// Runtime:       104 ms,  faster than 77.99%
// Memory Usage:  47.3 MB, less than   67.93%
export default function lengthOfLongestSubstring (s) {
  let longest = '',
    result = '';
  for (let i = 0; i < s.length; i++) {
    if (!longest.includes(s[i])) {
      longest = longest + s[i];
    } else {
      longest = longest.slice(longest.indexOf(s[i]) + 1, longest.length) + s[i];
    }
    result.length < longest.length && (result = longest);
  }
  return result.length;
};
// **************************************************************************************************************** //