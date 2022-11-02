// *****************************************   206. Reverse Linked List   ***************************************** //
// Given the head of a singly linked list, reverse the list, and return the reversed list.
// https://leetcode.com/problems/reverse-linked-list/
function ListNode(val, next) { (this.val = val === undefined ? 0 : val), (this.next = next === undefined ? null : next); }
//
// Runtime:       69 ms, faster than 91.06%
// Memory Usage:  44 MB, less than   72.62%
const reverseList = (head) => {
  if (!head) return head;
  let list;
  while (head) {
    list = new ListNode(head.val, list);
    head = head.next;
  }
  return list;
};
// **************************************************************************************************************** //

const l1 = list([1, 2, 3, 4, 5]), l2 = list([1, 2]), l3 = list([]);

console.log(reverseList(l1));
console.log(reverseList(l2));
console.log(reverseList(l3));

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

function list (arr) {
  let list = new ListNode(),
    curr = list;
  for (let i = 0; i < arr.length; i++) {
    curr.val = arr[i];
    if (i !== arr.length - 1) (curr.next = new ListNode()), (curr = curr.next);
  }
  return list;
};