const sort = require('./sorts');

console.log('bubbleSort: ', sort.bubbleSort([2, 8, 1, 3, 4, 6, 2]));
console.log("countingSort: ", sort.countingSort([2, 8, 1, 3, 4, 6, 2]));
console.log("insertionSort: ", sort.insertionSort([2, 8, 1, 3, 4, 6, 2]));
console.log("mergeSort: ", sort.mergeSort([2, 8, 1, 3, 4, 6, 2]));
console.log("quickSort: ", sort.quickSort([2, 8, 1, 3, 4, 6, 2]));