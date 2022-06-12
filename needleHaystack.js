// **********************************************   28. Implement strStr()   ********************************************** //
// Implement strStr().
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
// https://leetcode.com/problems/implement-strstr/
//
// Runtime:       67 ms,    faster than 76.78% 
// Memory Usage:  41.6 MB,  less than   90.89%
{
  const strStr = (haystack, needle) => {
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle[0]) {
        if (haystack.slice(i, i + needle.length) == needle) return i;
      }
    }
    return -1;
  };
}
//
// Runtime:       58 ms,    faster than 94.83 %
// Memory Usage:  41.5 MB,  less than   94.65%
export default function strStr(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0] && haystack.slice(i, i + needle.length) == needle) return i;
  }
  return -1;
}
// ************************************************************************************************************************ //

// console.log(strStr('hello', 'll')); //  2
// console.log(strStr('aaaaa', 'bba')); // -1