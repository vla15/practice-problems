const assertEqual = (expected, actual) => {
  if (JSON.stringify(expected) === JSON.stringify(actual)) {
    console.log('equal');
  } else {
    console.log(`Error, expected ${expected} but got: ${actual}`);
  }
}
//quickSort
const quickSort = (arr) => {
  if (arr.length === 0) {
    return [];
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
//quickSort tests;
let qTest = [3, 5, 0, 1, 2, 4];
let qResult = quickSort(qTest);
assertEqual([0, 1, 2, 3, 4, 5], qResult);

//mergeSort
const merge = (left, right) => {
  let results = [];
  let il = 0;
  let ir = 0;
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      results.push(left[il++]);
    } else {
      results.push(right[ir++]);
    }
  }
  if (il === left.length) {
    return results.concat(right.slice(ir));
  } else {
    return results.concat(left.slice(il));
  }
}

let mergeTest = merge([5], [7]);
assertEqual([5, 7], mergeTest);
mergeTest = merge([3, 9], [6]);
assertEqual([3, 6, 9], mergeTest);

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

let mergeSortTest = mergeSort([5, 9, 2, 3, 5, 4, 3, 1])
assertEqual([1, 2, 3, 3, 4, 5, 5, 9], mergeSortTest);
//insertionSort
//bubble