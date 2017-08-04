/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  let longest = '';
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length - i; j++) {
      let phrase = string.slice(i,j);
      if (isPalindrome(phrase)) {
        if (phrase.length > longest.length) {
          longest = phrase;
        }
      }
    }
  }
  return longest;
};

var isPalindrome = function (string) {
  return string.split('').reverse().join('') === string;
}

console.log(isPalindrome('f fhhf f'));
console.log(longestPalindrome('dddddkkkkkkdkkdkkdk'));
