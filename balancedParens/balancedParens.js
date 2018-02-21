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
  var parens = {
    '[': ']',
    '{': '}',
    '(': ')'
  }
  //balanced parens, open brackets work as a line LILO
  //closed brackets work as a stack FIFO
  var openBrackets = ['[', '(', '{'];
  var closedBrackets = [']', ')', '}'];
  //store open brackets
  var currentOpenBrackets = [];
  //store closed brackets
  //iterate through input
  var currentOpen;
  for (var i = 0; i < input.length; i++) {
    var currentLetter = input[i]
    if (openBrackets.indexOf(currentLetter) !== -1) {
      currentOpenBrackets.push(currentLetter)
    } else if (closedBrackets.indexOf(currentLetter) !== -1) {
      currentOpen = currentOpenBrackets.pop();
      if (parens[currentOpen] !== currentLetter) {
        return false;
      }
    }
  }
  if (currentOpenBrackets.length > 0) {
    return false;
  } else {
    return true;
  }
};

const assertEqual = function(expected, actual) {
  if (expected === actual) {
    console.log('Truth')
  } else {
    console.log(`incorrect, expected ${expected}, but got ${actual}`)
  }
}
assertEqual(false, balancedParens('(')); // false
assertEqual(true, balancedParens('()')); //true
assertEqual(false, balancedParens(')(')); // false
assertEqual(true, balancedParens('[](){}')); //true
assertEqual(true, balancedParens('[({})]')); //true
assertEqual(false, balancedParens('[(]{)}')); // false
assertEqual(true, balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
assertEqual(false, balancedParens(' var hubble = function() { telescopes.awesome();')); // false