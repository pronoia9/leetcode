// ************************************************   242. Valid Anagram   ************************************************ //
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// https://leetcode.com/problems/valid-anagram/
//
// Runtime:        137 ms, faster than 37.61%   |    105 ms, faster than 74.51%
// Memory Usage:  48.1 MB, less than   24.96%   |   49.1 MB, less than   12.17%
const isAnagram = (s, t) => s.split('').sort().join('') === t.split('').sort().join('');
//
// Runtime:       3302 ms, faster than  5.00%   |   3282 ms, faster than  5.00%
// Memory Usage:  47.4 MB, less than   32.38%   |   47.5 MB, less than   31.77%
{
  const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    t = t.split('');
    for (let i = 0; i < s.length; i++) {
      const idx = t.indexOf(s[i]);
      if (idx === -1) return false;
      else t.splice(idx, 1);
    }
    return true;
  };
}
//
// Runtime:        151 ms, faster than 25.62%   |    103 ms, faster than 76.52%
// Memory Usage:  47.9 MB, less than   28.41%   |   49.5 MB, less than    8.41%
{
  const isAnagram = (s, t) =>
    s.length !== t.length ? false : s.split('').sort().join('') === t.split('').sort().join('');
}
// ************************************************************************************************************************ //

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
