var maxProfit = function(prices) {
  if (!prices || prices.length === 0) {
    return 0;
  }

  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i];
    }
  }
  return profit;
};
