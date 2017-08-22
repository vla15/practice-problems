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

const insertionSort = (arr) => {
  //sorting array in place
  for (var i = 0; i < arr.length; i++) {
    var target = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > target; j--) {
      //shift previous value upwards
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = target;
  }
  return arr;
  //track part of array that is sorted
  //iterate through arr, checking if value is less than neighbor
}
console.log(insertionSort([8, 9, 2, 4, 7, 4, 1, 0]));