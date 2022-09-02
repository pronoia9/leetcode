// *****************************************   328. Odd Even Linked List   **************************************** //
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// The first node is considered odd, and the second node is even, and so on.
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.
// https://leetcode.com/problems/odd-even-linked-list/
//
// Definition for singly-linked list.
function ListNode(val, next) {this.val = (val === undefined ? 0 : val); this.next = (next === undefined ? null : next);}
const toArray = (list) => {
  const arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
};
// 
// @param {ListNode} head
// @return {ListNode}
// 
// Runtime:        129 ms, faster than 20.11%   |     87 ms, faster than 79.04%
// Memory Usage:  44.6 MB, less than   51.87%   |   44.4 MB, less than   68.31%
const oddEvenList = (head) => {
  if (!head) return head;
  let curr = head,
    even = head.next;
  // curr is always odd since the next element which is even is moved and curr.next points to the next odd element
  while (curr && curr.next) {
    const nextEven = curr.next;
    curr.next = curr.next.next;
    if (curr.next) {
      curr = curr.next;
      nextEven.next = curr.next;
    }
  }
  curr.next = even;
  return head;
};
//
// Recursion
// Runtime:        116 ms, faster than 36.13%   |    112 ms, faster than 43.19%
// Memory Usage:  45.1 MB, less than   10.09%   |   45.2 MB, less than    6.49%
{
  const oddEvenList = (head) => {
    if (!head || !head.next) return head;
    let odd = head,
      even = head.next,
      lastOdd = swapper(even, odd);
    lastOdd.next = even;
    return odd;
  };
  function swapper(even, odd) {
    if (!even || !even.next) {
      odd.next = null;
      return odd;
    }
    let nextOdd = even.next;
    odd.next = nextOdd;
    even.next = nextOdd.next;
    return swapper(even.next, odd.next);
  }
}
// **************************************************************************************************************** //

console.log(toArray(oddEvenList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))))));
console.log(toArray(oddEvenList(new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7, null))))))))));
console.log(toArray(oddEvenList(new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(4, null)))))))));

// Example 1:
// https://assets.leetcode.com/uploads/2021/03/10/oddeven-linked-list.jpg
// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

// Example 2:
// https://assets.leetcode.com/uploads/2021/03/10/oddeven2-linked-list.jpg
// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]

// Constraints:
// The number of nodes in the linked list is in the range [0, 104].
// -106 <= Node.val <= 106