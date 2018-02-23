//merge sort
//spilt array into two arrays
//spilt until array is of one size and compare
const mergeSort = function(array) {
  if (array.length < 2) {
    return array
  }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

//takes all values of left and right and orders them
const merge = function(left, right) {
  let results = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      results.push(left[leftIndex++]);
    } else {
      results.push(right[rightIndex++]);
    }
  }
  return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([17, 2, 5, 23, 1, 4, 0]));

//[3, 2, 1, 5, 7];
// [] [1] [2, 3, 5, 7]
//[2, 3, 5, 7
// [] [2] [3]
//bubble sort

//quick sort