// *************************************   295. Find Median from Data Stream   ************************************ //
// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.
// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:
// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
// https://leetcode.com/problems/find-median-from-data-stream/
//
// const { MinHeap, MaxHeap } = require('@datastructures-js/heap');
//
//
//
/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 *
 * @class
 */
class Heap {
  /**
   * @param {function} compare
   * @param {array} [_values]
   * @param {number|string|object} [_leaf]
   */
  constructor(compare, _values, _leaf) {
    if (typeof compare !== 'function') {
      throw new Error('Heap constructor expects a compare function');
    }
    this._compare = compare;
    this._nodes = Array.isArray(_values) ? _values : [];
    this._leaf = _leaf || null;
  }

  /**
   * Checks if a parent has a left child
   * @private
   */
  _hasLeftChild(parentIndex) {
    const leftChildIndex = parentIndex * 2 + 1;
    return leftChildIndex < this.size();
  }

  /**
   * Checks if a parent has a right child
   * @private
   */
  _hasRightChild(parentIndex) {
    const rightChildIndex = parentIndex * 2 + 2;
    return rightChildIndex < this.size();
  }

  /**
   * Compares two nodes
   * @private
   */
  _compareAt(i, j) {
    return this._compare(this._nodes[i], this._nodes[j]);
  }

  /**
   * Swaps two nodes in the heap
   * @private
   */
  _swap(i, j) {
    const temp = this._nodes[i];
    this._nodes[i] = this._nodes[j];
    this._nodes[j] = temp;
  }

  /**
   * Checks if parent and child should be swapped
   * @private
   */
  _shouldSwap(parentIndex, childIndex) {
    if (parentIndex < 0 || parentIndex >= this.size()) {
      return false;
    }

    if (childIndex < 0 || childIndex >= this.size()) {
      return false;
    }

    return this._compareAt(parentIndex, childIndex) > 0;
  }

  /**
   * Compares children of a parent
   * @private
   */
  _compareChildrenOf(parentIndex) {
    if (!this._hasLeftChild(parentIndex) && !this._hasRightChild(parentIndex)) {
      return -1;
    }

    const leftChildIndex = parentIndex * 2 + 1;
    const rightChildIndex = parentIndex * 2 + 2;

    if (!this._hasLeftChild(parentIndex)) {
      return rightChildIndex;
    }

    if (!this._hasRightChild(parentIndex)) {
      return leftChildIndex;
    }

    const compare = this._compareAt(leftChildIndex, rightChildIndex);
    return compare > 0 ? rightChildIndex : leftChildIndex;
  }

  /**
   * Compares two children before a position
   * @private
   */
  _compareChildrenBefore(index, leftChildIndex, rightChildIndex) {
    const compare = this._compareAt(rightChildIndex, leftChildIndex);

    if (compare <= 0 && rightChildIndex < index) {
      return rightChildIndex;
    }

    return leftChildIndex;
  }

