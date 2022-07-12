// ******************************************   746. Min Cost Climbing Stairs   ******************************************* //
// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
// You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor.
// https://leetcode.com/problems/min-cost-climbing-stairs/
//
const minCostClimbingStairs = (cost) => {
  let first = cost[0], second = cost[1];
  const top = cost.length;
  if (top <= 2) return Math.min(first, second);

  for (let i = 2; i < top; i++) {
    const curr = Math.min(first, second) + cost[i];

    // console.log(curr);
    // console.log(first);
    // console.log(second);

    first = second;
    second = curr;

    // console.log(first);
    // console.log(second);
  }

  return Math.min(first, second);
};
// ************************************************************************************************************************ //

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));

// Example 1:
// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

// Example 2:
// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.