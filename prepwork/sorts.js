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

console.log('mergeSort: ', mergeSort([17, 2, 5, 23, 1, 4, 0]));
//bubble sort

const bubbleSort = function(array) {
  let swapped = false;
  while (!swapped) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        swapped = true;
      }
    }
    swapped = !swapped;
  }
  return array;
}

console.log('bubble sort: ', bubbleSort([2, 9, 3, 4]));


//quick sort
const quickSort = function(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot = array[0];
  let left = [];
  let right = [];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i])
    }
  }
  return quickSort(left).concat(pivot, quickSort(right))
}
console.log('quick sort:', quickSort([3, 1, 2, 12, 15,4 ]))

//insertion sort
const insertionSort = function(array) {
  if (array.length < 2) {
    return array;
  }
  for (var i = 1; i < array.length; i++) {
    var value = array[i];
    //iterates from one index back of i to 0
    //shifts back all values
    for (var j = i - 1; j >= 0 && array[j] > value; j--) {
      //swap next value with current
      array[j + 1] = array[j];
    }
    //places the value in correct spot
    array[j + 1] = value;
  }
  return array;
}
console.log('insertion sort: ',insertionSort([42, 1, 4, 52, 3]));
console.log('insertion sort: ', insertionSort([2, 3, 4, 5, 1]))

//insertion sort approaches the problem by iterating backwards only if the current value at index is less then the value at the previous index.  It will continue until it finds the spot to place the current value at.

//selection sort

//bucket sort