// *******************************************   101. Symmetric Tree   ******************************************** //
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
// https://leetcode.com/problems/symmetric-tree/
// 
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
//
// Runtime:         87 ms, faster than 74.81%   |     83 ms, faster than 80.07%
// Memory Usage:  44.6 MB, less than   58.13%   |   44.3 MB, less than   83.97%
const isSymmetric = function (root) {
  if (!root) return true;

  const helper = (left, right) => {
    if (!left || !right) return left === right;
    if (left.val !== right.val) return false;
    return helper(left.left, right.right) && helper(left.right, right.left);
  };

  return helper(root.left, root.right);
};
// **************************************************************************************************************** //

// console.log(isSymmetric());

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

// Follow up: Could you solve it both recursively and iteratively?