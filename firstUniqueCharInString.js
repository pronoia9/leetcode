// **********************************   387. First Unique Character in a String   ********************************* //
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// https://leetcode.com/problems/first-unique-character-in-a-string/
//
// Runtime:       150 ms, faster than 44.98%   |   106 ms,  faster than 89.07%
// Memory Usage: 44.7 MB, less than   90.60%   |   44.2 MB, less than   99.56%
const firstUniqChar = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }

  return -1;
};
// **************************************************************************************************************** //

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));