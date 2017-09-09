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
//mergeSort