/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if (typeof n !== 'number' || n <= 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // create counter at 2
  var counter = 2;
  // edge case: 1
  while (counter <= n - 1) {
    // iterate through from 2 to n - 1
    if (n % counter === 0) {
      return false;
    }
    counter++;
    // if any result is 0
      // return false
    // return true
    
  }
  return true;
  // TODO: return true if n is prime, false otherwise
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
  //input: start
  //input: end
  //output: array of prime numbers
  // create results array
  var results = [];
  // create a counter store set to start
  var counter = start;
  // while counter less than end
  while (counter <= end) {
    // if prime Tester
    if (primeTester(counter)) {
      results.push(counter);
      // add to results
    }
    counter++;
    // increment counter
    
  }
  return results;
  // return array
};

console.log(primeSieve(15, 23))
