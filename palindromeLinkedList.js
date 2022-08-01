// ********************************************   234. Palindrome Linked List   ******************************************* //
// Given the head of a singly linked list, return true if it is a palindrome.
// https://leetcode.com/problems/palindrome-linked-list/
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
const isPalindrome = (head) => {  
};
// ************************************************************************************************************************ //
const l1 = list([1, 2, 2, 1]), l2 = list([1, 2]);

console.log(isPalindrome(l1));
console.log(isPalindrome(l2));

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?