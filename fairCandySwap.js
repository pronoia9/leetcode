// ***********************************************   888. Fair Candy Swap   *********************************************** //
// Alice and Bob have a different total number of candies. You are given two integer arrays aliceSizes and bobSizes where aliceSizes[i] is the number of candies of the ith box of candy that Alice has and bobSizes[j] is the number of candies of the jth box of candy that Bob has.
// Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. The total amount of candy a person has is the sum of the number of candies in each box they have.
// Return an integer array answer where answer[0] is the number of candies in the box that Alice must exchange, and answer[1] is the number of candies in the box that Bob must exchange. If there are multiple answers, you may return any one of them. It is guaranteed that at least one answer exists.
// https://leetcode.com/problems/fair-candy-swap/
// 
// Runtime:        490 ms, faster than 48.98%   |    556 ms, faster than 38.77%   |    691 ms, faster than 30.61%
// Memory Usage:  46.5 MB, less than   65.99%   |   46.2 MB, less than   74.83%   |   46.1 MB, less than   84.35%
const fairCandySwap = (aliceSizes, bobSizes) => {
  const totalAlice = aliceSizes.reduce((acc, curr) => (acc += curr), 0),
    totalBob = bobSizes.reduce((acc, curr) => (acc += curr), 0),
    equality = (totalAlice + totalBob) / 2;

  for (const candy of aliceSizes) {
    const require = equality - (totalAlice - candy);
    if (bobSizes.includes(require)) return [candy, require];
  }
};
//
// Runtime:        676 ms, faster than 31.29%   |    499 ms, faster than 45.58%   |    636 ms, faster than 34.69%
// Memory Usage:  46.5 MB, less than   62.58%   |   46.3 MB, less than   71.43%   |   46.1 MB, less than   84.35%
{
  const fairCandySwap = (aliceSizes, bobSizes) => {
    const totalAlice = aliceSizes.reduce((acc, curr) => (acc += curr), 0),
      totalBob = bobSizes.reduce((acc, curr) => (acc += curr), 0),
      total = totalAlice + totalBob,
      half = total / 2;

    for (const candy of aliceSizes) {
      const check = half - (totalAlice - candy);
      if (bobSizes.includes(check)) return [candy, check];
    }
  };
}
//
// Runtime:        927 ms, faster than 18.37%
// Memory Usage:  46.1 MB, less than   84.35%
{
  const fairCandySwap = (aliceSizes, bobSizes) => {
    const totalAlice = aliceSizes.reduce((acc, curr) => (acc += curr), 0),
      totalBob = bobSizes.reduce((acc, curr) => (acc += curr), 0),
      difference = totalAlice - totalBob;
    let result = [];
    for (let i = 0; i < aliceSizes.length; i++) {
      for (j = 0; j < bobSizes.length; j++) {
        // console.log(aliceSizes[i] - bobSizes[j]);
        // console.log(difference / 2);
        if (aliceSizes[i] - bobSizes[j] === difference / 2) {
          result.push(aliceSizes[i], bobSizes[j]);
          return result;
        }
      }
    }
    // console.log(totalAlice);
    // console.log(totalBob);
    // console.log(difference);
    return result;
  };
}
//
{
  const fairCandySwap = (aliceSizes, bobSizes) => {
    const totalAlice = aliceSizes.reduce((acc, curr) => (acc += curr), 0);
    const totalBob = bobSizes.reduce((acc, curr) => (acc += curr), 0);
    const difference = (totalAlice - totalBob) >> 1;
    const set = new Set(aliceSizes);
    for (const candy of bobSizes) {
      if (set.has(candy + difference)) return [candy + difference, candy];
    }

    console.log(totalAlice);
    console.log(totalBob);
    console.log(difference);
  };
}
// ************************************************************************************************************************ //

console.log(fairCandySwap([1, 1], [2, 2]));
console.log(fairCandySwap([1, 2], [2, 3]));
console.log(fairCandySwap([2], [1, 3]));