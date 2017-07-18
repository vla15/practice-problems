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
  //input: string
  //output array of array
  //create storage
  var result = [];
  //target letter
  var targetLetter;
  var counter = 0;
  //split string into individual chars
  var ascSortedString = string.split('').sort();
  //sort by ascending
  //iterate through split string
  for (var index = 0; index < ascSortedString.length; index++) {
    //if index 0 set target letter to char at index 0
    if (index === 0) {
      targetLetter = ascSortedString[index];
    }
    if (ascSortedString[index] === targetLetter) {
      counter++    
    }
    //create counter  
    //if not target letter
    if (ascSortedString[index] !== targetLetter || index === ascSortedString.length - 1) {
      var tuple = [targetLetter, counter];
      targetLetter = ascSortedString[index];
      result.push(tuple);
      counter = 1;
    }
      //create tuple with target letter, counter
      //update  counter to 1
      //update target letter to new letter
      //iterate through storage
        //compare counter with new counter
        //insert new tuple in front if greater

  }
  return result;
};



console.log(characterFrequency('mississippi'));
