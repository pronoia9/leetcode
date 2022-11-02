// **********************************   83. Remove Duplicates from Sorted List   ********************************** //
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
//
function ListNode(val, next) {(this.val = val === undefined ? 0 : val), (this.next = next === undefined ? null : next);}
const list = (arr) => {
  let list = new ListNode(),
    curr = list;
  for (let i = 0; i < arr.length; i++) {
    curr.val = arr[i];
    if (i !== arr.length - 1) (curr.next = new ListNode()), (curr = curr.next);
  }
  return list;
};
//
// Runtime:         89 ms, faster than 73.45%
// Memory Usage:  44.5 MB, less than   30.82%
{
  const deleteDuplicates = (head) => {
    let list = new ListNode(), curr = list, set = new Set();

    while (head) {
      set.add(head.val);
      head = head.next;
    }

    set.forEach((ele) => {
      curr.next = new ListNode(ele);
      curr = curr.next;
    })

    return list.next;
  };
}
//
// Runtime:        106 ms, faster than 50.46%   |     98 ms, faster than 61.25%   |     62 ms, faster than 99.59%
// Memory Usage:  43.6 MB, less than   98.79%   |   44.2 MB, less than   66.67%   |   44.2 MB, less than   66.67%
const deleteDuplicates = (head) => {
  if (!head) return head;
  let curr = head;

  while (curr && curr.next) {
    // means we have a duplicate (next element is the same as the curr one)
    if (curr.val === curr.next.val) curr.next = curr.next.next;
    else curr = curr.next;
  }
  return head;
};
// **************************************************************************************************************** //

console.log(deleteDuplicates(list([1, 1, 2])));
console.log(deleteDuplicates(list([1, 1, 2, 3, 3])));

// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// Constraints:
// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.