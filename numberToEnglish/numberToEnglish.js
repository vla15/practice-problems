/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  // return my value as english words
  // input: this (num)
  // convert number to string
  var value = this;
  // determine length
  var place = '1';
  var english = '';
  var counter = 0;

  while (value > 0) {
    var stringArr = value.toString().split('');
    for (var index = 0; index < stringArr.length - 1; index++) {
      place += '0';
    }
    // if (place.length <= 2) {

    // }
    place = Number(place);

    while (value - place >= 0) {
      value -= place;
      counter++;
    }
    english += numbersToWords[counter] + ' ' + numbersToPlace[place] + ' '

    if (numbersToWords[value]) {
      english += numbersToWords[value];
      value = 0;
    }
    place = 1;
    counter = 0;
  }
  return english;
  //convert place to a number
  // Number(place)
  
  // iterate through numbersToPlace
    // perform modulo operation
}

console.log((1123).toEnglish());
