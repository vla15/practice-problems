/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  //input objects
  //output boolean

  //set default check to true
};

// console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
// console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false
// console.log(deepEquals({a: 5}, {c: 3}));
// console.log(deepEquals({a: {a: 1, b: {a: 7}}}, {a: {a:1, b: {a: 7}}}));
// console.log(deepEquals({a: 5, b: {}}, {a: 5, b: {a: 3}}))