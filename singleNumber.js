// ************************************************   136. Single Number   ************************************************ //
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// https://leetcode.com/problems/single-number/
//
// Runtime:      1536 ms, faster than  5.01%
// Memory Usage: 43.4 MB, less than   73.62%
{
  const singleNumber = (nums) => nums.filter((n) => nums.indexOf(n) === nums.lastIndexOf(n))[0];
}
//
// Runtime:      1221 ms, faster than  5.01%   |   1191 ms, faster than 5.01%
// Memory Usage: 43.4 MB, less than   73.62%   |   43.2 MB, less than  86.08%
{
  const singleNumber = (nums) => {
    for (let i = 0; i < nums.length; i++) {
      if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) return nums[i];
    }
  };
}
//
// Runtime:      1247 ms, faster than 5.01%
// Memory Usage: 42.9 MB, less than  92.22%
{
  const singleNumber = (nums) => nums.find((num) => nums.indexOf(num) === nums.lastIndexOf(num));
}
//
const singleNumber = (nums) => {}
// ************************************************************************************************************************ //

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
