/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(array) {
  //input: array of numbers
  //output: contiguous sum of numbers
  //constraint: o(n)

  //create pointers to value in memory
  var currentValue = 0;
  var preValue = 0;
  var lowestNegative = 0;

  for (var index = 0; index < array.length; index++) {

    preValue = Math.max(0, preValue + array[index]);
    currentValue = Math.max(preValue, currentValue);
    if (array[index] < 0) {
      if (lowestNegative === 0) {
        lowestNegative = array[index];
      } else {
        lowestNegative = Math.max(lowestNegative, array[index]);
      }
    }
  }

  return currentValue || lowestNegative;
  //traverse the array
  //
};

console.log(sumArray([1, 6, 3, -3, -3, 4, 5]));
console.log(sumArray([-3, -2, -1]))