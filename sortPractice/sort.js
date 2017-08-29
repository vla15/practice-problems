//insertion sort
const insertionSort = function(arr) {
  //iterate through
  for (var i = 0; i < arr.length; i++) {
    var target = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > target; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = target;
  }
  return arr;
  //place sorted values to left of iteration
}

console.log(insertionSort([9, 2, 5, 3, 5, 4]))
//bubble sort

const bubbleSort = function(arr) {
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
  return arr;
}

console.log(bubbleSort([9, 2, 5, 3, 5, 4]))
//quick sort
const quickSort = function(arr) {
  if (arr.length < 2) {
    return arr;
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

console.log(quickSort([9, 2, 5, 3, 5, 4]))
//picks a pivot point
//spilt array into left and right buckets
//recurse on left and right side
//till one value in each array and return array
//merge sort

///merge sort has a helper function that returns a whole array sorted;
//takes in two sorted arrays and combines them into a single sorted array

const merge = function(left, right) {
  var il = 0;
  var ir = 0;
  var results = [];

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

console.log(merge([4, 6], [7, 8, 9]));

const mergeSort = function(arr) {
  //takes a single array
  if (arr.length < 2) {
    return arr;
  }

  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
  //spilts it into left and right until theres only 1 value left
  //merges those values back in order

}

console.log(mergeSort([9, 2, 5, 3, 5, 4]));




