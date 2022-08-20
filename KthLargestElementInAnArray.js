// ***********************************   215. Kth Largest Element in an Array   *********************************** //
// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// You must solve it in O(n) time complexity.
// https://leetcode.com/problems/kth-largest-element-in-an-array/
//
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
//
{
  const findKthLargest = (nums, k) => nums.sort((a, b) => b - a)[k - 1];
}
//
// Quicksort partition
// Runtime:       195 ms, faster than 25.71%   |   180 ms, faster than 30.32%   |   170 ms, faster than 33.96%
// Memory Usage:  48.8 MB, less than  31.52%   |    50 MB, less than   23.67%   |    49 MB, less than   29.72%
const findKthLargest = (nums, k) => {
  k = nums.length - k;
  const quickSelect = (l, r) => {
    let pivot = nums[r], p = l;
    for (let i = l; i < r; i++) {
      // if nums[i] is <= pivot, then swap at the p index
      if (nums[i] <= pivot) {
        [nums[p], nums[i]] = [nums[i], nums[p]];
        // every time thers a swap, increment the p pointer and put it in the next position
        p += 1;
      }
    }
    // swap the pivot value with the p index
    const temp = nums[p];
    nums[p] = nums[r];
    nums[r] = temp;

    if (p > k) return quickSelect(l, p - 1);
    if (p < k) return quickSelect(p + 1, r);
    else return nums[p];
  };
  return quickSelect(0, nums.length - 1);
};
//
// Runtime:        176 ms, faster than 31.68%
// Memory Usage:  48.7 MB, less than   32.36%
{
  const findKthLargest = (nums, k) => quickSort(nums)[nums.length - k];
}
//
// const findKthLargest = (nums, k) => {
//   const quickSort = (array) => {
//     if (array.length <= 1)  return array;
//     let pivot = array[0], left = [], right = [];
//     for (var i = 1; i < array.length; i++)  array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
//     return quickSort(left).concat(pivot, quickSort(right));
//   }
//   return quickSort(nums)[nums.length - k];
// };
//
// Min Heap
// Runtime:        283 ms, faster than 10.15%
// Memory Usage:  66.2 MB, less than    5.07%
{
  const findKthLargest = (nums, k) => {
    const minHeap = new MinPriorityQueue();
    nums.forEach((num) => {
      if (minHeap.size() < k) minHeap.enqueue(num);
      else if (minHeap.front() < num) {
        //.element
        minHeap.dequeue();
        minHeap.enqueue(num);
      }
    });
    return minHeap.dequeue(); //.element
  };
}
// **************************************************************************************************************** //

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
console.log(findKthLargest([7, 6, 5, 4, 3, 2, 1], 2));

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:
// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

const swap = (arr, left, right) => {
  [arr[left], arr[right]] = [arr[j], arr[r]];
};

const partition = (arr, left, right) => {
  const pivot = arr[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;
    if (i <= j) {
      //swap two elements
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  let index;
  if (arr.length > 1) {
    //index returned from partition
    index = partition(arr, left, right);
    //more elements on the left side of the pivot
    if (left < index - 1) quickSort(arr, left, index - 1);
    //more elements on the right side of the pivot
    if (index < right) quickSort(arr, index, right);
  }
  return arr;
};
