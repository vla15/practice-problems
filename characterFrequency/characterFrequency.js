/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  //create a ledger
  var results = [];
  //iterate throught the string
  for (var i = 0; i < string.length; i++) {
    var incremented = false
    for (var j = 0; j < results.length; j++) {
      if (results[j][0] === string[i]) {
        results[j][1]++;
        incremented = true;
      }
    }
    if (!incremented) {
      results.push([string[i], 1]);
    }
  }
  return results.sort((a, b) => {
    if (b[1] > a[1]) {
      return 1;
    } else if (a[0] > b[0]) {
      return 0;
    }
  })
  //count each occurrance
  //return sorted by desc order and then asc char
};

// console.log(characterFrequency('miaaiaaippi'));


console.log(characterFrequency('aaabbc'));
console.log(characterFrequency('mississippi'));
console.log(characterFrequency('miaaiaaippi'));
console.log(characterFrequency('mmmaaaiiibbb'));
