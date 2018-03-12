//bubbleSort
const bubbleSort = function(arr) {
  let isSorted = false;
  while (!isSorted) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        isSorted = true;
      }
    }
    isSorted = !isSorted;
  }
  return arr;
}
//merge
const merge = function(left, right) {
  let results = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      results.push(left[leftIndex]);
      leftIndex++;
    } else {
      results.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return results.concat(left.slice(leftIndex), right.slice(rightIndex));
}
//mergesort
const mergeSort = function(arr) {
  //breaks array down to a single value
  //adds them back up
  if (arr.length < 2) {
    return arr;
  }
  //spilt arrays in pieces
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
//countingSort
const countingSort = function(arr) {
  //using arr values as a new arrays index
  let counts = [];
  for (var i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]]++
    } else {
      counts[arr[i]] = 1;
    }
  }
  //iterate through counts
  //each value in the array represents how many times the value occurs
  //the index of those values is the value itself
  let results = [];
  counts.forEach(function(counts, value) {
    for (var x = 0; x < counts; x++) {
      results.push(value);
    }
  })
  return results
}
//insertinSort
const insertionSort = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}
//quickSort
const quickSort = function(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[0];
  let lesser = [];
  let greater = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return quickSort(lesser).concat(pivot, quickSort(greater));
  //use a pivot to separate less than and greater than
}




















// //merge sort
// //O(n log n); iterates through the entire array but spilts array in half
// const mergeSort = function(array) {
//   if (array.length < 2) {
//     return array
//   }
//   let mid = Math.floor(array.length / 2);
//   let left = array.slice(0, mid);
//   let right = array.slice(mid);

//   return merge(mergeSort(left), mergeSort(right));
// }

// //takes all values of left and right and orders them
// const merge = function(left, right) {
//   let results = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       results.push(left[leftIndex++]);
//     } else {
//       results.push(right[rightIndex++]);
//     }
//   }
//   return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// console.log('mergeSort: ', mergeSort([17, 2, 5, 23, 1, 4, 0]));
// //bubble sort

// const bubbleSort = function(array) {
//   let swapped = false;
//   while (!swapped) {
//     for (var i = 0; i < array.length; i++) {
//       if (array[i] > array[i + 1]) {
//         let tmp = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = tmp;
//         swapped = true;
//       }
//     }
//     swapped = !swapped;
//   }
//   return array;
// }

// console.log('bubble sort: ', bubbleSort([2, 9, 3, 4]));


// //quick sort
// //O(n log n)
// const quickSort = function(array) {
//   if (array.length < 2) {
//     return array;
//   }
//   let pivot = array[0];
//   let left = [];
//   let right = [];
//   for (var i = 1; i < array.length; i++) {
//     if (array[i] < pivot) {
//       left.push(array[i]);
//     } else {
//       right.push(array[i])
//     }
//   }
//   return quickSort(left).concat(pivot, quickSort(right))
// }
// console.log('quick sort:', quickSort([3, 1, 2, 12, 15,4 ]))

// //insertion sort
// const insertionSort = function(array) {
//   if (array.length < 2) {
//     return array;
//   }
//   for (var i = 1; i < array.length; i++) {
//     var value = array[i];
//     //iterates from one index back of i to 0
//     //shifts back all values
//     for (var j = i - 1; j >= 0 && array[j] > value; j--) {
//       //swap next value with current
//       array[j + 1] = array[j];
//     }
//     //places the value in correct spot
//     array[j + 1] = value;
//   }
//   return array;
// }
// console.log('insertion sort: ',insertionSort([42, 1, 4, 52, 3]));
// console.log('insertion sort: ', insertionSort([2, 3, 4, 5, 1]))

// //insertion sort approaches the problem by iterating backwards only if the current value at index is less then the value at the previous index.  It will continue until it finds the spot to place the current value at.

// //selection sort

// //bucket sort

// //counting sort
// //time efficient but very space inefficient
// const countingSort = function(array) {
//   let numOfCounts = [];
//   let results = [];
//   //create a new array that tracks count of values in input array
//   //value of the input array will represent the index of new array
//   for (var i = 0; i < array.length; i++) {
//     if (numOfCounts[array[i]]) {
//       numOfCounts[array[i]]++;
//     } else {
//       numOfCounts[array[i]] = 1;
//     }
//   }
//   numOfCounts.forEach(function(counts, number) {
//     if (numOfCounts[number]) {
//       for (var x = 0; x < counts; x++) {
//         results.push(number);
//       }
//     }
//   })
//   return results;
// }

// console.log('counting sort: ', countingSort([2, 1, 3, 4, 6, 5, 1]));

module.exports = {
  mergeSort: mergeSort,
  merge: merge,
  bubbleSort: bubbleSort,
  quickSort: quickSort,
  insertionSort: insertionSort,
  countingSort: countingSort
}