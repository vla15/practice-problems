/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

var binarySearch = function (array, target) {
  var start = arguments[2] || 0;
  var end = arguments[3] || array.length;
  console.log(start, end);
  // get middle value of arr with start + end
  var middle = Math.floor((start + end) / 2);
  // check if middel value equals target
  if (array[middle] === target) {
    return middle;
    // return index
  } else if (array[start] === target) {
    return start;
  } else if (array[end] === target) {
    return end
  }
  // if middle equals to start or end
  // basecase
  if (middle === start || middle === end) {
    return null;
    // return false
  }
  // placeholder for start index
  // placeholder for end index
  // check if target is smaller than middle
  if (target < array[middle]) {
    // recurse with array from start to middle -1
    end = middle - 1;
    return binarySearch(array, target, start, end);
  }
  if (target > array[middle]) {
    start = middle + 1;
    return binarySearch(array, target, start, end);
  }
  // check if target is larger than middle
    // recurse with array from end to middle +1
};

var index = binarySearch([1, 2, 3, 4, 5], 2)
console.log(index);