// ******************************************   1710. Maximum Units on a Truck   ****************************************** //
// You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
// numberOfBoxesi is the number of boxes of type i.
// numberOfUnitsPerBoxi is the number of units in each box of the type i.
// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
// Return the maximum total number of units that can be put on the truck.
//
// Runtime:      118 ms, faster than 50.90%   |   138 ms,  faster than 32.04%   |   87 ms,   faster than 84.88%
// Memory Usage:  45 MB, less than   40.57%   |   44.3 MB, less than   76.95%   |   44.5 MB, less than   69.31%
const maximumUnits = (boxTypes, truckSize) => {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let boxes = 0, units = 0;
  for (let i = 0; i < boxTypes.length && boxes < truckSize; i++) {
    for (let j = 0; j < boxTypes[i][0] && boxes < truckSize; j++) {
      boxes++;
      units += boxTypes[i][1];
    }
  }

  return units;
};
// ************************************************************************************************************************ //

console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
);
console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  )
);

// Example 1:
// Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
// Output: 8
// Explanation: There are:
// - 1 box of the first type that contains 3 units.
// - 2 boxes of the second type that contain 2 units each.
// - 3 boxes of the third type that contain 1 unit each.
// You can take all the boxes of the first and second types, and one box of the third type.
// The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.

// Example 2:
// Input: boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
// Output: 91
