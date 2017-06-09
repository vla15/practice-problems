/*
 * Write Compose and Pipe functions.
 * 
 * Step 1: Implement the function Compose: 
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 * 
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 * 
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

'use strict';

var compose = function() {
  //input: arbitrary number of arugments
  //inputs: function calls
  //shoudl return a function
  var calls = arguments
  return function(target) {
    for (var index = calls.length - 1; index >= 0; index--) {
      target = calls[index](target);
    }
    return target;
  }
  //each function is applied on the ffunction that follows.
  //iterate through arguments array
    // 
};



// var greet = function(name){ return 'hi: ' + name;}
// var exclaim = function(statement) { return statement.toUpperCase() + '!';}
// var welcome = compose(greet, exclaim);

// console.log(welcome('phillip'));

var pipe = function() {
  //input: x number of functions in arguments
  var calls = arguments;
  // returns a function
  return function(target) {
    // iterates left to to right on arguments
    for (var index = 0; index < calls.length; index++) {
      // set target to the result of the function calls
      target = calls[index](target);
    }
    // return target
    return target;
  }
};


// var add2 = function(number){ return number + 2; }
// var multiplyBy3 = function(number){ return number * 3; }
// console.log(pipe(add2, multiplyBy3)(5)) // 21
// console.log(pipe(add2, multiplyBy3, multiplyBy3)(5)) // 63

