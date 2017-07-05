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
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  var size = 0;
  var replaced = false;
  result.insert = function(str) {
    var key = getIndexBelowMaxForKey(str, storageLimit);
    if (storage[key] === undefined) {
      storage[key] = [];
    } else {
      size = storage[key].length;
    }

    // needs to check if value has already been inserted or not
    if (size === 0) {
      storage[key][0] = [str, key];
    } else {
      for (var index = 0; index < size; index++) {
        if (storage[key][index][1] === key) {
          storage[key][index][0] = str;
          replaced = true;
        }
      }
      if (!replaced) {
        storage[key][size] = [str, key]
      }
    }
    //handle collisions
    //check to see if duple key exists
      // if it doesn't exist in array then add to last of array.
    // locates key with hash
    // iterates through storage
    // adds an array at key value
    // TODO: implement `insert()`
  };

  result.retrieve = function(key) {
    //convert str to key
    // iterate through storage
    if (storage[key] === undefined) {
      return null;
    }

    var targetArr = storage[key];

    for (var index = 0; index < targetArr.length; index++) {
      if (targetArr[index][1] === key) {
        return targetArr[index][0];
      }
    }

    return null;
      // iterate through storage[key]
      // check all tuple 1 index value for key
      // return 0 index value of tuple
    // TODO: implement `retrieve()`
  };

  result.remove = function(key) {
    if (storage[key] === undefined) {
      return null;
    }

    var targetArr = storage[key];

    for (var index = 0; index < targetArr.length; index++) {
      if (targetArr[index][1] === key) {
        targetArr.splice(index, 1);
      }
    }
    // similar to retrieve. Iterate through storage array
      // iterate through sub array
        // compare keys at index 1
          // if match
            // remove array with splice
    // return null
    // TODO: implement `remove()`
  };

  return result;
};


var hash = makeHashTable();
hash.insert('hello');
var keyPair = getIndexBelowMaxForKey('hello', 1000);
console.log(hash.retrieve(keyPair));
console.log(hash.remove(keyPair));
console.log(hash.retrieve(keyPair));


