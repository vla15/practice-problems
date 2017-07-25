/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function(a, b, c) {
  // TODO: Your code here
  // func can take three values
  // returns a function
  return function(z, b) {
    return c + z;
  }

};

//has to pass arguments and this down to then return function in bind.
// var func = function(a, b){ return a + b };
// var boundFunc = bind(func, null, 'foo');
// var result = boundFunc('bar');

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var alice = {
  name: 'alice',
  shout: function () {
    console.log(this.name);
  }
}

Function.prototype.bind = function(...args) {
  //returns the original funtion
  //changes the this binding
  var bound = function () {
  }
  return Object.assign(bound, arguments);
  //changes the this binding to the passed in value
  // TODO: Your code here
};

var boundShout = alice.shout.bind(alice);