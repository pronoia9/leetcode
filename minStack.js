// **********************************************   155. Min Stack   ********************************************** //
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.
// https://leetcode.com/problems/min-stack/
//
// Runtime:        125 ms, faster than 82.50%   |    161 ms, faster than 53.50%   |    112 ms, faster than 92.88% 
// Memory Usage:  49.7 MB, less than   53.62%   |   49.4 MB, less than   83.21%   |   49.6 MB, less than   62.45%
class MinStack {
  constructor() { this.stack = [], this.minStack = []; }
  push(val) {
    this.stack.push(val);
    this.minStack.push(Math.min(val, (this.minStack.length ? this.minStack[this.minStack.length - 1] : val)));
  }
  pop() { this.stack.pop(), this.minStack.pop(); }
  top() { return this.stack[this.stack.length - 1]; }
  getMin() { return this.minStack[this.minStack.length - 1]; }
}
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// **************************************************************************************************************** //

const minStack = new MinStack([[], [-2], [0], [-3], [], [], [], []]);
console.log(minStack.push(0));  
console.log(minStack.push(1));  
console.log(minStack.push(0));  
console.log(minStack.stack);    
console.log(minStack.minStack); 
console.log(minStack.getMin()); 
console.log(minStack.pop());    
console.log(minStack.stack);    
console.log(minStack.minStack); 
console.log(minStack.top());    
console.log(minStack.getMin()); 

// Example 1:
// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]
// Output
// [null,null,null,null,-3,null,0,-2]
// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

// Constraints:
// -231 <= val <= 231 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 104 calls will be made to push, pop, top, and getMin.