// ***********************************   19. Remove Nth Node From End of List   *********************************** //
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// 
// Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}
// 
/** @param {ListNode} head **/ /** @param {number} n **/ /** @return {ListNode} **/
//
// Runtime:         91 ms, faster than 58.86%   |   112 ms, faster than 23.03%   |     80 ms, faster than 75.16%
// Memory Usage:  43.7 MB, less than   16.62%   |    42 MB, less than   98.84%   |   42.6 MB, less than   71.09%
 const removeNthFromEnd = (head, n) => {
   let dummy = new ListNode('dummy', head), left = dummy, right = head;
   for (let i = 0; i < n; i++) right = right.next;
   while (right) {
     left = left.next;
     right = right.next;
   }
   left.next = left.next.next;
   return dummy.next;
 };
// **************************************************************************************************************** //

console.log(
  arrayify(removeNthFromEnd(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2))
);
// console.log(arrayify(removeNthFromEnd(new ListNode(1), 1)));
// console.log(arrayify(removeNthFromEnd(new ListNode(1, new ListNode(2)), 1)));

// Example 1:
// https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// Follow up: Could you do this in one pass?

function arrayify(list) {
  const arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
};