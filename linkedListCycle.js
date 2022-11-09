// ******************************************   141. Linked List Cycle   ****************************************** //
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.
// https://leetcode.com/problems/linked-list-cycle/
//
function ListNode(val, next) { (this.val = val === undefined ? 0 : val), (this.next = next === undefined ? null : next); }
//
// Runtime:         93 ms, faster than 71.46%   |     83 ms, faster than 86.26%
// Memory Usage:  46.1 MB, less than    8.27%   |   45.8 MB, less than   14.52%
const hasCycle = (head) => {
  let pos = new Set();

  while (head) {
    if (pos.has(head)) return true;
    pos.add(head);
    head = head.next;
  }

  return false;
};
//
// Runtime:         97 ms, faster than 66.11%   |     86 ms, faster than 81.65%
// Memory Usage:  45.7 MB, less than   14.52%   |   45.9 MB, less than   12.90%
{
  const hasCycle = (head) => {
    let pos = new Set();

    while (head && !pos.has(head)) {
      pos.add(head);
      head = head.next;
    }

    return head !== null;
  };
}
// **************************************************************************************************************** //

let cl1 = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4)))),
  cl2 = new ListNode(1, new ListNode(2)),
  cl3 = new ListNode(1);
let c1 = cl1.next,
  c2 = cl2;
cl1.next.next.next.next = c1;
cl2.next = c2;

console.log(hasCycle(cl1));
console.log(hasCycle(cl2));
console.log(hasCycle(cl3));

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Constraints:
// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

// Follow up: Can you solve it using O(1) (i.e. constant) memory?