// https://leetcode.com/problems/length-of-last-word/
//
const lengthOfLastWord = (s) => s.split(' ').filter(n => n).pop().length;
