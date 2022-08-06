// ***************************************   160. Intersection of Two Linked Lists   ************************************** //
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
// For example, the following two linked lists begin to intersect at node c1:
// https://assets.leetcode.com/uploads/2021/03/05/160_statement.png
// The test cases are generated such that there are no cycles anywhere in the entire linked structure.
// Note that the linked lists must retain their original structure after the function returns.
// Custom Judge:
// The inputs to the judge are given as follows (your program is not given these inputs):
// intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
// listA - The first linked list.
// listB - The second linked list.
// skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
// skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
// The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.
//
// https://leetcode.com/problems/intersection-of-two-linked-lists/
//
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
const getIntersectionNode = (headA, headB) => {};
// ************************************************************************************************************************ //

const l1a = new ListNode(4, new ListNode(1, new ListNode(8, new ListNode(4, new ListNode(5)))));
const l1b = new ListNode(5, new ListNode(6, new ListNode(1, new ListNode(8, new ListNode(4, new ListNode(5))))));
const l2a = new ListNode(1, new ListNode(9, new ListNode(1, new ListNode(2, new ListNode(4)))));
const l2b = new ListNode(3, new ListNode(2, new ListNode(4)));
const l3a = new ListNode(2, new ListNode(6, new ListNode(4)));
const l3b = new ListNode(1, new ListNode(5));

console.log(getIntersectionNode(l1a, l1b));
console.log(getIntersectionNode(l2a, l2b));
console.log(getIntersectionNode(l3a, l3b));

// Example 1:
// https://assets.leetcode.com/uploads/2021/03/05/160_example_1_1.png
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

// Example 2:
// https://assets.leetcode.com/uploads/2021/03/05/160_example_2.png
// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Intersected at '2'
// Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

// Example 3:
// https://assets.leetcode.com/uploads/2021/03/05/160_example_3.png
// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: No intersection
// Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null. 

// Constraints:
// The number of nodes of listA is in the m.
// The number of nodes of listB is in the n.
// 1 <= m, n <= 3 * 104
// 1 <= Node.val <= 105
// 0 <= skipA < m
// 0 <= skipB < n
// intersectVal is 0 if listA and listB do not intersect.
// intersectVal == listA[skipA] == listB[skipB] if listA and listB intersect.

// Follow up: Could you write a solution that runs in O(m + n) time and use only O(1) memory?