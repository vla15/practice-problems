const reverseStringInPlace = function(str) {
  var mid = Math.floor(str.length / 2)
  str = str.split('');
  for (var i = 0; i < mid; i++) {
    let end = str.length - 1 - i;
    let start = str[i];
    str[i] = str[end];
    str[end] = start;
  }
  return str.join('');
}

console.log(reverseStringInPlace('yo homey'))