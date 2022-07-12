// ********************************************   473. Matchsticks to Square   ******************************************** //
// You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.
// Return true if you can make this square and false otherwise.
// https://leetcode.com/problems/matchsticks-to-square/
// 
// Runtime:         58 ms, faster than 100.00%
// Memory Usage:  42.7 MB, less than    60.87%
const makesquare = (matchsticks) => {
  const total = matchsticks.sort((a, b) => b - a).reduce((acc, curr) => (acc += curr), 0), side = total / 4, len = matchsticks.length;

  if (total % 4 !== 0 || matchsticks[0] > side) return false;

  const backTrack = (i, space, done) => {
    if (done === 3) return true;

    for (; i < len; i++) {
      let num = matchsticks[i], res;

      if (num > space) continue;

      matchsticks[i] = side + 1;

      if (num === space) res = backTrack(1, side, done + 1);
      else res = backTrack(i + 1, space - num, done);

      if (res) return true;
      matchsticks[i] = num;

      while (matchsticks[i + 1] === num) i++;
    }
    return false;
  }

  return backTrack(0, side, 0);
}
// ************************************************************************************************************************ //

console.log(makesquare([1, 1, 2, 2, 2]));
console.log(makesquare([3, 3, 3, 3, 4]));

// Example 1:
// Input: matchsticks = [1,1,2,2,2]
// Output: true
// Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.

// Example 2:
// Input: matchsticks = [3,3,3,3,4]
// Output: false
// Explanation: You cannot find a way to form a square with all the matchsticks.