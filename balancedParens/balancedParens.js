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
  var isBalanced = true;
  var targets = {'(': ')', '[': ']', '{': '}'};
  //iterate through input
  for (var index = 0; index < input.length; index++) {
    var target = targets[input[index]]
    if (target && input[index + 1] !== target) {
      isBalanced = false;
    }
  }
  return isBalanced;
  //check if balanced
    //not balanced then set to false
  //return balanced
};

console.log(balancedParens('('));
console.log(balancedParens('()'));
console.log(balancedParens(')('));
console.log(balancedParens('[](){}'));
console.log(balancedParens('[({})]'));
console.log(balancedParens('[(]{)}')); // false


