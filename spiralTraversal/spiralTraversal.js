/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  //input: array of arrays
  // output singular array of spiraled values
  // create results array
  var results = [];
  // while length of matrix is > 0
  while (matrix.length > 0) {
    // need to traverse the first sub array
    var first = matrix.splice(0, 1);
    first = concatArray(first);
      //splice first array
    for (var firIndex = 0; firIndex < first.length; firIndex++) {
      // iterate through first array forward and adding values to result
      results.push(first[firIndex]);
    }
    if (matrix.length > 0) {
      // then traverse the main array for all end values
      for (var mainIndex = 0; mainIndex < matrix.length; mainIndex++) {
        var lastIndexValue = matrix[mainIndex].splice(matrix[mainIndex].length - 1, 1);
        // splice values from sub arrays
        results.push(lastIndexValue);
        // add to results
      }
      // then traverse the last sub array in reverse
      // check if there's a last
      var last = matrix.splice(matrix.length - 1, 1);
      last = concatArray(last);
      for (var lastIndex = last.length - 1; lastIndex >= 0; lastIndex--) {
        results.push(last[lastIndex]);
      }
      // splice values from sub array
      // add to results
    // then traverse main array backwards for first values
      //splice last array
      // iterate through last array backwards and add values to result
    // check if there are any arrays left
      if (matrix.length > 0) {
        for (var firstIndex = matrix.length - 1; firstIndex >= 0; firstIndex--) {
          var firstIndexValue = matrix[firstIndex].splice(0, 1);
          results.push(firstIndexValue);
        }
      }
    // then traverse second sub array
    // TODO: Implement me!
          
    }
  }
  return concatArray(results);
};

var concatArray = function(arr) {
  return arr.reduce((array, value) => array.concat(value), [])
}


var assertEqual = function(actual, expected, test) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('success!');
  } else {
    console.log(`FAILED TEST [${test}] got ${actual} when expected: ${expected}`);
  }
}

var results = spiralTraversal([
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16],
      [17,18,19,20]
    ]);


assertEqual(results, [1,2,3,4,8,12,16,20,19,18,17,13,9,5,6,7,11,15,14,10], '5x4 spiral')
