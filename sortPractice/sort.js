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