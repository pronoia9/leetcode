// ****************************************************   1. Two Sum   **************************************************** //

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// https://leetcode.com/problems/two-sum/
//
// Runtime:       134 ms,   faster than   37.22%
// Memory Usage:  42.1 MB,  less than     89.32%
{
  var twoSum = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  };
}
//
// Runtime:       293 ms,   faster than   6.83%
// Memory Usage:  48.2 MB,  less than     5.01%
{
  var twoSum = (numbers, target) => {
    let result = [];
    numbers.forEach((num, idx) => {
      let search = target - num;
      if (numbers.slice(idx + 1).includes(search)) {
        result = [idx, numbers.findIndex((e, i) => i > idx && e === search)];
      }
    });
    return result;
  };
}
//
// Runtime:       66 ms,    faster than   94.10%
// Memory Usage:  43.1 MB,  less than     32.96%
{
  let twoSum = (numbers, target) => {
    let search = new Map();

    for (let i = 0; i < numbers.length; i++) {
      if (search.has(target - numbers[i])) {
        return [search.get(target - numbers[i]), i];
      }
      search.set(numbers[i], i);
    }
    return [];
  };
}
// ************************************************************************************************************************ //