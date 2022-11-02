// **********************************   821. Shortest Distance to a Character   *********************************** //
// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.
// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.
// https://leetcode.com/problems/shortest-distance-to-a-character/
//
// Runtime:      117 ms, faster than 34.89%   |    109 ms, faster than 45.68%   |    113 ms, faster than 39.93%
// Memory Usage:  49 MB, less than    5.04%   |   48.9 MB, less than    5.04%   |   48.7 MB, less than    5.04%
{
  const shortestToChar = (s, c) => {
    const str = s.split('');
    const res = [];
    const find = [];

    for (let i = 0; i < str.length; i++) {
      str[i] === c && find.push(i);
    }

    for (let i = 0; i < str.length; i++) {
      res.push(Math.min(...find.map((ele) => Math.abs(ele - i))));
    }

    return res;
  };
}
//
// Runtime:        107 ms, faster than 48.20%   |     85 ms, faster than 79.50%
// Memory Usage:  49.2 MB, less than    5.04%   |   49.3 MB, less than    5.04%
const shortestToChar = (s, c) => {
  const res = [];
  const find = [];

  for (let i = 0; i < s.length; i++) {
    s[i] === c && find.push(i);
  }

  for (let i = 0; i < s.length; i++) {
    res.push(Math.min(...find.map((ele) => Math.abs(ele - i))));
  }

  return res;
};
// **************************************************************************************************************** //

console.log(shortestToChar('loveleetcode', 'e'));
console.log(shortestToChar('aaab', 'b'));

// Example 1:
// Input: s = "loveleetcode", c = "e"
// Output: [3,2,1,0,1,0,0,1,2,2,1,0]
// Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
// The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
// The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
// For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
// The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.

// Example 2:
// Input: s = "aaab", c = "b"
// Output: [3,2,1,0]