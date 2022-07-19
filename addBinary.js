// **************************************************   67. Add Binary   ************************************************** //
// Given two binary strings a and b, return their sum as a binary string.
// https://leetcode.com/problems/add-binary/
//
// Runtime:        107 ms, faster than 37.11%
// Memory Usage:  42.6 MB, less than   75.08%
const addBinary = (a, b) => (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
// ************************************************************************************************************************ //

console.log(addBinary(11, 1));
console.log(addBinary(1010, 1011));

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:
// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

// https://www.javascripttutorial.net/es6/octal-and-binary-literals/