// ************************************************************************************************************************ //
// ***************************************************   66. Plus One   *************************************************** //
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
// https://leetcode.com/problems/plus-one/
//
// Runtime:      60 ms,   faster than 92.98%
// Memory Usage: 41.8 MB, less than   86.76%
export default function plusOne(digits) {
  return Array.from(`${BigInt(digits.join('')) + BigInt(1)}`, (n) => parseInt(n));
}
//
// Runtime:       95 ms,   faster than 23.96%   |   76 ms,   faster than 54.78%   |   108 ms,  faster than 10.37%
// Memory Usage:  42.6 MB, less than    5.20%   |   42.3 MB,  less than  18.13%   |   42.3 MB, less than   32.87%
{
  const plusOne = (digits) => {
    return Array.from(`${BigInt(digits.join('')) + BigInt(1)}`, (n) => BigInt(n));
  };
}
//
// Runtime:      65 ms,   faster than 81.52%
// Memory Usage: 42.3 MB, less than   32.87%
{
  const plusOne = (digits) => {
    return Array.from(
      `${
        digits.reduce((prev, curr, idx) => (prev += BigInt(curr.toString() + '0'.repeat(digits.length - idx - 1))), BigInt(0)) +
        BigInt(1)
      }`,
      (n) => parseInt(n)
    );
  };
}
//
// Runtime:      82 ms,   faster than 43.23%   |   84 ms,   faster than 40.15%   |   58 ms,   faster than 95.08%
// Memory Usage: 42.3 MB, less than   32.87%   |   42.1 MB, less than   44.98%   |   42.6 MB, less than    5.20%
{
  const plusOne = (digits) => {
    return Array.from(
      `${
        digits.reduce((prev, curr, idx) => (prev += BigInt(`${curr}` + '0'.repeat(digits.length - idx - 1))), BigInt(0)) + BigInt(1)
      }`,
      (n) => parseInt(n)
    );
  };
}
//
//
//
{
  const plusOne = (digits) => {
    let acc = BigInt(1);

    for (let i = 0; i < digits.length; i++) {
      acc += BigInt(`${digits[i]}` + '0'.repeat(digits.length - i - 1));
    }

    return Array.from(`${acc}`, (n) => parseInt(n));
  };
}
//
//
//
{
  const plusOne = (digits) => {
    let acc = BigInt(1);

    for (let i = 0, d = '0'.repeat(digits.length - i - 1); i < digits.length; i++, d = d.slice(0, d.length - 1)) {
      acc += BigInt(`${digits[i]}` + d);
    }

    return Array.from(`${acc}`, (n) => parseInt(n));
  };
}
// ************************************************************************************************************************ //

// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([9]));
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));