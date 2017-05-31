/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


// var largestProductOfThree = function(array) {
//   //input array
//   //output product
//   //store largest values
//   var productTotal = undefined;
//   var product = function(value, index) {

//     var thirdProduct = function(value, firIndex, secIndex) {
//       for (var thirdIndex = 0; thirdIndex < array.length; thirdIndex++) {
//         if (thirdIndex !== firIndex || thirdIndex !== secIndex) {
//           var finalTotal = value * array[thirdIndex];
//           if (productTotal === undefined) {
//             productTotal = finalTotal;
//           } else if (finalTotal > productTotal) {
//             productTotal = finalTotal;
//           }
//         }
//       }
//     }

//     for (var secIndex = 0; secIndex < array.length; secIndex++) {
//       if (index !== secIndex) {
//         var total = value * array[secIndex];
//         thirdProduct(total, index, secIndex)
//       }
//     }

//   }
//   for (var index = 0; index < array.length; index++) {
//     product(array[index], index);
//   }
//   return productTotal;
// }

// largestProductOfThree([1, 2, 3])
  //iterate through array with first value constant


var largestProductOfThree = function(array) {
  //sort array so last three numbers in back
  if (array.length <= 3) {
    return array.reduce(function(num1, num2) {
      return num1 * num2;
    })
  }
  // modify array sort
  var sorted = array.sort(function(num1, num2) {
    return num1 - num2;
  });
  console.log(sorted);
  // create new array with last three largest numbers
  var lastThree = sorted.slice(sorted.length - 3);
  // return product of new array
  return lastThree.reduce(function(num1, num2) {
    return num1 * num2;
  })
  // TODO: everything
};

// console.log(largestProductOfThree([-3, -2, -1, -4, 6]));

