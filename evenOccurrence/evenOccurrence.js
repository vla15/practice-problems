/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
  // input: array
  // create result
  var evenResult = null;
  // create largestCounter
  var largestCounter = 0;
  // iterate through arra
  for (var index = 0; index < arr.length; index++) {
    // check if even
    if (arr[index] % 2 === 0) {
      var evenTarget = arr[index];
      // store target
      var counter = 0;
      // create counter
      for (var innerIndex = 0; innerIndex < arr.length; innerIndex++) {
      // iterate through array again
        // check if even and index dont match
        if (arr[innerIndex] === evenTarget) {
          counter++;
          // increment counter
        }
      }
      if (counter > largestCounter && counter % 2 === 0) {
        largestCounter = counter;
        evenResult = evenTarget;
      }
      // compare counter against largestCounter
        // replace largestCounter
        // replace result
    }
  }
  return evenResult;
  // return result
};


// var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
// console.log(onlyEven);