// ************************************************   344. Reverse String   *********************************************** //
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.z
// https://leetcode.com/problems/reverse-string/
//
// Runtime:        197 ms, faster than  8.44%   |    148 ms, faster than 41.88%   |    135 ms, faster than 57.13%
// Memory Usage:  49.3 MB, less than   66.06%   |   50.1 MB, less than   14.34%   |   49.9 MB, less than   16.68%
{
  const reverseString = (s) => s.reverse();
}
//
// Runtime:      133 ms, faster than 59.15%   |    100 ms, faster than 90.12%
// Memory Usage:  50 MB, less than   16.68%   |   49.8 MB, less than   25.01%
{
  const reverseString = (s) => {
    for (let i = 0, j = s.length - 1; i < s.length / 2; i++, j--) {
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;
    }
    return s;
  };
}
//
// Runtime:        166 ms, faster than 23.33%   |    112 ms, faster than 78.20%   |    112 ms, faster than 78.20%
// Memory Usage:  49.1 MB, less than   74.70%   |   49.5 MB, less than   47.25%   |   49.3 MB, less than   66.06%
const reverseString = (s) => {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
};
// ************************************************************************************************************************ //

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.