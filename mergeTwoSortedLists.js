// ********************************************   21. Merge Two Sorted Lists   ******************************************** //
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
// https://leetcode.com/problems/merge-two-sorted-lists/
//
var mergeTwoLists = function (list1, list2) {
  while (list1 || list2) {
    if (list1 && list2) {
      list3.val = list1.val < list2.val ? list1.val : list2.val;
      list3.val = list1.val > list2.val ? list1.val : list2.val;
    }
    if (list1) {
      console.log('list1 val:', list1.val);
      list1 = list1.next;
    }
    if (list2) {
      console.log('list2 val:', list2.val);
      list2 = list2.next;
    }
  }
};
// ************************************************************************************************************************ //

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]