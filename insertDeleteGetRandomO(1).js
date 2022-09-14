// *************************************   380. Insert Delete GetRandom O(1)   ************************************ //
// Implement the RandomizedSet class:
// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.
// https://leetcode.com/problems/insert-delete-getrandom-o1/
//
// Map
// Runtime:        422 ms, faster than 90.47%
// Memory Usage:  93.6 MB, less than   95.12%
class RandomizedSet {
  constructor() {
    this.nums = [];
    this.map = new Map();
  }

  insert(val) {
    if (this.map.has(val)) return false;
    this.map.set(val, this.nums.length);
    this.nums.push(val);
    return true;
  }

  remove(val) {
    if (!this.map.has(val)) return false;
    const i = this.map.get(val);
    [this.nums[i], this.nums[this.nums.length - 1]] = [this.nums[this.nums.length - 1], this.nums[i]];
    this.nums.pop();
    this.map.delete(val);
    this.map.set(this.nums[i], i);
    return true;
  }

  getRandom() {
    return this.nums[Math.floor(Math.random() * this.nums.length)];
  }
}
//
// Set
// Runtime:         789 ms, faster than 19.68%   |     603 ms, faster than 55.09%
// Memory Usage:  117.5 MB, less than   17.02%   |   115.6 MB, less than   25.00%
{
  class RandomizedSet {
    constructor() {
      this.nums = new Set();
    }

    /** @param {number} val **/ /** @return {boolean} **/
    insert(val) {
      const len = this.nums.size;
      this.nums.add(val);
      if (this.nums.size === len) return false;
      else return true;
    }
    t;
    /** @param {number} val **/ /** @return {boolean} **/
    remove(val) {
      if (!this.nums.delete(val)) return false;
      else return true;
    }

    /** @return {number} **/
    getRandom() {
      return [...this.nums][Math.floor(Math.random() * this.nums.size)];
    }
  }
}
//
// Set
// Runtime:         778 ms, faster than 20.95%   |     667 ms, faster than 43.82%
// Memory Usage:  100.3 MB, less than   81.25%   |   110.2 MB, less than   45.18%
{
  class RandomizedSet {
    constructor() {
      this.nums = [];
      this.set = new Set();
    }

    insert(val) {
      this.set.add(val);
      if (this.set.size === this.nums.length) return false;
      this.nums.push(val);
      return true;
    }

    remove(val) {
      if (!this.set.delete(val)) return false;
      this.nums.splice(this.nums.indexOf(val), 1);
      return true;
    }

    getRandom() {
      return this.nums[Math.floor(Math.random() * this.nums.length)];
    }
  }
}
//
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// **************************************************************************************************************** //

const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1));
console.log(randomizedSet.nums);
console.log(randomizedSet.remove(2));
console.log(randomizedSet.nums);
console.log(randomizedSet.insert(2));
console.log(randomizedSet.nums);
console.log(randomizedSet.getRandom());
console.log(randomizedSet.remove(1));
console.log(randomizedSet.nums);
console.log(randomizedSet.insert(2));
console.log(randomizedSet.nums);
console.log(randomizedSet.getRandom());

// Example 1:
// Input
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// Output
// [null, true, false, true, 2, true, false, 2]
// Explanation
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
// randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
// randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
// randomizedSet.insert(2); // 2 was already in the set, so return false.
// randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.

// Constraints:
// -231 <= val <= 231 - 1
// At most 2 * 105 calls will be made to insert, remove, and getRandom.
// There will be at least one element in the data structure when getRandom is called.