const maxProduct = require('./leetcode').maxProduct;

const assertEqual = function(result, expected) {
  if (expected === result) {
    return true;
  } else {
    return `expected ${expected}, but instead got ${result}`;
  }
}
console.log(assertEqual(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]), 16));