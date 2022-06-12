// ************************************************   2. Add Two Numbers   ************************************************ //
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// https://leetcode.com/problems/add-two-numbers/
//
// Runtime:       181 ms,   faster than   22.06%
// Memory Usage:  47.9 MB,  less than     24.95%
{
  let addTwoNumbers = function (l1, l2) {
    let arr1 = [],
      arr2 = [];

    while (l1 !== null || l2 !== null) {
      if (l1 !== null) {
        arr1.push(l1.val);
        l1 = l1.next;
      }
      if (l2 !== null) {
        arr2.push(l2.val);
        l2 = l2.next;
      }
    }

    let result = (BigInt(arr1.reverse().join('')) + BigInt(arr2.reverse().join('')))
      .toString()
      .split('')
      .reverse()
      .map((n) => BigInt(n));

    let l3 = new ListNode(result[0]);
    let l3Next = l3;
    for (let i = 1; i < result.length; i++) {
      l3Next.next = new ListNode(result[i]);
      l3Next = l3Next.next;
    }
    return l3;
  };
}
//
// Runtime:       142 ms,   faster than   51.59%
// Memory Usage:  47.8 MB,  less than     29.53%
{
  let addTwoNumbers = function (l1, l2) {
    let arr1 = [],
      arr2 = [];

    while (l1 !== null || l2 !== null) {
      if (l1 !== null) {
        arr1.push(l1.val);
        l1 = l1.next;
      }
      if (l2 !== null) {
        arr2.push(l2.val);
        l2 = l2.next;
      }
    }

    let result = (BigInt(arr1.reverse().join('')) + BigInt(arr2.reverse().join(''))).toString().split('').reverse().join('');

    let l3 = new ListNode(result[0]);
    let l3Next = l3;
    for (let i = 1; i < result.length; i++) {
      l3Next.next = new ListNode(result[i]);
      l3Next = l3Next.next;
    }
    return l3;
  };
}
//
// Runtime:       117 ms,   faster than   74.25%
// Memory Usage:  48.6 MB,  less than     14.69%
{
  let addTwoNumbers = function (l1, l2) {
    let arr1 = [],
      arr2 = [];

    while (l1) {
      arr1.push(l1.val);
      l1 = l1.next;
    }
    while (l2) {
      arr2.push(l2.val);
      l2 = l2.next;
    }

    let result = (BigInt(arr1.reverse().join('')) + BigInt(arr2.reverse().join('')))
      .toString()
      .split('')
      .reverse()
      .map((n) => BigInt(n));

    let l3 = new ListNode(result[0]);
    let l3Next = l3;
    for (let i = 1; i < result.length; i++) {
      l3Next.next = new ListNode(result[i]);
      l3Next = l3Next.next;
    }
    return l3;
  };
}
//
// Runtime:       104 ms,   faster than   89.81%
// Memory Usage:  48 MB,    less than     22.08%
export default function addTwoNumbers(l1, l2) {
  let arr1 = [],
    arr2 = [];

  while (l1) {
    arr1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    arr2.push(l2.val);
    l2 = l2.next;
  }

  let result = (BigInt(arr1.reverse().join('')) + BigInt(arr2.reverse().join(''))).toString().split('').reverse().join('');

  let l3 = new ListNode(result[0]);
  let l3Next = l3;
  for (let i = 1; i < result.length; i++) {
    l3Next.next = new ListNode(result[i]);
    l3Next = l3Next.next;
  }
  return l3;
}
// ************************************************************************************************************************ //
