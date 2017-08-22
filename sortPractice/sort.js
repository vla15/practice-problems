const bubbleSort = (arr) => {
  //iterates the arr
  let isSorted = false;
  while (!isSorted) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i + 1] < arr[i]) {
        var tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        isSorted = true;
      }
    }
    isSorted = !isSorted;
  }
  return arr;
  //checks if current value is less than next value
    //swap
  //continue process till all is sorted
}

console.log(bubbleSort([8, 9, 2, 4, 7, 4, 1, 0]));

const insertionSort = (arr) => {
  //sorting array in place
  for (var i = 0; i < arr.length; i++) {
    var target = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > target; j--) {
      //shift previous value upwards
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = target;
  }
  return arr;
  //track part of array that is sorted
  //iterate through arr, checking if value is less than neighbor
}
console.log(insertionSort([8, 9, 2, 4, 7, 4, 1, 0]));


const quickSort = (arr) => {
  //create a starting point
  if (arr.length < 2) {
    return arr;
  }
  //compare all values against startingpoint
  var pivot = arr[0];
  var left = [];
  var right = [];
  //smaller values go in their own array
  for (var index = 1; index < arr.length; index++) {
    if (arr[index] < pivot) {
      left.push(arr[index]);
    } else {
      right.push(arr[index]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
  //greater values go in their own array
  //recurseively call quickSort
}

console.log(quickSort([8, 9, 2, 4, 7, 4, 1, 0]));


const merge = (left, right) => {
  //merges left and right array by comparing eagainst each other
  let il = 0;
  let ir = 0;
  let result = [];

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
}

console.log(merge([2, 4], [5, 6]));

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([8, 9, 2, 4, 7, 4, 1, 0]));

