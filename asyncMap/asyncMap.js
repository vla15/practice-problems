'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */


var asyncMap = function(tasks, callback) {
  var results = [];
  var resultsCount = 0;
  for (var index = 0; index < tasks.length; index++) {
    (function(j) {
      tasks[j](function(e) {
        results[j] = e;
        resultsCount++;
        if (resultsCount === tasks.length) {
          console.log(e);
          callback(results);
        }
      })
    })(index)
  }
  //outer annon function is invoked immediately
  //the index from the for loop is passed into it
  //invokes first async task
  //sets the result of that first async task to 
};


asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  }
  ],
  function(results){
   // the results array will equal ['one','two'] even though
   // the second function had a shorter timeout.
   console.log(results); // ['one', 'two']
});