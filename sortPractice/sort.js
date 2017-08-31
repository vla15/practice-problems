//insertion sort
//sorts array in place
//goes through array once
//updates left end as sorted
//only moves back through sorted end when there's an unsorted option
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

console.log(insertionSort([8, 4, 2, 9, 5, 7, 6]))
//bubble sort
//quick sort
//merge sort