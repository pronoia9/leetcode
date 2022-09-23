// ***************************************   131. Palindrome Partitioning   *************************************** //
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
// A palindrome string is a string that reads the same backward as forward.
// https://leetcode.com/problems/palindrome-partitioning/
//
/** @param {string} s **/ /** @return {string[][]} **/
//
// Bruteforce, backtracking
// Runtime:        544 ms, faster than 15.58%   |    273 ms, faster than 91.88% 
// Memory Usage:  81.2 MB, less than   42.16%   |   63.1 MB, less than   91.88%
const isPalindrome = (str) => str === str.split('').reverse().join('');
const partition = (s) => {
  const res = [], part = [];
  const dfs = (i) => {
    if (i >= s.length) {
      res.push([...part]);
      return;
    }
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s.slice(i, j + 1))) {
        part.push(s.slice(i, j + 1));
        dfs(j + 1);
        part.pop();
      }
    }
  }
  dfs(0);
  return res;
};
// **************************************************************************************************************** //

console.log(partition('aab'));
console.log(partition('a'));

// Example 1:
// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

// Example 2:
// Input: s = "a"
// Output: [["a"]]

// Constraints:
// 1 <= s.length <= 16
// s contains only lowercase English letters.