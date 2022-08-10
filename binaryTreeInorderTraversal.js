// *****************************************   94. Binary Tree Inorder Traversal   **************************************** //
// Given the root of a binary tree, return the inorder traversal of its nodes' values.
// https://leetcode.com/problems/binary-tree-inorder-traversal/
//
// Runtime:        95 ms, faster than 36.45%
// Memory Usage:  42.5 MB, less than  13.72%
{
  const inorderTraversal = (root) => {
    let res = [];
    recursion(root, res);
    return res;
  };
  const recursion = (root, res) => {
    if (!root) return;
    root.left && recursion(root.left, res);
    res.push(root.val);
    recursion(root.right, res);
  };
}
//
// Runtime:         93 ms, faster than 40.46%   |     97 ms, faster than 32.98%   |     95 ms, faster than 36.45%
// Memory Usage:  42.7 MB, less than    5.85%   |   42.4 MB, less than   31.10%   |   42.1 MB, less than   54.96%
{
  const inorderTraversal = (root) => {
    const recursion = (root) => {
      if (!root) return;
      root.left && recursion(root.left, res);
      res.push(root.val);
      recursion(root.right, res);
    };

    let res = [];
    recursion(root, res);
    return res;
  };
}
//
// Runtime:         79 ms, faster than 65.35%   |     68 ms, faster than 84.55%   |     56 ms, faster than 98.22%
// Memory Usage:  41.8 MB, less than   93.34%   |   42.6 MB, less than    5.85%   |   42.5 MB, less than   21.08%
const inorderTraversal = (root) => {
  if (!root) return [];
  const stack = [], res = [];
  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }
  return res;
};
// ************************************************************************************************************************ //

// console.log(inorderTraversal([1, null, 2, 3]));
// console.log(inorderTraversal([]));
// console.log(inorderTraversal([1]));

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Follow up: Recursive solution is trivial, could you do it iteratively?

// https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/527791/JavaScript-10-lines-Iterative-and-Recursive
// https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/