/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
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
  for (var index = 0; index < string.length; index++) {
    var target = string[index]
    traverseString(string, target, index);
  }
  return [start, end];
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};