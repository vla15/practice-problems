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
  // get middle value of arr with start + end
  var middle = Math.floor((end + start) / 2);
  // check if middel value equals target
  if (array[middle] === target) {
    return middle;
    // return index
  }
  // if middle equals to start or end
  // basecase
  if (start === end || array.length < 2) {
    return null;
    // return false
  }
  // placeholder for start index
  // placeholder for end index
  // check if target is smaller than middle
  if (array[middle] > target) {
    // recurse with array from start to middle -1
    return binarySearch(array, target, start, middle - 1);
  }
  if (array[middle] < target) {
    return binarySearch(array, target, middle + 1, end);
  }
  // check if target is larger than middle
    // recurse with array from end to middle +1
};

var index = binarySearch([5], 4)
console.log(index);