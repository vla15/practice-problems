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
