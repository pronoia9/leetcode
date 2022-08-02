// ************************************************   242. Valid Anagram   ************************************************ //
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// https://leetcode.com/problems/valid-anagram/
//
// Runtime:        137 ms, faster than 37.61%   |    105 ms, faster than 74.51%
// Memory Usage:  48.1 MB, less than   24.96%   |   49.1 MB, less than   12.17%
const isAnagram = (s, t) =>  s.split('').sort().join('') === t.split('').sort().join('');
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