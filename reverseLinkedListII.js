// ****************************************   92. Reverse Linked List II   **************************************** //
// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.
// https://leetcode.com/problems/reverse-linked-list-ii/
// Definition for singly-linked list.
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
const reverseBetween = (head, left, right) => {};
// **************************************************************************************************************** //

console.log(reverseBetween(list([1, 2, 3, 4, 5]), 2, 4));
console.log(reverseBetween(list([5]), 1, 1));

// Example 1:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [5], left = 1, right = 1
// Output: [5]