//insertionSort
const insertionSort = (arr) => {
  //we iterate the array
  for (var i = 0; i < arr.length; i++) {
    var target = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > target; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = target;
  }
  return arr;
  //sort array in place, putting smallest to the left
  //iterate through remaining array
  //check if next value is smaller then largest of sorted
    //swap places
  //replace value at stopped
}

console.log(insertionSort([9, 6, 3, 2, 7, 4, 5]));
//quickSort

const quickSort = (arr) => {
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
//mergeSort

console.log(quickSort([9, 6, 3, 2, 7, 4, 5]));

const merge = (left, right) => {
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

console.log(merge([3, 5], [2, 4]));

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([9, 6, 3, 2, 7, 4, 5]));