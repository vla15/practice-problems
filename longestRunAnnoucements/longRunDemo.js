// Heyo, the Toy Problem was not published due to some github issues. However follow this prompt to complete the Longest Run Toy Problem:

// Write a function that, given a string, Finds the longest run of identical
// * characters and returns an array containing the start and end indices of
// * that run. If there are two runs of equal length, return the first one.
// * For example:
// *
// *   longestRun(“abbbcc”) // [1, 3]
// *   longestRun(“aabbc”)  // [0, 1]
// *   longestRun(“abcd”)   // [0, 0]
// *
// * Try your function with long, random strings to make sure it handles large
// * inputs well


var longestRun = function(str) {
  //input: str
  // output indexes of start and finish in an array
  // var to track start index
  var start = 0;
  // var to track end index
  var end = 0;
  // var to track length
  var longestLength = 0;
  // iterate through str
  var counter = 0;
  var traverseString = function(str, target, targetIndex) {
    for (var tIndex = targetIndex + 1; tIndex < str.length; tIndex++) {
      if (target === str[tIndex]) {
        counter++;
        if (counter > longestLength) {
          start = targetIndex;
          end = tIndex;
          longestLength = counter;
        }
        // traverseString(str, target, tIndex);
      } else {
        counter = 0;
        return;
      }
    }
  }
  for (var index = 0; index < str.length; index++) {
    var target = str[index]
    traverseString(str, target, index);
  }
  return [start, end];
}

// console.log(longestRun('aabbc')); // [1, 3]