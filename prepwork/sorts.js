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
//bubble sort

const bubbleSort = function(array) {
  let sorted = false;
  while (!sorted) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        sorted = true;
      }
    }
    sorted = !sorted;
  }
  return array;
}

console.log(bubbleSort([2, 9, 3, 4]));


//quick sort