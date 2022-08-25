// ********************************************   49. Group Anagrams   ******************************************** //
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// https://leetcode.com/problems/group-anagrams/
//
// Runtime:        209 ms, faster than 48.62%   |    190 ms, faster than 62.42%   |    181 ms, faster than 69.35%
// Memory Usage:  52.4 MB, less than   90.52%   |   51.2 MB, less than   99.65%   |   52.7 MB, less than   82.71%
const groupAnagrams = (strs) => {
  const count = new Map();
  for (let i = 0; i < strs.length; i++) {
    const chars = strs[i].split('').sort().join('');
    count.set(chars, count.get(chars) ? [...count.get(chars), strs[i]] : [strs[i]]);
  }
  return Array.from(count.values());
};
// **************************************************************************************************************** //

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

// https://www.youtube.com/watch?v=vzdNOK2oB2E
