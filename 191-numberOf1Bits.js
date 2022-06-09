// **********************************************   191. Number of 1 Bits   *********************************************** //
// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
// Note:
// Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
// https://leetcode.com/problems/number-of-1-bits/
// 
// Runtime:      78 ms,   faster than 70.17%
// Memory Usage: 41.7 MB, less than   99.55%
const hammingWeight = (n) => { 
  return n.toString(2).replace(/[^1]/g, '').length;
};
// ************************************************************************************************************************ //

// console.log(hammingWeight(00000000000000000000000000001011));
// console.log(hammingWeight(00000000000000000000000010000000));
// console.log(hammingWeight(11111111111111111111111111111101));