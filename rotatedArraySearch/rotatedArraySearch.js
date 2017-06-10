/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  // Your code here:
  //input unsorted array
  //input target value
  //output index of target value
  // resort the array
  let isSorted = true;
  let sliceIndex;
  let sortedArr;
    // have to find where items have been rotated at
    // iterate through the array
  for (let index = 0; index < rotated.length; index++) {
    if (rotated[index] > rotated[index + 1]) {
      if (isSorted) {
        isSorted = false;
        sliceIndex = index + 1;
      }
    }
      // start from beginning
      // check if next value is less than current
        // current value less than next value
  }
  if (!isSorted) {
    sortedArr = rotated.slice(sliceIndex).concat(rotated.slice(0, sliceIndex))
  }
  return sortedArr;
          // splice up to that index
          // merge with original array
      // else array is sorted
    // utilize binary search
      //build out binary search function and pass in sorted array and target

};

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3]));


