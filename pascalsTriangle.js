// https://leetcode.com/problems/pascals-triangle/
// 
// Runtime:         61 ms, faster than 93.37%
// Memory Usage:  42.3 MB, less than 15.20%
const generate = (numRows) => {
    const res = [];
    for (let i = 0; i < numRows; i++) {
        res[i] = [];
        res[i][0] = 1, res[i][i] = 1;
        for (let j = 1; j < i; j++) {
            res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
        }
    } 
    return res;
};
