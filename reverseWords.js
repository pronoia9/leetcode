// ****************************************   557. Reverse Words in a String III   **************************************** //
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
// https://leetcode.com/problems/reverse-words-in-a-string-iii/
//
// Runtime:      109 ms, faster than 47.44%   |   111 ms, faster than 44.50%   |   106 ms,  faster than 51.45%
// Memory Usage:  48 MB, less than   93.63%   |    48 MB, less than   93.63%   |   48.2 MB, less than   73.49%
const reverseWords = (s) => {
  const arr = s.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('').reverse().join('');
  }

  return arr.join(' ');
};
// ************************************************************************************************************************ //

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords('God Ding'));

// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
// Input: s = "God Ding"
// Output: "doG gniD"