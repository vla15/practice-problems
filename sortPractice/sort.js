const bubbleSort = (arr) => {
  //iterates the arr
  let isSorted = false;
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
  //checks if current value is less than next value
    //swap
  //continue process till all is sorted
}

console.log(bubbleSort([8, 9, 2, 4, 7, 4, 1, 0]));