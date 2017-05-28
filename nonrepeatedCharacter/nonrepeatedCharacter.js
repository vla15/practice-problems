/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  //input string
  //output non repeated char
  //set counter
  //iterate through string
  for (var index = 0; index < string.length; index++) {
    //counter reset
    var counter = 0;
    //take first char as target
    var target = string[index];
    //iterate through string again
    for (var repeat = 0; repeat < string.length; repeat++) {
      if (target === string[repeat]) {
        counter++;
      }
      // if only appears once
        //return true
    }
    if (counter === 1) {
      return target;
    }
  }
};


firstNonRepeatedCharacter('ABA'); // => 'B'