// ********************************************   35. Search Insert Position   ******************************************** //
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// https://leetcode.com/problems/search-insert-position/
//
// Runtime:      99 ms,   faster than 20.23%
// Memory Usage: 42.3 MB, less than   34.56%
{
  const searchInsert = (nums, target) => {
    let left = 0,
      right = nums.length - 1,
      middle;

    if (target > nums[right]) return right + 1;
    else if (target < nums[left]) return left;
    else
      while (left < right) {
        middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) return middle;
        else if (target > nums[middle]) left++;
        else if (target < nums[middle]) right--;
      }

    return left;
  };
}
//
// ************************************************************************************************************************ //
// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
// console.log(searchInsert());
