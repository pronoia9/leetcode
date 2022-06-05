// *********************************************   14. Longest Common Prefix   ******************************************** //
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// https://leetcode.com/problems/longest-common-prefix/
//
// Runtime:       73 ms,    faster than 74.37%
// Memory Usage:  43.6 MB,  less than   27.63%
{
  let longestCommonPrefix = function (strs) {
    let longest = '';
    let word1 = strs[0];
    let word2 = strs[1];
    let letter = word1[0];

    if (strs.length > 1) {
      // check if we nulled the letter, then check if index is in range, then check if the current word were looking at is shorter
      for (let i = 0; i < word1.length && word2 && word2[i] && letter; i++) {
        letter = word1[i];

        for (let j = 1; j < strs.length; j++) {
          word2 = strs[j];

          // if were at the last element in the array and the letter matches, add it to longest
          if (word2[i] === letter) {
            j === strs.length - 1 && (longest += letter);
          } else {
            letter = null;
          }
        }
      }
    } else return strs[0];

    return longest;
  };
}
//
// Runtime:       84 ms,    faster than 52.03%
// Memory Usage:  42.7 MB,  less than   46.95%
{
  let longestCommonPrefix = function (strs) {
    let longest = '';
    let word = strs[1];
    let letter = strs[0][0];

    if (strs.length > 1) {
      // check if we nulled the letter, then check if index is in range, then check if the current word were looking at is shorter
      for (let i = 0; i < strs[0].length && word && word[i] && letter; i++) {
        letter = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
          word = strs[j];

          // if were at the last element in the array and the letter matches, add it to longest
          if (word[i] === letter) {
            j === strs.length - 1 && (longest += letter);
          } else {
            letter = null;
          }
        }
      }
    } else return strs[0];

    return longest;
  };
}
//
// Runtime:       73 ms,    faster than 74.37%   |   112 ms,  faster than 15.58%   |   77 ms,   faster than 65.43%
// Memory Usage:  43.1 MB,  less than   34.63%   |   43.5 MB, less than   28.43%   |   43.1 MB, less than   34.63%
export default function longestCommonPrefix(strs) {
  // since were checking if letter isnt null, set it to null if the array doesnt have at least 2 items
  let letter = strs.length > 1 ? strs[0][0] : null;
  // and set longest to first if we dont have at least two elements in the array
  let longest = strs.length > 1 ? '' : strs[0];
  // set it to 2nd element in the array cause were checking the words length in the initial loop, cant have it be null in the beginning
  let word = strs[1];

  // check if we nulled the letter, then check if index is in range, then check if the current word were looking at is shorter
  for (let i = 0; letter && i < strs[0].length && word[i]; i++) {
    letter = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      word = strs[j];

      // if were at the last element in the array and the letter matches, add it to longest
      if (word[i] === letter) {
        j === strs.length - 1 && (longest += letter);
      } else {
        letter = null;
      }
    }
  }

  return longest;
}

// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
// console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
// console.log(longestCommonPrefix(['a']));
// ************************************************************************************************************************ //