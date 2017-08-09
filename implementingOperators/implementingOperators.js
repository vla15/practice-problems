// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
  // TODO: should return the product of x * y
  var total = 0;
  // y will be the number of times we add x
  for (var index = 0; index < y; index++) {
    total += x;
  }
  return total;
};

var divide = function(x, y, decimals) {
  // TODO: should return the quotient of x / y
  //subtracts y number of times from x
  var total = total || 0;
  var decimals = decimals || 3;

  if (decimals <= 0) {
    return total;
  }

  while (x >= y) {
    x -= y;
    total++;
  }

  if (x > 0) {
    x = x * 10;
    decimals--;
    divide(x, y, decimals)
    decimals = 0;
  } else {
    decimals = 0;
  }

  return total;
};

console.log(divide(12, 7));



var modulo = function(x, y) {
  // TODO: should return the remainder of x / y
  if (y > x) {
    return x;
  } else {
    while (x >= y) {
      x -= y
    }
  }
  return x;
};


