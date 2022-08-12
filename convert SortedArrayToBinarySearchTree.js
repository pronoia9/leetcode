// *****************************   108. Convert Sorted Array to Binary Search Tree   ****************************** //
// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
//
// Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
// @param {number[]} nums
// @return {TreeNode}
// 
// Runtime:         80 ms, faster than 91.90%   |    101 ms, faster than 67.19%   |    163 ms, faster than  5.09%
// Memory Usage:  44.6 MB, less than   45.07%   |   44.3 MB, less than   75.44%   |   43.5 MB, less than   99.69%
let sortedArrayToBST = (nums) => {
  const helper = (left, right) => {
    if (left > right) return null;

    let middle = Math.round((left + right) / 2);
    let root = new TreeNode(nums[middle]);

    root.left = helper(left, middle - 1);
    root.right = helper(middle + 1, right);

    return root;
  };

  return helper(0, nums.length - 1);
};
//
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/discuss/35252/Intuitive-Javascript-Solution
// Runtime:      115 ms, faster than 45.33%   |    104 ms, faster than 63.08%   |     91 ms, faster than 79.18%
// Memory Usage:  45 MB, less than   10.70%   |   44.9 MB, less than   24.20%   |   43.9 MB, less than   97.77%
let sortedArrayToBST = (nums, left = 0, right = nums.length - 1) => {
  if (left > right) return null;

  let middle = Math.floor((left + right) / 2);
  let root = new TreeNode(nums[middle]);

  root.left = sortedArrayToBST(nums, left, middle - 1);
  root.right = sortedArrayToBST(nums, middle + 1, right);

  return root;
};
// **************************************************************************************************************** //

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
console.log(sortedArrayToBST([1, 3]));

// Example 1:
// https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:
// https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg

// Example 2:
// https://assets.leetcode.com/uploads/2021/02/18/btree.jpg
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.