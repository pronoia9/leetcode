// *******************************   378. Kth Smallest Element in a Sorted Matrix   ******************************* //
// Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.
// Note that it is the kth smallest element in the sorted order, not the kth distinct element.
// You must find a solution with a memory complexity better than O(n2).
// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
//
const { MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
//
// @param {number[][]} matrix
// @param {number} k
// @return {number}
//
// Runtime:        156 ms, faster than 35.38%   |    169 ms, faster than 28.54%   |    126 ms, faster than 57.91%
// Memory Usage:  47.9 MB, less than   54.21%   |   47.3 MB, less than   69.98%   |   47.5 MB, less than   68.32%
const kthSmallest = (matrix, k) => matrix.flat().sort((a, b) => a - b)[k - 1];
//
// MinPriorityQueue
// Runtime:        299 ms, faster than  6.01%
// Memory Usage:  59.3 MB, less than    8.97%
{
  const kthSmallest = (matrix, k) => {
    const min = new MinPriorityQueue(); // can use fromArray in js
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        min.enqueue(matrix[i][j]);
      }
    }
    return min.toArray()[k - 1]; //.element;
  };
}
//
// MaxPriorityQueue
// Runtime:        195 ms, faster than 18.46%   |   187 ms, faster than 20.95%
// Memory Usage:  51.3 MB, less than   19.66%   |    51 MB, less than   21.60%
{
  const kthSmallest = (matrix, k) => {
    let max = new MaxPriorityQueue();
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        max.enqueue(matrix[i][j]);
        if (max.size() > k) max.dequeue();
      }
    }
    return max.front();
  };
}
//
// Binary Search
{
  const kthSmallest = (matrix, k) => {
  let n = matrix.length, low = matrix[0][0], high = matrix[n - 1][n - 1] + 1;
  while (low < high) {
    let middle = low + Math.floor((high - low) / 2);
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] <= middle) count++;
        else break;
      }
    }
    if (count < k) low = middle + 1;
    else high = middle;
  }
  return low;
};
}
// **************************************************************************************************************** //

console.log(kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8));
console.log(kthSmallest([[-5]], 1));

// Example 1:
// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13

// Example 2:
// Input: matrix = [[-5]], k = 1
// Output: -5

// Constraints:
// n == matrix.length == matrix[i].length
// 1 <= n <= 300
// -109 <= matrix[i][j] <= 109
// All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.
// 1 <= k <= n2

// Follow up:
// Could you solve the problem with a constant memory (i.e., O(1) memory complexity)?
// Could you solve the problem in O(n) time complexity? The solution may be too advanced for an interview but you may find reading this paper fun.