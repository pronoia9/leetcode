// *****************************   108. Convert Sorted Array to Binary Search Tree   ****************************** //
// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
//
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
// @param {number[]} nums
// @return {TreeNode}
//
let sortedArrayToBST = (nums) => {};
// **************************************************************************************************************** //

// Example 1:
// https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:
// https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg

// Example 2:
// https://assets.leetcode.com/uploads/2021/02/18/btree.jpg
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.