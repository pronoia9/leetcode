// *************************************   341. Flatten Nested List Iterator   ************************************ //
// You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.
// Implement the NestedIterator class:
// NestedIterator(List<NestedInteger> nestedList) Initializes the iterator with the nested list nestedList.
// int next() Returns the next integer in the nested list.
// boolean hasNext() Returns true if there are still some integers in the nested list and false otherwise.
// Your code will be tested with the following pseudocode:
// initialize iterator with nestedList
// res = []
// while iterator.hasNext()
//     append iterator.next() to the end of res
// return res
// If res matches the expected flattened list, then your code will be judged as correct.
// https://leetcode.com/problems/flatten-nested-list-iterator/
// 
// This is the interface that allows for creating nested lists. You should not implement it, or speculate about its implementation
// function NestedInteger() {
//  Return true if this NestedInteger holds a single integer, rather than a nested list.
//  @return {boolean}
//  this.isInteger = function() { ... };
//
//  Return the single integer that this NestedInteger holds, if it holds a single integer. Return null if this NestedInteger holds a nested list
//  @return {integer}
//  this.getInteger = function() { ... };
//
//  Return the nested list that this NestedInteger holds, if it holds a nested list. Return null if this NestedInteger holds a single integer
//  @return {NestedInteger[]}
//  this.getList = function() { ... };
// };
// 
/** @constructor **/ /** @param {NestedInteger[]} nestedList  **/
//
class NestedIterator {
  constructor(nestedList) {
    this.list = this.recursion(nestedList);
    this.curr = 0;
    this.length = this.list.length;
  }
  
  /** @this NestedIterator **/ /** @returns {boolean} **/
  hasNext() {
    return this.curr < this.length;
  }
  
  /** @this NestedIterator **/ /** @returns {integer} **/
  next() {
    return this.list[this.curr++];
  }

  flat() {}
  
  recursion(list, res = []) {
   for (let i = 0; i < list.length; i++) {
     if (typeof list[i] === 'number') res.push(list[i]);
     else this.recursion(list[i], res);
   }
   return res;
  }
}
/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
// **************************************************************************************************************** //

const one = new NestedIterator([[1, 1], 2, [1, 1]]), oneRes = [],
  two = new NestedIterator([1, [4, [6]]]), twoRes = [];
console.log(one);
console.log(two);
while (one.hasNext()) oneRes.push(one.next());
while (two.hasNext()) twoRes.push(two.next());
console.log(oneRes);
console.log(twoRes);

// Example 1:
// Input: nestedList = [[1,1],2,[1,1]]
// Output: [1,1,2,1,1]
// Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].

// Example 2:
// Input: nestedList = [1,[4,[6]]]
// Output: [1,4,6]
// Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].

// Constraints:
// 1 <= nestedList.length <= 500
// The values of the integers in the nested list is in the range [-106, 106].