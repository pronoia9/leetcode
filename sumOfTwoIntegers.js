// *****************************************   371. Sum of Two Integers   ***************************************** //
// Given two integers a and b, return the sum of the two integers without using the operators + and -.
// https://leetcode.com/problems/sum-of-two-integers/
//
/** @param {number} a **/ /** @param {number} b **/ /** @return {number} **/
//
const getSum = (a, b) => Array.from({ length: Math.max(a, b) }, () => 0).reduce((acc, curr) => ++acc, Math.min(a, b));
// **************************************************************************************************************** //

// console.log(getSum(1, 2));
console.log(getSum(2, 3));

// Example 1:
// Input: a = 1, b = 2
// Output: 3

// Example 2:
// Input: a = 2, b = 3
// Output: 5

// Constraints:
// -1000 <= a, b <= 1000