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
  var isEquivalent = true;
  //iterate through object
  for (var key in apple) {
    // check if keys match
      // match then check if object
        // if both values are objects then recurse
        // else compare if apple value doesn't equate to orange value
          // set check to false
      // no match then false
    if (orange.hasOwnProperty(key)) {
      if (typeof apple[key] === 'object' && typeof orange[key] === 'object') {
        isEquivalent = deepEquals(apple[key], orange[key])
      } else if (apple[key] !== orange[key]) {
        isEquivalent = false;
      }
    } else {
      isEquivalent = false;
    }
  }
  //return check
  return isEquivalent;
};

// console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
// console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false
// console.log(deepEquals({a: 5}, {c: 3}));
// console.log(deepEquals({a: {a: 1, b: {a: 7}}}, {a: {a:1, b: {a: 7}}}));
// console.log(deepEquals({a: 5, b: {}}, {a: 5, b: {a: 3}}))