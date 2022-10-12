// **************************************   98. Validate Binary Search Tree   ************************************* //
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// https://leetcode.com/problems/validate-binary-search-tree/
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
//
/** @param {TreeNode} root **/ /** @return {boolean} **/
//
// Runtime:        129 ms, faster than 25.52%   |     75 ms, faster than 92.76%
// Memory Usage:  45.7 MB, less than   92.61%   |   46.1 MB, less than   75.68%
const isValidBST = (root) => {
  const isValid = (node, left, right) => {
    if (!node) return true;
    if (!(left < node.val && node.val < right)) return false;
    return isValid(node.left, left, node.val) && isValid(node.right, node.val, right);
  }
  return isValid(root, -Infinity, Infinity);
};
// **************************************************************************************************************** //

console.log(isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3))));
console.log(isValidBST(new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)))));

// Example 1:
// https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg
// Input: root = [2,1,3]
// Output: true

// Example 2:
// https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1