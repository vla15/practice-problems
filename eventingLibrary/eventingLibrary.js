/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

var mixEvents = function(obj) {
  // TODO: Your code here
  // have an event store
  obj.events = [];
  obj.on = (event, action) => {
    obj.events.push([event, action]) ;
  }
  obj.trigger = (...args) => {
    var extra = args.slice(1);
    var actions = [];
    for (var index = 0; index < obj.events.length; index++) {
      if (obj.events[index][0] === args[0]) {
        actions.push(obj.events[index][1])
      }
    }
    for (var i = 0; i < extra.length; i++) {
      obj.events.push([event, extra[i]]);
      actions.push(extra[i]);
    }
    while (actions.length > 0) {
      var current = actions.shift();
      current();
    }
  }
  return obj;
};


// var test = mixEvents({name: 'Alice', age: 30});

// test.on('ageChange', function() {
//   console.log('Age Changed');
// })
// test.age++;
// test.on('ageChange', () => {
//   console.log('yo hommie');
// })

// test.trigger('ageChange', () => { console.log('hello')});

