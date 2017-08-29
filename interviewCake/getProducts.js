// Write a function get_products_of_all_ints_except_at_index() that takes a list of integers and returns a list of the products.

//  [1, 7, 3, 4]
//  [84, 12, 28, 21]

// const getProductsOfAllIntsExceptAtIndex = function(arr) {
//   var results = [];
//   //brute force would be to iterate through twice
//   for (var i = 0; i < arr.length; i++) {
//     let current;
//     for (var j = 0; j < arr.length; j++) {
//       if (i !== j) {
//         if (current) {
//           current *= arr[j];
//         } else {
//           current = arr[j];
//         }
//       }
//     }
//     results.push(current);
//   }
//   return results;
// }

const getProductsOfAllIntsExceptAtIndex = function(arr) {
  var results = new Array(arr.length);
  var counter = 0;
  var productSoFar = 1;
  while (counter < arr.length) {
    results[counter] = productSoFar;
    productSoFar *= arr[counter];
    counter += 1;
  }
  productSoFar = 1;
  counter = arr.length - 1;
  while (counter >= 0) {
    results[counter] *= productSoFar;
    productSoFar *= arr[counter];
    counter -= 1;
  }
  return results;
}

//passing the lenght of the array twice only.  So it results in a 2(n) time complexity
//(n) space complexity, as storing the length of the array in a result;

console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));

