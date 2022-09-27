// ************************************   138. Copy List with Random Pointer   ************************************ //
// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.
// Return the head of the copied linked list.
// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:
// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.
// https://leetcode.com/problems/copy-list-with-random-pointer/
// Definition for a Node.
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}
//
/** @param {Node} head **/ /** @return {Node} **/
//
// Runtime:       80 ms, faster than 74.09%   |     94 ms, faster than 56.13%   |     80 ms, faster than 74.09%
// Memory Usage:  44 MB, less than   66.00%   |   43.8 MB, less than   78.60%   |   43.7 MB, less than   86.48%
const copyRandomList = (head) => {
  const map = new Map();
  let curr = head;
  while (curr) {
    map.set(curr, new Node(curr.val, null, null));
    curr = curr.next;
  }

  map.forEach((val, key) => {
    val.next = map.get(key.next) || null;
    val.random = map.get(key.random) || null;
  });

  return map.get(head);
};
// **************************************************************************************************************** //

// console.log(copyRandomList(new Node(7, new Node(13, new Node(11, new Node(10, new Node(1, null, null), null), null), null), null)));
// console.log(copyRandomList(new Node(1, new Node(2, null, null), null)));
// console.log(copyRandomList(new Node(3, new Node(3, new Node(3, null, null), null), null)));

// Example 1:
// https://assets.leetcode.com/uploads/2019/12/18/e1.png
// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

// Example 2:
// https://assets.leetcode.com/uploads/2019/12/18/e2.png
// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]

// Example 3:
// https://assets.leetcode.com/uploads/2019/12/18/e3.png
// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]

// Constraints:
// 0 <= n <= 1000
// -104 <= Node.val <= 104
// Node.random is null or is pointing to some node in the linked list.