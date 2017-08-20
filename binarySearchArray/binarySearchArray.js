/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

var binarySearch = function (array, target, left, right) {

  var left = left || 0;
  var right = right || array.length - 1;

  var mid = Math.floor((left + right)/ 2);
  if (array[mid] === target) {
    return mid;
  }

  if (target < array[mid]) {
    return binarySearch(array, target, left, mid - 1)
  } else {
    return binarySearch(array, target, mid + 1, right);
  }

  return null;
  //split array
  //check which side of array target falls under
  //recurse
};

console.log(binarySearch([1, 2, 3, 4, 5], 5));

//5 / 2 2.5 mid 2
