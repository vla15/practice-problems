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
  //naive solution
  //iterate through input
  var leftParen = 0;
  var rightParen = 0;
  //count left parens
  for (var index = 0; index < input.length; index++) {
    input[index] === '(' ? leftParen++ : null;
    input[index] === ')' ? rightParen++ : null;
  }

  return leftParen === rightParen ? true : false;
  //count right parens
  //if numbers are equal, then true, 
  //else false
};

console.log(balancedParens('('))
console.log(balancedParens('()'))
console.log(balancedParens(')('))



