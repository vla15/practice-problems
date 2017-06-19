/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input) {
  //input: string
  // iterate through string input
  var charCount = {};
  var isBalanced = true;
  var chars = ['[', ']', '{', '}', '(', ')']
  for (var index = 0; index < input.length; index++) {
    if (chars.indexOf(input[index]) !== -1) {
      var key = input[index];
      if (charCount[key]) {
        charCount[key]++;
      } else {
        charCount[key] = 1;
      }
    }
  }

  for (var charIndex = 0; charIndex < chars.length; charIndex+= 2) {
    if (charCount[chars[charIndex]] !== charCount[chars[charIndex + 1]]) {
      isBalanced = false;
    }
  }
  return isBalanced;
  // take a count of {, (, [ chars
  // if counts are not divisible by 2,
    // return false
  // else trye;
};

console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));


