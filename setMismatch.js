// ********************************************   645. Set Mismatch   ********************************************* //
// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
// You are given an integer array nums representing the data status of this set after the error.
// Find the number that occurs twice and the number that is missing and return them in the form of an array.
// https://leetcode.com/problems/set-mismatch/
//
// Runtime:        123 ms, faster than 46.22%
// Memory Usage:  49.2 MB, less than   27.79%
{
  const findErrorNums = (nums) => {
    let duplicate;
    const len = nums.length,
      total = ((len + 1) * len) / 2,
      set = new Set(),
      sum = nums.reduce((acc, num) => (set.has(num) ? (duplicate = num) : set.add(num), (acc += num)), 0);
    return [duplicate, total - (sum - duplicate)];
  };
}
//
// Runtime:        116 ms, faster than 52.87%   |     86 ms, faster than 88.82%   |     83 ms, faster than 91.54%
// Memory Usage:  50.4 MB, less than   14.50%   |   49.5 MB, less than   26.59%   |   49.7 MB, less than   23.87%
const findErrorNums = (nums) => {
  let duplicate;
  const total = ((nums.length + 1) * nums.length) / 2, set = new Set(),
  sum = nums.reduce((acc, num) => (set.has(num) ? (duplicate = num) : set.add(num), (acc += num)), 0);
  return [duplicate, total - (sum - duplicate)];
};
// **************************************************************************************************************** //

console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
console.log(findErrorNums([2, 2]));

// Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]

// Example 2:
// Input: nums = [1,1]
// Output: [1,2]