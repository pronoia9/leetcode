// **************************************   746. Min Cost Climbing Stairs   *************************************** //
// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
// You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor.
// https://leetcode.com/problems/min-cost-climbing-stairs/
//
// Runtime:      110 ms, faster than 31.22%   |    108 ms, faster than 34.45%
// Memory Usage:  42 MB, less than   97.05%   |   42.3 MB, less than   91.88%
const minCostClimbingStairs = (cost) => {
   if (cost.length === 1) return 0;
   if (cost.length === 2) return Math.min(cost[0], cost[1]);

   let costOne = cost[0], costTwo = cost[1];

   for (let i = 2; i < cost.length; i++) {
     const currCost = Math.min(costOne, costTwo) + cost[i];
     costOne = costTwo;
     costTwo = currCost;
   }

   return Math.min(costOne, costTwo);
};
// **************************************************************************************************************** //

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

// Constraints:
// 2 <= cost.length <= 1000
// 0 <= cost[i] <= 999