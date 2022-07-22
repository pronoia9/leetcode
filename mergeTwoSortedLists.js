// ********************************************   21. Merge Two Sorted Lists   ******************************************** //
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
// https://leetcode.com/problems/merge-two-sorted-lists/
// Definition for singly-linked list.
function ListNode(val, next) { (this.val = val === undefined ? 0 : val), (this.next = next === undefined ? null : next); }
const list = (arr) => {
  let list = new ListNode(), curr = list;
  for (let i = 0; i < arr.length; i++) {
    curr.val = arr[i];
    if (i !== arr.length - 1) (curr.next = new ListNode()), (curr = curr.next);
  }
  return list;
};
//
// Runtime:        126 ms, faster than 17.11%
// Memory Usage:  44.4 MB, less than   24.40%
{
  const mergeTwoLists = (list1, list2) => {
    let list = new ListNode(), curr = list;

    while (list1 && list2) {
      if (list1.val > list2.val) {
        curr.next = list2;
        list2 = list2.next;
      } else {
        curr.next = list1;
        list1 = list1.next;
      }
      curr = curr.next;
    }
    curr.next = list1 || list2;

    return list.next;
  };
}
//
// Runtime:        129 ms, faster than 14.64%   |     98 ms, faster than 54.91%   |     84 ms, faster than 74.39%
// Memory Usage:  44.5 MB, less than   16.54%   |   44.1 MB, less than   59.74%   |   44.3 MB, less than   47.29%
const mergeTwoLists = (list1, list2) => {
  let list = new ListNode(),
    curr = list;

  while (list1 || list2) {
    if ((list1 && !list2) || (list1 && list2 && (list1.val < list2.val || list1.val === list2.val))) {
      curr.next = list1;
      list1 = list1.next;
    } else if ((!list1 && list2) || (list1 && list2 && list2.val < list1.val)) {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  return list.next;
};
// ************************************************************************************************************************ //

console.log(mergeTwoLists(list([1, 2, 4]), list([1, 3, 4])));
console.log(mergeTwoLists(list([]), list([])));
console.log(mergeTwoLists(list([]), list([0])));

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.