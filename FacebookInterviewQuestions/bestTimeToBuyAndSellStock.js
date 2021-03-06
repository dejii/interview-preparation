/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction 
(i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

var maxProfit = function(prices) {
  if (prices.length === 0) {
    return 0;
  }

  const n = prices.length;
  const left = [];
  const right = [];
  let minLeft = prices[0];
  let maxRight = prices[n - 1];
  for (let i = 0; i < n; i++) {
    minLeft = Math.min(minLeft, prices[i]);
    left.push(minLeft);

    maxRight = Math.max(maxRight, prices[n - i - 1]);
    right.push(maxRight);
  }
  right.reverse();
  console.log(left);
  console.log(right);

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, Math.abs(left[i] - right[i]));
  }
  return ans;
};

// const arr = [7, 1, 5, 3, 6, 4];
const arr = [7, 6, 4, 3, 1];
console.log(maxProfit(arr));

// 0(1) space
// or use kadane's algorithm
var maxProfit = function(prices) {
  if (prices.length === 0) {
    return 0;
  }

  const n = prices.length;

  // get min price and scan forward
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < n; i++) {
    minPrice = Math.min(prices[i], minPrice);
    let profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
};
