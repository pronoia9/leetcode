// ************************************   230. Kth Smallest Element in a BST   ************************************ //
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
//
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
// @param {TreeNode} root
// @param {number} k
// @return {number}
//
const kthSmallest = (root, k) => {};
// **************************************************************************************************************** //

console.log(kthSmallest(new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4))));
console.log(kthSmallest(new TreeNode(5, new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)), new TreeNode(6))));

// Example 1:
// https://assets.leetcode.com/uploads/2021/01/28/kthtree1.jpg
// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Example 2:
// https://assets.leetcode.com/uploads/2021/01/28/kthtree2.jpg
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

// Constraints:
// The number of nodes in the tree is n.
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104

// Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?