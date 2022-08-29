// **********************************   102. Binary Tree Level Order Traversal   ********************************** //
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
// https://leetcode.com/problems/binary-tree-level-order-traversal/
//
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
//
// @param {TreeNode} root
// @return {number[][]}
//
// BFS
// O(n) time  |  O(n) space
//
// Runtime:         93 ms, faster than 58.97%   |     58 ms, faster than 99.53%
// Memory Usage:  44.2 MB, less than   68.75%   |   44.1 MB, less than   78.23%
const levelOrder = (root) => {
  const q = [root], res = [];
  while (q.length) {
    let qLen = q.length, level = [];
    for (let i = 0; i < qLen; i++) {
      node = q[0]; q.splice(0, 1);
      if (node) {
        level.push(node.val);
        q.push(node.left, node.right);
      }
    }
    level.length && res.push(level);
  }
  return res;
};
// **************************************************************************************************************** //

console.log(levelOrder(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
console.log(levelOrder(new TreeNode(1)));
console.log(levelOrder(new TreeNode()));

// Example 1:
// https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

// https://www.youtube.com/watch?v=6ZnyEApgFYg