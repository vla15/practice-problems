var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

// get_max_profit(stock_prices_yesterday)
// # returns 6 (buying for $5 and selling for $11)
// Each indicie represents a minute
// must wait a minute between before selling stock
// must buy before selling

const getMaxProfit = function(prices) {
  //output is largest difference
  // find the max difference between cur value and cur + 2
  //brute force method
  //var to hold maxProfit
  var maxProfit = 0;
  for (var i = 0 ; i < prices.length; i++) {
    for (var j = i + 2; j < prices.length; j++) {
      if (i !== j && prices[j]) {
        var diff = prices[j] - prices[i];
        maxProfit = Math.max(maxProfit, diff);
      }
    }
  }
  return maxProfit
  //iterate through array
    //take cur value
    //get difference for profit
    //compare if larger
      //update maxProfit

}

console.log(getMaxProfit(stockPricesYesterday));