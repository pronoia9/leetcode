// **********************   105. Construct Binary Tree from Preorder and Inorder Traversal   ********************** //
// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
//
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
//
/** @param {number[]} preorder **/ /** @param {number[]} inorder **/ /** @return {TreeNode} **/
//
// Recursive
// Runtime:         214 ms, faster than 37.78%
// Memory Usage:  136.4 MB, less than   24.39%
const buildTree = (preorder, inorder) => {
  if (!preorder || !inorder || !preorder.length || !inorder.length) return null;
  const root = new TreeNode(preorder[0]),
    middle = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, middle + 1), inorder.slice(0, middle));
  root.right = buildTree(preorder.slice(middle + 1), inorder.slice(middle + 1));
  return root;
};
// **************************************************************************************************************** //

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
console.log(buildTree([-1], [-1]));

// Example 1:
// https://assets.leetcode.com/uploads/2021/02/19/tree.jpg
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Example 2:
// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

// Constraints:
// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// preorder and inorder consist of unique values.
// Each value of inorder also appears in preorder.
// preorder is guaranteed to be the preorder traversal of the tree.
// inorder is guaranteed to be the inorder traversal of the tree.