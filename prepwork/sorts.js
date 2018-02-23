//merge sort
const mergeSort = function (array) {
  //spilt array into two
  //get mid point
  if (array.length < 2) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  //iterate array
  //smaller than numbers than mid go left
  //greater than numbers than mid go right
  let left = [];
  let right = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== mid) {
      if (array[i] < array[mid]) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  }
  return mergeSort(left).concat(array[mid]).concat(mergeSort(right));
}

console.log(mergeSort([3, 2, 1, 5, 7]))

//[3, 2, 1, 5, 7];
// [] [1] [2, 3, 5, 7]
//[2, 3, 5, 7
// [] [2] [3]
//bubble sort

//quick sort