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
// Recursive
// Runtime:         87 ms, faster than 74.81%   |     83 ms, faster than 80.07%
// Memory Usage:  44.6 MB, less than   58.13%   |   44.3 MB, less than   83.97%
const isSymmetric = function (root) {
  if (!root) return true;
  const helper = (left, right) => {
    // If one of the sub trees are empty
    if (!left || !right) return left === right;
    // If the values dont match up
    if (left.val !== right.val) return false;
    // Check both subtrees but travelled in a mirrored/symmetric fashion (one goes left, other goes right)  and make sure they're both symmetric
    return helper(left.left, right.right) && helper(left.right, right.left);
  };
  return helper(root.left, root.right);
};
//
// Iterative
{
  const isSymmetric = function (root) {
    // if there is no root that means it is a symettric tree
    if (!root) return true;
    // start 2 queue, one for the left branch and one for the right
    let queueL = [root.left], queueR = [root.right];
    // traverse through both branches, until they are both exhausted at the same time
    while (queueL.length > 0 && queueR.length > 0) {
      // compare left and right
      let nodeL = queueL.shift();
      let nodeR = queueR.shift();
      // if both are null at the same time, just on
      if (!nodeL && !nodeR) continue;
      // if the current level is not symmetric (1 of them is null or theyre not equal) return false
      if (!nodeL || !nodeR || nodeL.val !== nodeR.val) return false;
      // to maintain comparing left and right, push left and right & reverse for each branch
      queueL.push(nodeL.left);
      queueL.push(nodeL.right);
      queueR.push(nodeR.right);
      queueR.push(nodeR.left);
    }
    return true;
  };
}
//
// Runtime:        128 ms, faster than 16.46%   |     93 ms, faster than 65.86%
// Memory Usage:  45.1 MB, less than   11.63%   |   44.6 MB, less than   58.13%
{
  const isSymmetric = function (root) {
    if (!root) return true;
    const queue = [root, root];
    while (queue.length) {
      const [left, right] = [queue.shift(), queue.shift()];
      if (!left && !right) continue;
      if (left?.val !== right?.val) return false;
      queue.push(left.left, right.right, left.right, right.left);
    }
    return true;
  };
}
// **************************************************************************************************************** //

console.log(isSymmetric(new TreeNode(1,new TreeNode(2, new TreeNode(3), new TreeNode(4)),new TreeNode(2, new TreeNode(4), new TreeNode(3)))));
console.log(isSymmetric(new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3)))));

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

// https://www.youtube.com/watch?v=K7LyJTWr2yA
// https://leetcode.com/problems/symmetric-tree/discuss/494632/Javascript-95-speed-100-memory-w-comments
// https://leetcode.com/problems/symmetric-tree/discuss/712470/Javascript-Iterative-commented
// https://leetcode.com/problems/symmetric-tree/discuss/447611/Javascript-queue-in-10-lines
