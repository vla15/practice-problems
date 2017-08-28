var stockPricesYesterday = [10, 7, 5, 8, 11, 9, 3, 7, 12, 2, 11];
var negativePricesYesterday = [-10, -7, -5, -8, -11, -9];

// get_max_profit(stock_prices_yesterday)
// # returns 6 (buying for $5 and selling for $11)
// Each indicie represents a minute
// must wait a minute between before selling stock
// must buy before selling

const getMaxProfit = function(prices) {
  //keep track of min price
  //initialize max profit
  var maxProfit;
  if (prices.length < 2) {
    return null;
  } else {
    maxProfit = prices[0] - prices[1];
  }

  var minPurchase = prices[0];
  for (var i = 2; i < prices.length; i++) {
    if (prices[i] < minPurchase) {
      minPurchase = prices[i]
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPurchase);
    }
  }
  return maxProfit;
}


// const getMaxProfit = function(prices) {
//   //output is largest difference
//   // find the max difference between cur value and cur + 2
//   //brute force method
//   //var to hold maxProfit
//   var maxProfit;
//   for (var i = 0 ; i < prices.length; i++) {
//     for (var j = i + 2; j < prices.length; j++) {
//       if (i !== j && prices[j]) {
//         var diff = prices[j] - prices[i];
//         if (!maxProfit) {
//           maxProfit = diff;
//         } else {
//           maxProfit = Math.max(maxProfit, diff);
//         }
//       }
//     }
//   }
//   return maxProfit
//   //iterate through array
//     //take cur value
//     //get difference for profit
//     //compare if larger
//       //update maxProfit
// }

console.log(getMaxProfit(stockPricesYesterday));
console.log(getMaxProfit(negativePricesYesterday));