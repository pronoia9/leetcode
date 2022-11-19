// ********************************************   268. Missing Number   ******************************************* //
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// https://leetcode.com/problems/missing-number/
//
// Runtime:        417 ms, faster than 12.12%   |    416 ms, faster than 12.18%
// Memory Usage:  44.3 MB, less than   67.85%   |   43.9 MB, less than   89.30%
{
  const missingNumber = (nums) => {
    const max = nums.length;
    for (let i = 0; i <= max; i++) {
      if (!nums.includes(i)) return i;
    }
    return max + 1;
  };
}
//
// Runtime:        419 ms, faster than 11.96%   |   471 ms, faster than 8.73%
// Memory Usage:  44.2 MB, less than   76.58%   |    44 MB, less than  89.30%
{
  const missingNumber = (nums) => {
    const max = nums.length;
    for (let i = 0; i <= max; i++) {
      if (!nums.includes(i)) return i;
    }
    return max + 1;
  };
}
//
// Runtime:        596 ms, faster than 5.00%   |    652 ms, faster than  5.00%
// Memory Usage:  43.8 MB, less than  93.85%   |   44.1 MB, less than   83.86%
{
  const missingNumber = (nums) => {
    const map = new Map(Object.entries({ yes: [...nums], no: nums.length }));
    for (let i = 0; i < nums.length; i++) {
      !map.get('yes').includes(i) && map.set('no', i);
    }
    return map.get('no');
  };
}
//
// Runtime:         87 ms, faster than 75.45%
// Memory Usage:  44.2 MB, less than   76.58%
const missingNumber = (nums) => {
  const numbers = new Array(nums.length + 1).fill(false);
  for (let i = 0; i < nums.length; i++) {
    numbers[nums[i]] = true;
  }
  return numbers.indexOf(false);
};
// **************************************************************************************************************** //

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// Constraints:
// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?