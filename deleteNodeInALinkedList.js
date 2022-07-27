// ****************************************   237. Delete Node in a Linked List   ***************************************** //
// Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.
// It is guaranteed that the node to be deleted is not a tail node in the list.
// https://leetcode.com/problems/delete-node-in-a-linked-list/
//
function ListNode(val, next) { (this.val = val === undefined ? 0 : val), (this.next = next === undefined ? null : next); }
//
// Runtime:         81 ms, faster than 81.67%   |     79 ms, faster than 84.25%     |   78 ms, faster than 85.71%
// Memory Usage:  44.5 MB, less than   24.27%   |   44.6 MB, less than   24.27%   |   44.1 MB, less than   81.05%
const deleteNode = (node) => {  
  node.val = node.next.val;
  node.next = node.next.next;
};
// ************************************************************************************************************************ //
const ls1 = new ListNode(4, new ListNode(5, new ListNode(1, new ListNode(9, null)))), ls2 = new ListNode(4, new ListNode(5, new ListNode(1, new ListNode(9, null))));
const del1 = ls1.next, del2 = ls2.next.next;

console.log(ls1);
console.log(ls2);

console.log(deleteNode(del1));
console.log(deleteNode(del2));

console.log(ls1);
console.log(ls2);

// Example 1:
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

// Example 2:
// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

// Constraints:
// The number of the nodes in the given list is in the range [2, 1000].
// -1000 <= Node.val <= 1000
// The value of each node in the list is unique.
// The node to be deleted is in the list and is not a tail node