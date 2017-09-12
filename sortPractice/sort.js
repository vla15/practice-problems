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

console.log(insertionSort([9, 3, 1, 4, 5]));

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

console.log(bubbleSort([9, 3, 1, 4, 5]));

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
  console.log(right);

  return quickSort(left).concat(pivot, quickSort(right));
}


console.log(quickSort([9, 3, 1, 4, 5]));


const merge = function(left, right) {
  var il = 0;
  var ir = 0;
  var result = [];

  while (il < left.length || ir < right.length) {
    if (!left[il]) {
      result.push(right[ir++]);
    } else if (!right[ir]) {
      result.push(left[il++]);
    } else {    
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }
  }
  return result;
}

console.log(merge([2, 3], [4, 5]))

const mergeSort = function (arr) {
  if (arr.length < 2) {
    return arr;
  }

  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([9, 3, 1, 4, 5]));