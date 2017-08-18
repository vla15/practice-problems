//reducing the sorts

//bubblesort

const bubbleSort = (arr) => {
  //track whether arr is sorted
  let isSorted = false;

  while(!isSorted) {
    for (var index = 0; index < arr.length; index++) {
      if (arr[index + 1] < arr[index]) {
        var temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        isSorted = true;
      }
    }
    isSorted = !isSorted;
  }
  return arr
  //while not sorted
    //iterate through every value
    //compare cur value against next value
      //swap places
      //is sorted true
  //not sorted
  //return array
}

console.log(bubbleSort([23, 4, 5, 9, 0 , 2]));
//insertionsort
//mergesort
//quicksort
