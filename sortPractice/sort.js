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
//quickSort