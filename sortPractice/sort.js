//bubbleSort
const bubbleSort = (arr) => {
  //track sorting
  let wasSorted = false;
  while (!wasSorted) {
    for (var index = 0; index < arr.length; index++) {
      if (arr[index + 1] < arr[index]) {
        var temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        wasSorted = true;
      }
    }
    wasSorted = !wasSorted;
  }
  return arr;
}

console.log(bubbleSort([4, 9, 123, 3, 0, 1, 19]));
//insertionSort

const insertionSort = (arr) => {
  //iterate through initial array
  for (var i = 0; i < arr.length; i++) {
    var currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentValue;
  }
  return arr;
  //check every value in array against next value
  //if next value is smaller
    //iterate in reverse the sorted part of arr
    //continue until target value not smaller
  //replace value at current index with target value
  //return arr
}

console.log(insertionSort([14, 4, 9, 3, 2, 8, 1]));


//quickSort

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  //create a pivot point at starting
  var pivot = arr[0];
  //create leess than array
  var left = [];
  //create greater than array
  var right = [];
  //iterate arr starting after first index
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
    //if value less than pivot
      //push to less array
    //push to greater array

  //recurse on left array and concat pivot and recurse right array
}

console.log(quickSort([18, 12, 9, 2, 4, 6, 9, 11]));


//mergeSort

const merge = (left, right) => {
  var il = 0;
  var ir = 0;
  var result = [];

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }

  if (il === left.length) {
    return result.concat(right.slice(ir));
  } else {
    return result.concat(left.slice(il));
  }
  //compare left and right arrays
  //sort them in order
}

console.log(merge([2, 3], [1, 9]))

const mergeSort = (arr) => {
  //continue to spilt arr into 1 length array recursively
  if (arr.length < 2) {
    return arr;
  }

  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([8, 12, 3, 9, 4, 17, 5, 2, 7]));