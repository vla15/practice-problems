/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  //create a results storage
  //start with each letter of string
  var results = {};

  const anagram = function(ana, str) {
    if (str === '') {
      results[ana] = 1;
    }
    for (var i = 0; i < str.length; i++) {
      console.log(str);
      anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  }
  anagram('', string);
  return Object.keys(results);
  //go down each possible combination
    //when string result is same length
      //push to results storage
};

const assertEqual = (expected, actual) => {
  if (JSON.stringify(expected) === JSON.stringify(actual)) {
    console.log('equals!');
  } else {
    console.log(`failed, expected ${expected}, but got ${actual}`);
  }
}

var test = allAnagrams('abc');

assertEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'], test);

