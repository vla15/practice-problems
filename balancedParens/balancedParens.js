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
  var stack = [];
  var pairs = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  for (var index = 0; index < input.length; index++) {
    var char = input[index];

    if (pairs[char]) {
      stack.push(char);
    } else if (char === '}' || char === ']' || char === ')') {
      if (pairs[stack.pop()] !== char) {
        return false;
      }
    }

  }

  return stack.length === 0;

};

console.log(balancedParens('(')); // false
console.log(balancedParens('()')); //true
console.log(balancedParens(')(')); // false
console.log(balancedParens('[](){}')); //true
console.log(balancedParens('[({})]')); //true
console.log(balancedParens('[(]{)}')); // false