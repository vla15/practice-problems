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

const binarySearch = function(array, target, first = 0, last = array.length - 1) {
  debugger;
  var start = first;
  var end = last; 
  var middle = Math.floor((end + start) / 2);

  //check if middle index is value
  if (array[middle] === target) {
    // if so return index
    return middle;
  }
  if (start === end) {
    return null;
  }
  //check if start equals end
    // return null
  if (target > array[middle]) {
    middle++
    return binarySearch(array, target, start = middle, end)
  } else if (target < array[middle]) {
    middle--
    return binarySearch(array, target, start, end = middle);
  }
  // if target > middle index value, right half of array
  // if target < middle index value, left half of array

}

// console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7], 5));
// console.log(binarySearch([0, 1, 2], 0))

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
  } else {
    sortedArr = rotated.slice(0);
  }
  return binarySearch(sortedArr, target);
          // splice up to that index
          // merge with original array
      // else array is sorted
    // utilize binary search
      //build out binary search function and pass in sorted array and target

};



console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5)
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null)

