// **********************************************   771. Jewels and Stones   ********************************************** //
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
// https://leetcode.com/problems/jewels-and-stones/
//
// Runtime:         66 ms, faster than 92.28%
// Memory Usage:  42.1 MB, less than   83.86%
const numJewelsInStones = (jewels, stones) => {
  const map = new Map();
  stones.split('').forEach(stone => map.set(stone, 1 + (map.get(stone) || 0)));
  return jewels.split('').reduce((count, stone) => count += (map.get(stone) || 0), 0)
};
// ************************************************************************************************************************ //

console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));

// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0