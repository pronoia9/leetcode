// *********************************************   575. Distribute Candies   ********************************************** //
// Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.
// The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.
// Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.
// https://leetcode.com/problems/distribute-candies/
//
// Runtime:       3380 ms, faster than 5.55%   |   3568 ms, faster than 5.55%
// Memory Usage:  51.8 MB, less than  98.89%   |   52.1 MB, less than  93.89%
{
  const distributeCandies = (candyType) => {
    const diet = candyType.length / 2;
    const totalTypes = candyType.reduce((types, curr) => (!types.includes(curr) && types.push(curr), types), []).length;
    return diet <= totalTypes ? diet : totalTypes;
  };
}
//
// Runtime:        228 ms, faster than 28.89%   |   166 ms,  faster than 60.83%   |   119 ms,  faster than 93.89%
// Memory Usage:  56.2 MB, less than   66.39%   |   56.3 MB, less than   45.28%   |   56.4 MB, less than   36.11%
{
  const distributeCandies = (candyType) => {
    const diet = candyType.length / 2;
    const totalTypes = candyType.reduce((types, curr) => types.add(curr), new Set()).size;
    return diet <= totalTypes ? diet : totalTypes;
  };
}
//
// Runtime:        248 ms, faster than 28.69%   |   177 ms,  faster than 59.50%   |   176 ms,  faster than 60.06%
// Memory Usage:  56.4 MB, less than   36.61%   |   56.3 MB, less than   45.63%   |   56.3 MB, less than   55.31%
const distributeCandies = (candyType) => Math.min(candyType.length / 2, new Set(candyType).size);
// ************************************************************************************************************************ //

console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
console.log(distributeCandies([1, 1, 2, 3]));
console.log(distributeCandies([6, 6, 6, 6]));

// Example 1:
// Input: candyType = [1,1,2,2,3,3]
// Output: 3
// Explanation: Alice can only eat 6 / 2 = 3 candies.Since there are only 3 types, she can eat one of each type.

// Example 2:
// Input: candyType = [1,1,2,3]
// Output: 2
// Explanation: Alice can only eat 4 / 2 = 2 candies.Whether she eats types[1, 2], [1, 3], or[2, 3], she still can only eat 2 different types.

// Example 3:
// Input: candyType = [6,6,6,6]
// Output: 1
// Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.