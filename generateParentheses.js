// *****************************************   22. Generate Parentheses   ***************************************** //
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// https://leetcode.com/problems/generate-parentheses/
//
// Backtracking / Brute force
// Runtime:        103 ms, faster than 34.47%   |     92 ms, faster than 53.10%   |     78 ms, faster than 75.24%
// Memory Usage:  42.5 MB, less than   72.73%   |   42.8 MB, less than   51.90%   |   42.9 MB, less than   46.25%
const generateParenthesis = (n) => {
  const stack = [], res = [];
  
  const backtrack = (openN, closedN) => {
    // valid IIF open === closed === n
    if (openN === n && closedN === n) res.push(stack.join(''));
    // only add open parenthesis if open < n
    if (openN < n) {
      stack.push('(');
      backtrack(openN + 1, closedN);
      stack.pop();
    }
    // only add closed parenthesis if closed < open
    if (closedN < openN) {
      stack.push(')');
      backtrack(openN, closedN + 1);
      stack.pop();
    }
  };

  backtrack(0, 0);
  return res;
};
// **************************************************************************************************************** //

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

// Constraints:
// 1 <= n <= 8

// https://www.youtube.com/watch?v=s9fokUqJ76A