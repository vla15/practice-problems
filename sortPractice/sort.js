//insertionSort
const insertionSort = (arr) => {
  //itreate through array
  for (var i = 0; i < arr.length; i++) {
    var target = arr[i];
    //this for loop checks the last value of the sorted arrays
    for (var j = i - 1; j >= 0 && arr[j] > target; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = target;
  }
  return arr;
  //place sorted values to left of arr
  //if we find not sorted
  //have to go back left side arr
  //check values
}
console.log(insertionSort([8, 3, 5, 2, 9, 7, 1]))
//bubblesort
const bubbleSort = (arr) => {
  var isSorted = false;
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
  return arr
}

console.log(bubbleSort([8, 3, 5, 2, 9, 7, 1]))

//iterates through array
//checks if its sorted
//if not 
//reiterate through array
//mergeSort
//merge helper function
//split values of array into individual values
//merge them back in order
const merge = (left, right) => {
  let il = 0;
  let ir = 0;
  let results = [];
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

console.log(merge([5, 9], [2, 10]));

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([8, 3, 5, 2, 9, 7, 1]))
//quickSort

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr
  }

  var pivot = arr[0];
  var left = [];
  var right = [];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([8, 3, 5, 2, 9, 7, 1]))