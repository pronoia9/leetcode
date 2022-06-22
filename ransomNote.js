// *************************************************   383. Ransom Note   ************************************************* //
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.
// https://leetcode.com/problems/ransom-note/
// 
// Runtime:       117 ms,  faster than 59.96%   |   105 ms,  faster than 74.11%   |   92 ms,   faster than 88.34%
// Memory Usage:  46.6 MB, less than   28.00%   |   45.9 MB, less than   40.27%   |   45.9 MB, less than   41.73%
const canConstruct = (ransomNote, magazine) => {
  const ransom = ransomNote.split(''), source = magazine.split('');
  
  while (ransom.length > 0) {
    const check = source.indexOf(ransom.pop());

    if (check === -1) return false;
    else source.splice(check, 1);
  }

  return true;
};
// ************************************************************************************************************************ //

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));