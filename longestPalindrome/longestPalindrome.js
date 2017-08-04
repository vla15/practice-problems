/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  //input is a string
  //output is the longest palindrome string
  //store results
  var longest = '';
  //iterate through string
  for (var index = 0; index < string.length; index++) {
    var target = string[index];
    //create string placeholder
    for (var i = index + 1; i < string.length; i++) {
      target += string[i];
      var palindromeCheck = isPalindrome(target);
      if (palindromeCheck && target.length > longest.length) {
        longest = target;
    //start at second char and iterate through string
      }
      //continue to add chars to place holder
    }
      //check if palindrome
        //if palindrome and compare length of results
            //if greater then replace
  }
  //return results
  return longest;
};


var isPalindrome = function (string = '') {
  var mid = Math.floor(string.length / 2);
  var firstHalf = string.slice(0, mid);
  var secondHalf = string.slice(mid + 1, string.length);
  for (var index = 0; index < firstHalf.length; index++) {
    if (firstHalf[index] !== secondHalf[secondHalf.length - (index + 1)]) {
      return false;
    }
  }
  return true;
  //split in half
  //compare first half with second half
}

// console.log(longestPalindrome('My dad is a racecar athlete'));