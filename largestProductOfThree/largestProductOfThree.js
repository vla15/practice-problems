/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */



var largestProductOfThree = function(array) {
  //keep track of three maxes
  //keep track of two mins
  var thirdMax = Number.NEGATIVE_INFINITY;
  var secondMax = Number.NEGATIVE_INFINITY;
  var firstMax = Number.NEGATIVE_INFINITY;
  var firstMin = Number.POSITIVE_INFINITY;
  var secondMin = Number.POSITIVE_INFINITY;
  for (var i = 0; i < array.length; i++) {
    var minTarget = array[i];
    if (minTarget < secondMin) {
      var tmp = secondMin;
      secondMin = minTarget;
      minTarget = tmp;
    }
    if (minTarget < firstMin) {
      tmp = firstMin;
      firstMin = minTarget;
      minTarget = tmp
    }
    var maxTarget = array[i];
    if (maxTarget > thirdMax) {
      tmp = thirdMax;
      thirdMax = maxTarget;
      maxTarget = tmp;
    }
    if (maxTarget > secondMax) {
      tmp = secondMax;
      secondMax = maxTarget;
      maxTarget = tmp;
    }
    if (maxTarget > firstMax) {
      tmp = firstMax;
      firstMax = maxTarget;
      maxTarget = tmp;
    }
  }
  return thirdMax * Math.max(secondMax * firstMax, firstMin * secondMin);
};

console.log(largestProductOfThree([-4, -3, -2, -1, 60]));



