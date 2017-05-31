/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

var nthFibonacci = function (n) {
  // TODO: implement me!
  // input: number indicating number of iterations
  // output: sum
  //starting array
  var calculateFibonacci = function(n) {
    if (n === 0) {
      return 0;
    }
    if (n <= 2) {
      return 1;
    }
    if (!nthFibonacci.cache[n]) {
      nthFibonacci.cache[n] = calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
    }
    return nthFibonacci.cache[n];
  }
  nthFibonacci.cache = {};
  return calculateFibonacci(n);
};

console.log(nthFibonacci(7));
  // iterative solution
  // // n = length
  // // create starting array with 0th and 1st fib
  // var start = [0, 1]
  // if (n === 1) {
  //   return 0;
  // } else if (n === 2) {
  //   return 1;
  // }
  // //iterate through starting index and next index
  // for (var index = 0; start.length < n; index++) {
  //   start.push(start[index] + start[index + 1]);
  // }
  // return start.reduce(function(num1, num2) {
  //   return num1 + num2;
  // })
  // // use previous two results to calculate next result
  // // reduce for sum

