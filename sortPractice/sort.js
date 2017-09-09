//insertionSort
const insertionSort = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    var target = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > target; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = target;
  }
  return arr;
}

console.log(insertionSort([4, 9, 7, 2, 5, 6, 1]));

//bubbleSort
const bubbleSort = function(arr) {
  var sorted = false;
  while (!sorted) {
    for (var i = 0 ; i < arr.length; i++) {
      if (arr[i + 1] < arr[i]) {
        var tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        sorted = true
      }
    }
    sorted = !sorted;
  }
  return arr;
}

console.log(bubbleSort([4, 9, 7, 2, 5, 6, 1]));
//quickSort

const quickSort = function (arr) {
  if (arr.length < 2) {
    return arr;
  }
  var pivot = arr[0];
  var left = [];
  var right =[];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([4, 9, 7, 2, 5, 6, 1]));
//mergeSort

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

console.log(merge([2, 4], [3, 6]));

const mergeSort = function(arr) {
  if (arr.length < 2) {
    return arr;
  }
  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([4, 9, 7, 2, 5, 6, 1]));