  /**
   * Recursively bubbles up a node if it's in a wrong position
   * @private
   */
  _heapifyUp(startIndex) {
    let childIndex = startIndex;
    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (this._shouldSwap(parentIndex, childIndex)) {
      this._swap(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  }

  /**
   * Recursively bubbles down a node if it's in a wrong position
   * @private
   */
  _heapifyDown(startIndex) {
    let parentIndex = startIndex;
    let childIndex = this._compareChildrenOf(parentIndex);

    while (this._shouldSwap(parentIndex, childIndex)) {
      this._swap(parentIndex, childIndex);
      parentIndex = childIndex;
      childIndex = this._compareChildrenOf(parentIndex);
    }
  }

  /**
   * Recursively bubbles down a node before a given index
   * @private
   */
  _heapifyDownUntil(index) {
    let parentIndex = 0;
    let leftChildIndex = 1;
    let rightChildIndex = 2;
    let childIndex;

    while (leftChildIndex < index) {
      childIndex = this._compareChildrenBefore(index, leftChildIndex, rightChildIndex);

      if (this._shouldSwap(parentIndex, childIndex)) {
        this._swap(parentIndex, childIndex);
      }

      parentIndex = childIndex;
      leftChildIndex = parentIndex * 2 + 1;
      rightChildIndex = parentIndex * 2 + 2;
    }
  }

  /**
   * Inserts a new value into the heap
   * @public
   * @param {number|string|object} value
   * @returns {Heap}
   */
  insert(value) {
    this._nodes.push(value);
    this._heapifyUp(this.size() - 1);
    if (this._leaf === null || this._compare(value, this._leaf) > 0) {
      this._leaf = value;
    }
    return this;
  }

  /**
   * Inserts a new value into the heap
   * @public
   * @param {number|string|object} value
   * @returns {Heap}
   */
  push(value) {
    return this.insert(value);
  }

  /**
   * Removes and returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  extractRoot() {
    if (this.isEmpty()) {
      return null;
    }

    const root = this.root();
    this._nodes[0] = this._nodes[this.size() - 1];
    this._nodes.pop();
    this._heapifyDown(0);

    if (root === this._leaf) {
      this._leaf = this.root();
    }

    return root;
  }

  /**
   * Removes and returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  pop() {
    return this.extractRoot();
  }

  /**
   * Applies heap sort and return the values sorted by priority
   * @public
   * @returns {array}
   */
  sort() {
    for (let i = this.size() - 1; i > 0; i -= 1) {
      this._swap(0, i);
      this._heapifyDownUntil(i);
    }
    return this._nodes;
  }

  /**
   * Fixes node positions in the heap
   * @public
   * @returns {Heap}
   */
  fix() {
    for (let i = Math.floor(this.size() / 2) - 1; i >= 0; i -= 1) {
      this._heapifyDown(i);
    }
    return this;
  }

  /**
   * Verifies that all heap nodes are in the right position
   * @public
   * @returns {boolean}
   */
  isValid() {
    const isValidRecursive = (parentIndex) => {
      let isValidLeft = true;
      let isValidRight = true;

      if (this._hasLeftChild(parentIndex)) {
        const leftChildIndex = parentIndex * 2 + 1;
        if (this._compareAt(parentIndex, leftChildIndex) > 0) {
          return false;
        }
        isValidLeft = isValidRecursive(leftChildIndex);
      }

      if (this._hasRightChild(parentIndex)) {
        const rightChildIndex = parentIndex * 2 + 2;
        if (this._compareAt(parentIndex, rightChildIndex) > 0) {
          return false;
        }
        isValidRight = isValidRecursive(rightChildIndex);
      }

      return isValidLeft && isValidRight;
    };

    return isValidRecursive(0);
  }

  /**
   * Returns a shallow copy of the heap
   * @public
   * @returns {Heap}
   */
  clone() {
    return new Heap(this._compare, this._nodes.slice(), this._leaf);
  }

  /**
   * Returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  root() {
    if (this.isEmpty()) {
      return null;
    }

    return this._nodes[0];
  }

  /**
   * Returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  top() {
    return this.root();
  }

  /**
   * Returns a leaf node in the heap
   * @public
   * @returns {number|string|object}
   */
  leaf() {
    return this._leaf;
  }

  /**
   * Returns the number of nodes in the heap
   * @public
   * @returns {number}
   */
  size() {
    return this._nodes.length;
  }

  /**
   * Checks if the heap is empty
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Clears the heap
   * @public
   */
  clear() {
    this._nodes = [];
    this._leaf = null;
  }

  /**
   * Builds a heap from a array of values
   * @public
   * @static
   * @param {array} values
   * @param {function} compare
   * @returns {Heap}
   */
  static heapify(values, compare) {
    if (!Array.isArray(values)) {
      throw new Error('Heap.heapify expects an array of values');
    }

    if (typeof compare !== 'function') {
      throw new Error('Heap.heapify expects a compare function');
    }

    return new Heap(compare, values).fix();
  }

  /**
   * Checks if a list of values is a valid heap
   * @public
   * @static
   * @param {array} values
   * @param {function} compare
   * @returns {boolean}
   */
  static isHeapified(values, compare) {
    return new Heap(compare, values).isValid();
  }
}
/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 */
const getMinCompare = (getCompareValue) => (a, b) => {
  const aVal = typeof getCompareValue === 'function' ? getCompareValue(a) : a;
  const bVal = typeof getCompareValue === 'function' ? getCompareValue(b) : b;
  return aVal < bVal ? -1 : 1;
};
/**
 * @class MinHeap
 * @extends Heap
 */
class MinHeap {
  /**
   * @param {function} [getCompareValue]
   * @param {Heap} [_heap]
   */
  constructor(getCompareValue, _heap) {
    this._getCompareValue = getCompareValue;
    this._heap = _heap || new Heap(getMinCompare(getCompareValue));
  }

  /**
   * Inserts a new value into the heap
   * @public
   * @param {number|string|object} value
   * @returns {MinHeap}
   */
  insert(value) {
    return this._heap.insert(value);
  }

  /**
   * Inserts a new value into the heap
   * @public
   * @param {number|string|object} value
   * @returns {Heap}
   */
  push(value) {
    return this.insert(value);
  }

  /**
   * Removes and returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  extractRoot() {
    return this._heap.extractRoot();
  }

  /**
   * Removes and returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  pop() {
    return this.extractRoot();
  }

  /**
   * Applies heap sort and return the values sorted by priority
   * @public
   * @returns {array}
   */
  sort() {
    return this._heap.sort();
  }

  /**
   * Fixes node positions in the heap
   * @public
   * @returns {MinHeap}
   */
  fix() {
    return this._heap.fix();
  }

  /**
   * Verifies that all heap nodes are in the right position
   * @public
   * @returns {boolean}
   */
  isValid() {
    return this._heap.isValid();
  }

  /**
   * Returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  root() {
    return this._heap.root();
  }

  /**
   * Returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  top() {
    return this.root();
  }

  /**
   * Returns a leaf node in the heap
   * @public
   * @returns {number|string|object}
   */
  leaf() {
    return this._heap.leaf();
  }

  /**
   * Returns the number of nodes in the heap
   * @public
   * @returns {number}
   */
  size() {
    return this._heap.size();
  }

  /**
   * Checks if the heap is empty
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this._heap.isEmpty();
  }

  /**
   * Clears the heap
   * @public
   */
  clear() {
    this._heap.clear();
  }

  /**
   * Returns a shallow copy of the MinHeap
   * @public
   * @returns {MinHeap}
   */
  clone() {
    return new MinHeap(this._getCompareValue, this._heap.clone());
  }

  /**
   * Builds a MinHeap from an array
   * @public
   * @static
   * @param {array} values
   * @param {function} [getCompareValue]
   * @returns {MinHeap}
   */
  static heapify(values, getCompareValue) {
    if (!Array.isArray(values)) {
      throw new Error('MinHeap.heapify expects an array');
    }
    const heap = new Heap(getMinCompare(getCompareValue), values);
    return new MinHeap(getCompareValue, heap).fix();
  }

  /**
   * Checks if a list of values is a valid min heap
   * @public
   * @static
   * @param {array} values
   * @param {function} [getCompareValue]
   * @returns {boolean}
   */
  static isHeapified(values, getCompareValue) {
    const heap = new Heap(getMinCompare(getCompareValue), values);
    return new MinHeap(getCompareValue, heap).isValid();
  }
}
/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 */
const getMaxCompare = (getCompareValue) => (a, b) => {
  const aVal = typeof getCompareValue === 'function' ? getCompareValue(a) : a;
  const bVal = typeof getCompareValue === 'function' ? getCompareValue(b) : b;
  return aVal < bVal ? 1 : -1;
};
/**
 * @class MaxHeap
 * @extends Heap
 */
class MaxHeap {
  /**
   * @param {function} [getCompareValue]
   * @param {Heap} [_heap]
   */
  constructor(getCompareValue, _heap) {
    this._getCompareValue = getCompareValue;
    this._heap = _heap || new Heap(getMaxCompare(getCompareValue));
  }

  /**
   * Inserts a new value into the heap
   * @public
   * @param {number|string|object} value
   * @returns {MaxHeap}
   */
  insert(value) {
    return this._heap.insert(value);
  }

  /**
   * Inserts a new value into the heap
   * @public
   * @param {number|string|object} value
   * @returns {Heap}
   */
  push(value) {
    return this.insert(value);
  }

  /**
   * Removes and returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  extractRoot() {
    return this._heap.extractRoot();
  }

  /**
   * Removes and returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  pop() {
    return this.extractRoot();
  }

  /**
   * Applies heap sort and return the values sorted by priority
   * @public
   * @returns {array}
   */
  sort() {
    return this._heap.sort();
  }

  /**
   * Fixes node positions in the heap
   * @public
   * @returns {MaxHeap}
   */
  fix() {
    return this._heap.fix();
  }

  /**
   * Verifies that all heap nodes are in the right position
   * @public
   * @returns {boolean}
   */
  isValid() {
    return this._heap.isValid();
  }

  /**
   * Returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  root() {
    return this._heap.root();
  }

  /**
   * Returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  top() {
    return this.root();
  }

  /**
   * Returns a leaf node in the heap
   * @public
   * @returns {number|string|object}
   */
  leaf() {
    return this._heap.leaf();
  }

  /**
   * Returns the number of nodes in the heap
   * @public
   * @returns {number}
   */
  size() {
    return this._heap.size();
  }

  /**
   * Checks if the heap is empty
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this._heap.isEmpty();
  }

  /**
   * Clears the heap
   * @public
   */
  clear() {
    this._heap.clear();
  }

  /**
   * Returns a shallow copy of the MaxHeap
   * @public
   * @returns {MaxHeap}
   */
  clone() {
    return new MaxHeap(this._getCompareValue, this._heap.clone());
  }

  /**
   * Builds a MaxHeap from an array
   * @public
   * @static
   * @param {array} values
   * @param {function} [getCompareValue]
   * @returns {MaxHeap}
   */
  static heapify(values, getCompareValue) {
    if (!Array.isArray(values)) {
      throw new Error('MaxHeap.heapify expects an array');
    }
    const heap = new Heap(getMaxCompare(getCompareValue), values);
    return new MaxHeap(getCompareValue, heap).fix();
  }

  /**
   * Checks if a list of values is a valid max heap
   * @public
   * @static
   * @param {array} values
   * @param {function} [getCompareValue]
   * @returns {boolean}
   */
  static isHeapified(values, getCompareValue) {
    const heap = new Heap(getMaxCompare(getCompareValue), values);
    return new MaxHeap(getCompareValue, heap).isValid();
  }
}
//
//
//
// Runtime:       1043 ms, faster than 60.62%   |   1007 ms, faster than 65.06%   |    602 ms, faster than 97.72%
// Memory Usage:  93.1 MB, less than   58.33%   |   94.6 MB, less than   50.81%   |   93.1 MB, less than   57.26%
class MedianFinder {
  constructor() {
    this.small = new MaxHeap();
    this.large = new MinHeap();
  }

  /** @param {number} num **/ /** @return {void} **/
  addNum(num) {
    this.small.insert(num);
    // make sure every num small is <= every num in large
    if (this.small.top() && this.large.top() && this.small.top() > this.large.top()) this.large.insert(this.small.pop());
    // uneven size (bigger small)
    if (this.small.size() > this.large.size() + 1) this.large.insert(this.small.pop());
    // uneven size (bigger large)
    if (this.large.size() > this.small.size() + 1) this.small.insert(this.large.pop());
  }

  /** @return {number} **/
  findMedian() {
    if (!this.small.size() && !this.large.size()) return 0;
    if (this.small.size() > this.large.size()) return this.small.top();
    if (this.large.size() > this.small.size()) return this.large.top();
    return (this.small.top() + this.large.top()) / 2;
  }
}
//
// Your MedianFinder object will be instantiated and called as such:
// var obj = new MedianFinder()
// obj.addNum(num)
// var param_2 = obj.findMedian()
//
// **************************************************************************************************************** //

const medianFinder = new MedianFinder();
console.log(medianFinder.small._heap._nodes, medianFinder.large._heap._nodes);
medianFinder.addNum(1); // arr = [1]
console.log(medianFinder.small._heap._nodes, medianFinder.large._heap._nodes);
medianFinder.addNum(2); // arr = [1, 2]
console.log(medianFinder.small._heap._nodes, medianFinder.large._heap._nodes);
console.log(medianFinder.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
console.log(medianFinder.small._heap._nodes, medianFinder.large._heap._nodes);
medianFinder.addNum(3); // arr[1, 2, 3]
console.log(medianFinder.small._heap._nodes, medianFinder.large._heap._nodes);
console.log(medianFinder.findMedian()); // return 2.0
console.log(medianFinder.small._heap._nodes, medianFinder.large._heap._nodes);

// Example 1:
// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0

// Constraints:
// -105 <= num <= 105
// There will be at least one element in the data structure before calling findMedian.
// At most 5 * 104 calls will be made to addNum and findMedian.

// Follow up:
// If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
// If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?