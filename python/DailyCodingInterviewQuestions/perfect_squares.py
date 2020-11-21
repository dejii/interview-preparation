class Solution:
    def numSquares(self, n):
        size = n + 1
        dp = [-1] * size
        return self.helper(n, dp)

    def helper(self, n, dp):
        if dp[n] != -1:
            return dp[n]
        if n == 0:
            return 0

        min_val = float("inf")
        i = 1

        while i * i <= n:
            sq = i * i
            curr = self.helper(n - sq, dp) + 1
            min_val = min(min_val, curr)
            i += 1

        dp[n] = min_val
        return min_val

