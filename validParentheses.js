// ***********************************************   20. Valid Parentheses   ********************************************** //
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// https://leetcode.com/problems/valid-parentheses/
// validParentheses
// Runtime:       84 ms,    faster than 47.53%   |   102 ms,  faster than 23.88%   |   55 ms,   faster than 98.43%
// Memory Usage:  42.4 MB,  less than   47.32%   |   42.1 MB, less than   68.42%   |   41.8 MB, less than   90.14%
export default function validParentheses(str) {
  const map = new Map(Object.entries({ '}': '{', ']': '[', ')': '(' }));
  const openTags = ['(', '[', '{'];
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (openTags.includes(str[i])) {
      stack.push(str[i]);
    } else if (map.get(str[i]) !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};
// console.log(isValid('()'));
// console.log(isValid('()[]{}'));
// console.log(isValid('(]'));
// console.log(isValid('{[]}'));
// console.log(isValid('([)]'));
// console.log(`string:`, str.split(''), ` = '${str[i]}'`, `\nstack: `, stack, `\n`);
// ************************************************************************************************************************ //