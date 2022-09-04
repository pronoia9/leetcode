// **********************************************   148. Sort List   ********************************************** //
// Given the head of a linked list, return the list after sorting it in ascending order.
// https://leetcode.com/problems/sort-list/
//
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
//
/** @param {ListNode} head **/
/** @return {ListNode} **/
const sortList = (head) => {};
// **************************************************************************************************************** //

console.log(sortList(new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3, null))))));
console.log(sortList(new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0, null)))))));
console.log(sortList(new ListNode()));

// Example 1:
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Example 3:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?