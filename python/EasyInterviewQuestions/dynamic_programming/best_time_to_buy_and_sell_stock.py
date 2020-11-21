class Solution:
    def maxProfit(self, prices):

        profit = 0
        n = len(prices)
        minn = float("inf")
        for i in range(0, n):
            if prices[i] < minn:
                minn = prices[i]

            if prices[i] > minn:
                profit = max(profit, prices[i] - minn)

        return profit

