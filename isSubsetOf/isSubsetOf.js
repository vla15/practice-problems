
 // * Make an array method that can return whether or not a context array is a
 // * subset of an input array.  To simplify the problem, you can assume that neither
 // * array will contain objects or arrays as elements within them.
 // *
 // * 
// var a = ['commit','push']
// a.isSubsetOf(['commit','rebase','push','blame']) // true
//  // * NOTE: You should disregard duplicates in the set.
// var b = ['merge','reset','reset']

// b.isSubsetOf(['reset','merge','add','commit']) // true 
 // *
 // * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 // * subset.


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

// input is an array
// output is a boolean
// edgecase none
// constraints: duplicates dont count

Array.prototype.isSubsetOf = function (arr) {
};


var a = ['commit','push'];
console.log(a.isSubsetOf(['commit','rebase','push','blame'])); // true
 // * NOTE: You should disregard duplicates in the set.
var b = ['merge','reset','reset'];

console.log(b.isSubsetOf(['reset','merge','add','commit'])); // true

var c = ['hello'];
console.log(c.isSubsetOf(['blah', 'john'])); 

var d = ['hello', 'john'];
console.log(d.isSubsetOf(['nope', ['blah', 'hello'], 'john']));

var e = ['hello', 'world'];
console.log(e.isSubsetOf(['hello', {this: 'world'}, 'nope']));