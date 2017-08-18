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

const insertionSort = (arr) => {
  //iterate through arr
  for (var i = 0; i < arr.length; i++) {
    var cur = arr[i];
    for (var j  = i - 1; j >= 0 && cur < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = cur;
  }
    //take current value
    //compare against sorted part of arr
      //if end of sorted is greater
        //swap
    //insert curr value to sorted arr
  //return arr
  return arr;
}

console.log(insertionSort([4, 2, 15, 9, 3, 5, 7]));
//mergesort
const merge = (left, right) => {
  let merged = [];
  let il = 0;
  let ir = 0;

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      merged.push(left[il++]);
    } else {
      merged.push(right[ir++]);
    }
  }

  if (il === left.length) {
    return merged.concat(right.slice(ir));
  } else {
    return merged.concat(left.slice(il));
  }
}



const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
//quicksort

console.log(mergeSort([4, 7, 9, 2, 8, 12]));


const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (var index = 1; index < arr.length; index++) {
    if (arr[index] < pivot) {
      left.push(arr[index]);
    } else {
      right.push(arr[index]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([4, 7, 9, 2, 8, 12]));