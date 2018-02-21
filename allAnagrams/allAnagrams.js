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
  //store results
  var results = {};
  const getAnagrams = function(anagram, remainingLetters) {
    if (remainingLetters.length === 0 && !results[anagram]) {
      results[anagram] = true;
    }
    for (var i = 0; i < remainingLetters.length; i++) {
      var currentLetter = remainingLetters[i]
      getAnagrams(anagram + currentLetter, remainingLetters.substring(0, i) + remainingLetters.substring(i + 1));
    }
  }
  getAnagrams('', string);
  return Object.keys(results);
  //iterate through the string
  //have a base letter
  //pass in remaining letters
};

const assertEqual = function(expected, result) {
  if (JSON.stringify(expected) === JSON.stringify(result)) {
    console.log("correct");
  } else {
    console.log(`failed, expected ${expected} but got ${result}`);
  }
};

assertEqual(["abc", "acb", "bac", "bca", "cab", "cba"], allAnagrams("abc"));

assertEqual(["ccc"], allAnagrams("ccc"));
