//binary search
const binarySearch = function(array, target, left = 0, right = array.length) {
  //termination case left boundary greater than right boundary
  if (left > right) {
    return null;
  }
  let mid = Math.floor((right + left) / 2);
  if (target === array[mid]) {
    return mid;
  } else if (target > array[mid]) {
    return binarySearch(array, target, mid + 1, right);
  } else {
    return binarySearch(array, target, left, mid - 1);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5));
//2 and 3
  //takes an array as input
  //checks if mid is target
    //if mid greater than target
      //search right half of array
    //if mid less than target
      //search left half of array
  //return
//breath first search
//depth first search