/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
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
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  
  result.insert = function(key, value) {
    //hash the key
    var hash = getIndexBelowMaxForKey(key, storageLimit);
    //locate hash of storage
    storage[hash] = storage[hash] || [];
    var wasInserted = false;
    for (var index = 0; index < storage[hash].length; index++) {
      if (storage[hash][index][0] === key) {
        storage[hash][index][1] = value;
        wasInserted = true;
      }
    }

    if (!wasInserted) {
      storage[hash].push([key, value]);
    }
      // if no array then insert array
    // iterate through array
      // if no key match
        //push to array
      // replace key match value with new value
    // TODO: implement `insert`
  };

  result.retrieve = function(key) {
    // TODO: implement `retrieve`
    // hash key again
    var hash = getIndexBelowMaxForKey(key, storageLimit)
    // locate targetStorage
    var targetStorage = storage[hash];
    for (var index = 0; index < targetStorage.length; index++) {
      if (targetStorage[index][0] === key) {
        return targetStorage[index][1];
      }
    }
    return null;
    // iterate through targetStorage
      // if key matches tuple[0]
        //return value
    // return null
  };

  result.remove = function(key) {
    // TODO: implement `remove`
    var hash = getIndexBelowMaxForKey(key, storageLimit);

    var targetStorage = storage[hash];

    for (var index = 0; index < targetStorage.length; index++) {
      if (targetStorage[index][0] === key) {
        var removed = targetStorage.splice(index, 1);
      }
    }
    return removed
  };

  return result;
};

var testHash = new makeHashTable();
console.log(testHash.insert('blah', 'champion'));

console.log(testHash.retrieve('blah'));
console.log(testHash.remove('blah'));
