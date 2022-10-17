// *****************************************   23. Merge k Sorted Lists   ***************************************** //
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.
// https://leetcode.com/problems/merge-k-sorted-lists/
//
// Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
//
/** @param {ListNode[]} lists **/ /** @return {ListNode} **/
//
// Runtime:        795 ms, faster than 11.45%
// Memory Usage:  47.3 MB, less than   73.91%
{
  const mergeKLists = (lists) => {
    if (!lists || !lists.length) return null;
    for (let i = 1; i < lists.length; i++) lists[0] = mergeLists(lists[0], lists[i]);
    return lists[0];
  };
  function mergeLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
      l1.next = mergeLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeLists(l1, l2.next);
      return l2;
    }
  }
}
//
// Runtime:       209 ms, faster than 46.86%   |   127 ms, faster than 85.10%
// Memory Usage: 50.2 MB, less than   18.03%   |    49 MB, less than   25.96%
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
const mergeKLists = (lists) => {
  const queue = new MinPriorityQueue((a) => a.val); // { priority: (x) => x.val }
  for (const head of lists) if (head) queue.enqueue(head);
  let res = new ListNode(), curr = res;
  while (!queue.isEmpty()) {
    const { val, next } = queue.dequeue(); //.element;
    curr.next = new ListNode(val);
    curr = curr.next;
    if (next) queue.enqueue(next);
  }
  return res.next;
};
// **************************************************************************************************************** //

console.log(
  mergeKLists([
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6)),
  ])
);
console.log(
  arrayify(
    mergeKLists([
      new ListNode(1, new ListNode(4, new ListNode(5))),
      new ListNode(1, new ListNode(3, new ListNode(4))),
      new ListNode(2, new ListNode(6)),
    ])
  )
);
console.log(mergeKLists([]));
console.log(mergeKLists([[]]));
console.log(mergeKLists([new ListNode()]));

// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []

// Constraints:
// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

function arrayify(list) {
  const arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
}