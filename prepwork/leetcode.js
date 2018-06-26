// Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters.
// You may assume that each word will contain only lower case letters.If no such two words exist, return 0.

// Example 1:

// Input: ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
// Output: 16
// Explanation: The two words can be "abcw", "xtfn".
//   Example 2:

// Input: ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]
// Output: 4
// Explanation: The two words can be "ab", "cd".
//   Example 3:

// Input: ["a", "aa", "aaa", "aaaa"]
// Output: 0
// Explanation: No such pair of words.

const maxProduct = function(words) {
  //brute force approach
  let max = 0;
  for (let i = 0; i < words.length; i++) {
    let base = words[i];
    for (let j = 0; j < words.length; j++) {
      if (!hasSameLetters(base, words[j])) {
        max = Math.max(max, base.length * words[j].length);
      }
    }
  }
  return max;
}

const hasSameLetters = function(base, word) {
  let dict = {};
  for (let j = 0; j < base.length; j++) {
    if (!dict[base[j]]) {
      dict[base[j]] = true;
    }
  }
  for (let i = 0; i < word.length; i++) {
    if (dict[word[i]]) {
      return true;
    }
  }
  return false;
}


const findDuplciateNumber = function(arr) {
  //triangle series
  let n = arr.length - 1;
  let triangleSum = n * ( n + 1 ) / 2;
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum - triangleSum;
}

module.exports = {
  maxProduct: maxProduct,
  findDuplciateNumber: findDuplciateNumber
}