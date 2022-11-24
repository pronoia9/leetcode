// ***************************************   234. Palindrome Linked List   **************************************** //
// Given the head of a singly linked list, return true if it is a palindrome.
// https://leetcode.com/problems/palindrome-linked-list/
function ListNode(val, next) {
  (this.val = val === undefined ? 0 : val), (this.next = next === undefined ? null : next);
}
//
// Runtime:        208 ms, faster than 60.63%
// Memory Usage:  92.7 MB, less than    6.27%
{
  const isPalindrome = (head) => {
    if (!head.next) return true;

    let array = [];
    while (head) {
      array.push(head.val);
      head = head.next;
    }

    const len = array.length;
    let splice = array
      .splice(Math.round(len / 2))
      .reverse()
      .join('');
    array = array.splice(0, Math.floor(len / 2)).join('');

    return splice === array;
  };
}
//
// Runtime:        203 ms, faster than 64.91%
// Memory Usage:  69.6 MB, less than   79.07%
{
  const isPalindrome = (head) => {
    if (head.next) {
      let slow = head, fast = head, prev;

      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }

      // console.log(slow.val, slow.next?.val);
      // console.log(slow.val);

      prev = slow;
      slow = slow.next;
      prev.next = null;

      // console.log(prev?.val);
      // console.log(slow?.val);

      while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
      }

      fast = head;
      slow = prev;

      while (slow) {
        if (fast.val !== slow.val) return false;
        else (fast = fast.next), (slow = slow.next);
      }
    }
    return true;
  };
}
// **************************************************************************************************************** //

console.log(isPalindrome(list([1, 2, 2, 1])));
console.log(isPalindrome(list([1, 2])));
console.log(isPalindrome(list([1, 0, 0])));
console.log(isPalindrome(list([1, 0, 1])));
console.log(isPalindrome(list([1])));
console.log(isPalindrome(list([ 8, 0, 7, 1, 7, 7, 9, 7, 5, 2, 9, 1, 7, 3, 7, 0, 6, 5, 1, 7, 7, 9, 3, 8, 1, 5, 7, 7, 8, 4, 0, 9, 3, 7, 3, 4, 5, 7, 4, 8, 8, 5, 8, 9, 8, 5, 8, 8, 4, 7, 5, 4, 3, 7, 3, 9, 0, 4, 8, 7, 7, 5, 1, 8, 3, 9, 7, 7, 1, 5, 6, 0, 7, 3, 7, 1, 9, 2, 5, 7, 9, 7, 7, 1, 7, 0, 8])));

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

function list (arr) {
  let list = new ListNode(),
    curr = list;
  for (let i = 0; i < arr.length; i++) {
    curr.val = arr[i];
    if (i !== arr.length - 1) (curr.next = new ListNode()), (curr = curr.next);
  }
  return list;
};