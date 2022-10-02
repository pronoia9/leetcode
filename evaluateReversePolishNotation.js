// ***********************************   150. Evaluate Reverse Polish Notation   ********************************** //
// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
// Note that division between two integers should truncate toward zero.
// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.
// https://leetcode.com/problems/evaluate-reverse-polish-notation/
//
/** @param {string[]} tokens **/ /** @return {number} **/
//
// O(n) time, O(n) space
// Runtime:        106 ms, faster than 65.95%   |     79 ms, faster than 91.91%
// Memory Usage:  44.6 MB, less than   79.75%   |   44.5 MB, less than   79.75%
const evalRPN = (tokens) => {
  const stack = [], eval = { "+": (a, b) => a + b, "-": (a, b) => a - b, "*": (a, b) => a * b, "/": (a, b) => ~~(a / b) };
  for (const curr of tokens) {
    if (eval[curr]) {
      const second = stack.pop(), first = stack.pop();
      stack.push(eval[curr](first, second));
    }
    else stack.push(parseInt(curr));
  }
  return stack[0];
};
// **************************************************************************************************************** //

console.log(evalRPN(['2', '1', '+', '3', '*']));
console.log(evalRPN(['4', '13', '5', '/', '+']));
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));

// Example 1:
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Example 2:
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// Example 3:
// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

// Constraints:
// 1 <= tokens.length <= 104
// tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].