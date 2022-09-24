// *****************************   116. Populating Next Right Pointers in Each Node   ***************************** //
// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:
// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
// Initially, all next pointers are set to NULL.
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
//
// Definition for a Node.
function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}
//
/** @param {Node} root **/ /** @return {Node} **/
//
// O(n) time, O(n) space
// Runtime:        127 ms, faster than 45.47%   |     81 ms, faster than 95.09%
// Memory Usage:  48.2 MB, less than   85.46%   |   48.7 MB, less than   56.38%
const connect = (root) => {
  if (!root) return root;
  let curr = root, next = root.left;
  while (curr && next) {
    curr.left.next = curr.right;
    if (curr.next) curr.right.next = curr.next.left;
    curr = curr.next;
    if (!curr) {
      curr = next;
      next = curr.left;
    }
  }
  return root;
};
// **************************************************************************************************************** //

console.log(connect(new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7)))));
console.log(connect(new Node()));

// Example 1:
// https://assets.leetcode.com/uploads/2019/02/14/116_sample.png
// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

// Example 2:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 212 - 1].
// -1000 <= Node.val <= 1000

// Follow-up:
// You may only use constant extra space.
// The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.