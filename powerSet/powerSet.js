/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  //input one string
  //edge case blank spaces
  //store results
  var results = []
  // setup a recursive function
  var recurseString = function (text, currentIndex) {
    // sort text
    var newText = text.split('').sort().join('');
    if (results.indexOf(newText) === -1) {
      results.push(newText);
    }
    if (text.length === str.length) {
      return;
    }
    for (var i = 0; i < str.length; i++) {
      if (currentIndex.indexOf(i) === -1 ) {
        currentIndex.push(i);
        recurseString(text.concat(str[i]), currentIndex);
        var removeIndex = currentIndex.indexOf(i);
        currentIndex.splice(removeIndex, 1);
      }
    }
    // checks if not in the results array
      // adds to resulst array

    // start at second char of str
      // add and recurse
  }
  for (var index = 0; index < str.length; index++) {
  // iterate through the str at every char
    recurseString(str[index], [index]);
    //invoke recursion
  }
  results.unshift('');
  return results;
  // append empty string in front of results
  // return array results

};

console.log(powerSet('jump'));
