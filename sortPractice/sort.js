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