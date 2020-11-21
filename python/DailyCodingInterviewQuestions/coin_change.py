class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        size = amount + 1
        dp = [-1] * size
        ans = self.helper(coins, amount, dp)
        return -1 if ans > amount else ans

    def helper(self, coins, amount, dp):
        if dp[amount] != -1:
            return dp[amount]

        if amount == 0:
            return 0
        n = len(coins)
        min_count = float("inf")
        for i in range(n):
            coin = coins[i]
            if amount - coin >= 0:
                curr = self.helper(coins, amount - coin, dp) + 1
                min_count = min(min_count, curr)
        dp[amount] = min_count
        return min_count
