// *********************************************   139. Word Break   ********************************************** //
// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.
// https://leetcode.com/problems/word-break/
//
// Dynamic programming
//
// const wordBreak = (s, wordDict) => {
//   // let dp = new Array(s.length + 1).fill(false);
//   // dp[s.length] = true;
//   // for (let i = s.length - 1; i >= 0; i--) {
//   //   wordDict.forEach((word) => {
//   //     if (i + s[i].length <= s.length && s.slice(i, i + word.length) === word) dp[i] = dp[i + word.length];
//   //     if (dp[i]) return;
//   //   });
//   // }
//   // return dp[0];
// };
//
// Dynamic programming
// Runtime:         80 ms, faster than 83.15%
// Memory Usage:  43.7 MB, less than   74.42%
const wordBreak = (s, wordDict) => {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const curr = s.slice(j, i);
      // console.log('word: ', s, '\ni:    ', i, '\nj:    ', j, '\ncurr: ',curr, '\ndp[j]:', dp[j], '\ncheck:', wordDict.includes(curr), '\ndp[i]:', dp[i], '\ndp :', dp.map((e) => e ? 'T' : 'F'), '\n');
      // console.log('\nword:', s, '\ni = ' + i + '  j = ' + j + '  ' + curr, '\ndp =', dp, '\n\n');
      if (dp[j] && wordDict.includes(curr)) dp[i] = true;
      if (dp[i]) continue;
    }
  }
  return dp[s.length];
};
// **************************************************************************************************************** //

console.log(wordBreak('leetcode', ['leet', 'code']));
console.log(wordBreak('applepenapple', ['apple', 'pen']));
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
console.log(wordBreak('aaaaaaa', ['aaaa', 'aaa']));
console.log(wordBreak('goalspecial', ['go', 'goal', 'goals', 'special']));

// Example 1:
// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:
// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

// Constraints:
// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.