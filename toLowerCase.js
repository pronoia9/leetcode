// ************************************************   709. To Lower Case   ************************************************ //
// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
// https://leetcode.com/problems/to-lower-case/
//
// Runtime:         61 ms, faster than 92.81%
// Memory Usage:  42.2 MB, less than   39.56%
{const toLowerCase = (s) => s.toLowerCase();}
//
// Runtime:         55 ms, faster than 98.26%   |   68 ms,   faster than 80.86%   |   79 ms,   faster than 58.47%
// Memory Usage:  41.9 MB, less than   61.02%   |   42.3 MB, less than   28.54%   |   41.8 MB, less than   81.90%
const toLowerCase = (s) => s.replace(/[A-Z]/g, (match) => match.toLowerCase());
// ************************************************************************************************************************ //

console.log(toLowerCase('Hello'));
console.log(toLowerCase('here'));
console.log(toLowerCase('LOVELY'));

// Example 1:
// Input: s = "Hello"
// Output: "hello"

// Example 2:
// Input: s = "here"
// Output: "here"

// Example 3:
// Input: s = "LOVELY"
// Output: "lovely"