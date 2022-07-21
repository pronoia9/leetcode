// ***********************************************   70. Climbing Stairs   ************************************************ //
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// https://leetcode.com/problems/climbing-stairs/
//
{
  const climbStairs = (n, rec = []) => {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (rec[n]) return rec[n];

    let res = climbStairs(n - 1, rec) + climbStairs(n - 2, rec);
    rec[n] = res;

    return res;
  };
}
//
// https://leetcode.com/problems/climbing-stairs/discuss/346943/Simple-Understandable-Fibonacci-Solution
{
  const climbStairs = (n) => {
    if (n <= 2) return n;

    // First two pointers store the first two numbers of the Fibonacci sequence
    let prev = 0,
      curr = 1;
    // Our third pointer is used to store one side while we update the above two pointers.
    let temp;
    // We use a for loop to iterate from 1 up to our number n with our constraints  being: 1 <= n <= 45
    for (let i = 0; i < n; i++) {
      // We store one side in our third pointer
      temp = prev;
      // We then update that side to be equal to the other pointer
      // This is because the next number is equal to the sum of the previous two numbers.
      prev = curr;
      // Next we add tmp which now holds our lower number to curr which holds our upper number to get our next number.
      curr += temp;
    }
    // Outside of our loop we return curr which stored our cumulative total while we iterated.
    return curr;
  };
}
//
// Runtime:         76 ms, faster than 66.43%   |    105 ms, faster than 16.69%   |   
// Memory Usage:  41.5 MB, less than   87.67%   |   41.5 MB, less than   93.05%   |   
const climbStairs = (n) => {
  if (n <= 2) return n;

  let prev = 2, sum = prev + 1;
  for (let i = prev + 1; i < n; i++) {
    sum += prev;
    prev = sum - prev;
  }
  return sum;
};
// ************************************************************************************************************************ //

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(10));

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  0  1  2  3  4  5  6  7  8  9
// [1, 1, 2, 3, 5, 8, 13, 21, 24, 55]
// [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:
// 1 <= n <= 45
