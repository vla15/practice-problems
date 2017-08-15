/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  result.insert = function(key, value) {
    //handle collisions
    //check to see if duple key exists
      // if it doesn't exist in array then add to last of array.
    // locates key with hash
    // iterates through storage
    // adds an array at key value
    // TODO: implement `insert()`
  };

  result.retrieve = function(key) {
   
  };

  result.remove = function(key) {

};


// var hash = makeHashTable();
// hash.insert('hello', 'world');
// hash.insert('hello', 'champion')
// console.log(hash.retrieve('hello'));
// console.log(hash.remove('hello'));
// console.log(hash.retrieve('hello'));

