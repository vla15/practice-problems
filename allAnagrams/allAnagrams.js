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
  let results = [];
  //create function that iterates through string
  const recursivelyGetLetters = function(letters, word) {
    if (word.length === string.length && results.indexOf(word) === -1) {
      results.push(word);
      return;
    }
    for (var i = 0; i < letters.length; i++) {
      let currentWord = word + letters[i];
      let remaining = letters.substring(0, i) + letters.substring(i + 1);
      recursivelyGetLetters(remaining, currentWord);
    }
  };
  recursivelyGetLetters(string, "");
  return results;
  //check if passed in value is equal to string length
  //store string to results
  //remove string
  //recurse through function
  //return results
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
