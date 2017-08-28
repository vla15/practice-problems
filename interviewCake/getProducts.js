// Write a function get_products_of_all_ints_except_at_index() that takes a list of integers and returns a list of the products.

//  [1, 7, 3, 4]
//  [84, 12, 28, 21]

const getProductsOfAllIntsExceptAtIndex = function(arr) {
  var results = [];
  //brute force would be to iterate through twice
  for (var i = 0; i < arr.length; i++) {
    let current;
    for (var j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (current) {
          current *= arr[j];
        } else {
          current = arr[j];
        }
      }
    }
    results.push(current);
  }
  return results;
}
console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));