// ******************************************   58. Length of Last Word   ***************************************** //
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
// https://leetcode.com/problems/length-of-last-word/
//
// Runtime:         79 ms, faster than 62.65%
// Memory Usage:  42.3 MB, less than   19.26%
{ const lengthOfLastWord = (s) => s.split(' ').filter((n) => n).pop().length; }
//
// Runtime:         85 ms, faster than 51.91%   |     70 ms, faster than 79.96%
// Memory Usage:  42.2 MB, less than   42.10%   |   42.1 MB, less than   54.46%
{ const lengthOfLastWord = (s) => s.trimEnd().split(' ').pop().length; }
//
// Runtime:        107 ms, faster than 16.30%   |     67 ms, faster than 84.73%
// Memory Usage:  41.9 MB, less than   65.08%   |   42.2 MB, less than   31.42%
const lengthOfLastWord = (s) => {
  s = s.trimEnd();
  let cnt = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') cnt++;
    else return cnt;
  }
  return cnt;
}
// **************************************************************************************************************** //

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('luffy is still joyboy'));
console.log(lengthOfLastWord('a'));

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// Constraints:
// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.