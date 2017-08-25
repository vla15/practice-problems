//insertionSort

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
//quickSort