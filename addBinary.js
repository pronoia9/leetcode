// https://leetcode.com/problems/add-binary/
//
// Runtime:        107 ms, faster than 37.11%
// Memory Usage:  42.6 MB, less than   75.08%
const addBinary = (a, b) => (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);

// https://www.javascripttutorial.net/es6/octal-and-binary-literals/
