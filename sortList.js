// **********************************************   148. Sort List   ********************************************** //
// Given the head of a linked list, return the list after sorting it in ascending order.
// https://leetcode.com/problems/sort-list/
//
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const arr = (list) => {
  const arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
};
//
/** @param {ListNode} head **/
/** @return {ListNode} **/
// Recursive, Merge sort
// O(n logn) time  |  O(logn) space
// Runtime:       325 ms, faster than 27.70%   |    303 ms, faster than 38.40%   |    276 ms, faster than 54.77%
// Memory Usage: 68.5 MB, less than   56.20%   |   68.2 MB, less than   61.15%   |   71.4 MB, less than   26.08%
const sortList = (head) => {
  // base case
  if (!head || !head.next) return head;
  // split the list into two halfs
  let left = head, right = getMid(head);
  [right.next, right] = [null, right.next];
  left = sortList(left);
  right = sortList(right);
  // sort
  return merge(left, right);
};

function getMid(head) {
  let slow = head, fast = head.next;
  while (fast && fast.next) { slow = slow.next; fast = fast.next.next; };
  return slow;
}

function merge(list1, list2) {
  let dummy = new ListNode(), curr = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) { curr.next = list1; list1 = list1.next; }
    else { curr.next = list2; list2 = list2.next; }
    curr = curr.next;
  }
  list1 && (curr.next = list1);
  list2 && (curr.next = list2);
  return dummy.next;
}
// **************************************************************************************************************** //

console.log(arr(sortList(new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3, null)))))));
console.log(arr(sortList(new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0, null))))))));
console.log(arr(sortList(new ListNode())));

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