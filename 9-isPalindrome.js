// ***********************************************   9. Palindrome Number   *********************************************** //
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.
// https://leetcode.com/problems/palindrome-number/
//
// Runtime:       156 ms, faster than 95.15%
// Memory Usage:  51.3 MB, less than  44.78%
export default function isPalindrome(x) {
  return x.toString() === x.toString().split('').reverse().join('');
}
// ************************************************************************************************************************ //