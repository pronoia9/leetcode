// **********************************************   125. Valid Palindrome   *********************************************** //
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// https://leetcode.com/problems/valid-palindrome/
//
// Runtime:       70 ms,   faster than 94.75%
// Memory Usage:  45.9 MB, less than   52.56%
const isPalindrome = (s) => {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
};
// ************************************************************************************************************************ //

// console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('race a car'));
// console.log(isPalindrome('ab_a'));
// console.log(isPalindrome('0P'));
// console.log(isPalindrome(''));