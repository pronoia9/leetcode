// **********************************************   146. LRU Cache   ********************************************** //
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
// Implement the LRUCache class:
// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.
// https://leetcode.com/problems/lru-cache/
//
/** @param {number} capacity **/
//
// Runtime:        675 ms, faster than 63.14%   |    667 ms, faster than 67.87%
// Memory Usage:  96.3 MB, less than   78.39%   |   95.2 MB, less than   96.44%
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  /** @param {number} key **/ /** @return {number} **/
  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  /** @param {number} key **/ /** @param {number} value **/ /** @return {void} **/
  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) this.cache.delete(this.cache.keys().next().value);
  }
}
// Your LRUCache object will be instantiated and called as such:
// var obj = new LRUCache(capacity)
// var param_1 = obj.get(key)
// obj.put(key,value)
// **************************************************************************************************************** //

const lru = new LRUCache(2);
console.log(lru.cache);
console.log(lru.put(1, 1)); // cache is {1=1}
console.log(lru.cache);
console.log(lru.put(2, 2)); // cache is {1=1, 2=2}
console.log(lru.cache);
console.log(lru.get(1)); // return 1
console.log(lru.cache);
console.log(lru.put(3, 3)); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lru.cache);
console.log(lru.get(2)); // returns -1 (not found)
console.log(lru.cache);
console.log(lru.put(4, 4)); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lru.cache);
console.log(lru.get(1)); // return -1 (not found)
console.log(lru.cache);
console.log(lru.get(3)); // return 3
console.log(lru.cache);
console.log(lru.get(4)); // return 4
console.log(lru.cache);

// Example 1:
// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

// Constraints:
// 1 <= capacity <= 3000
// 0 <= key <= 104
// 0 <= value <= 105
// At most 2 * 105 calls will be made to get and put.