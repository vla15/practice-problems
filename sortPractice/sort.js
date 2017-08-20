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

console.log(bubbleSort([4, 9, 123, 3, 0, 1, 19]))
//insertionSort
//quickSort
//mergeSort