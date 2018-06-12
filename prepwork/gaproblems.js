const isArmstrongNumber = function(number) {
  //break the integer into separate parts
  //cube each part
  //then compare it against the original number
  let numAsString = number.toString();
  let separatedNums = numAsString.split('');
  let total = 0
  for (var i = 0; i < separatedNums.length; i++) {
    total += Math.pow(+separatedNums[i], 3);
  }
  return total === number;
}

console.log(isArmstrongNumber(153));