// ***************************************   121. Best Time to Buy and Sell Sto******************************************** //
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
//
// Runtime:      137 ms,  faster than 26.52%
// Memory Usage: 51.6 MB, less than   78.69%
{
  const maxProfit = (prices) => {
    let leastPrice = prices[0],
      possibleProfit = 0;
    return prices.reduce((profit, currPrice) => {
      if (currPrice < leastPrice) leastPrice = currPrice;
      possibleProfit = currPrice - leastPrice;
      if (possibleProfit > profit) profit = possibleProfit;
      return profit;
    }, 0);
  };
}
//
// Runtime:      154 ms,  faster than 12.81%   |   111 ms,  faster than 56.87%
// Memory Usage: 51.5 MB, less than   78.69%   |   51.5 MB, less than   78.69%
const maxProfit = (prices) => {
  let leastPrice = prices[0];
  return prices.reduce((profit, currPrice) => {
    if (currPrice < leastPrice) leastPrice = currPrice;
    let possibleProfit = currPrice - leastPrice;
    if (possibleProfit > profit) profit = possibleProfit;
    return profit;
  }, 0);
};
// ************************************************************************************************************************ //

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 1, 4]));
console.log(maxProfit([3, 3]));
console.log(maxProfit([1, 2, 4]));
console.log(maxProfit([1, 2]));

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
