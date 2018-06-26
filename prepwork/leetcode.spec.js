const maxProduct = require('./leetcode').maxProduct;
const findDuplciateNumber = require('./leetcode').findDuplciateNumber

const assertEqual = function(result, expected) {
  if (expected === result) {
    return true;
  } else {
    return `expected ${expected}, but instead got ${result}`;
  }
}
console.log(assertEqual(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]), 16));
console.log(assertEqual(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]), 4));
console.log(assertEqual(maxProduct(["a", "aa", "aaa", "aaaa"]), 0));

console.log(assertEqual(findDuplciateNumber([1,2,3,4,5,6,7,8,2]), 2));
console.log(assertEqual(findDuplciateNumber([1,2,3,4,5,6,6,7,8,9]), 6));
// console.log(assertEqual(findDuplciateNumber([9, 2, 4, 11, 12, 13, 4, 7]), 4));