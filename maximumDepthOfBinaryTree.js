// *************************************   104. Maximum Depth of Binary Tree   ************************************ //
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
//
// DFS (Recursive)
const maxDepth = (root) => {
  if (!root) return 0;
  const left = maxDepth(root.left), right = maxDepth(root.right);
  return Math.max(left, right);
}
//
// Runtime:      118 ms, faster than 27.04%
// Memory Usage:  45 MB, less than   74.98%
const maxDepth = (root) => (root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0);
//
// BSF (Iterative)
// Runtime:         84 ms, faster than 78.55%   |     77 ms, faster than 87.48%
// Memory Usage:  45.7 MB, less than   16.91%   |   44.2 MB, less than   99.31%
const maxDepth = (root) => {
  if (!root) return 0;
  let level = 0, queue = [root];
  while (queue.length) {
    const currLevelNodes = queue.length;
    queue.forEach(i => {
      const node = i;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    });
    level++;
    queue.splice(0, currLevelNodes);
  }
  return level;
};
//
// DFS (Iterative)
// Runtime:        100 ms, faster than 56.03%
// Memory Usage:  47.3 MB, less than    5.29%
const maxDepth = (root) => {
  if (!root) return 0;
  let stack = [[root, 1]], level = 1;
  while (stack.length) {
    const [node, depth] = [...stack.pop()];
    level = Math.max(level, depth);
    if (node.left) stack.push([node.left, depth + 1]);
    if (node.right) stack.push([node.right, depth + 1]);
  }
  return level;
};
//
// Runtime:        115 ms, faster than 31.44%
// Memory Usage:  47.6 MB, less than    5.29%
const maxDepth = (root) => {
  let stack = [[root, 1]], level = 0;
  while (stack.length) {
    const [node, depth] = [...stack.pop()];
    if (node) {
      level = Math.max(level, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }
  return level;
};
// **************************************************************************************************************** //

// console.log(maxDepth([3, 9, 20, null, null, 15, 7]));
// console.log(maxDepth([1, null, 2]));

// Example 1:
// https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

// Constraints:
// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100