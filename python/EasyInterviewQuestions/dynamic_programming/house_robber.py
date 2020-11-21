class Solution:
    def helper(self, memo, nums, i):
        if i < 0:
            return 0

        if memo[i] >= 0:
            return memo[i]

        res = max(
            self.helper(memo, nums, i - 2) + nums[i], self.helper(memo, nums, i - 1)
        )
        memo[i] = res
        return res

    def rob(self, nums):
        # n = len(nums)
        # memo = [-1] * n
        # return self.helper(memo, nums, n - 1)

        n = len(nums)
        if n == 0:
            return 0
        if n == 1:
            return nums[0]

        dp = [0] * n
        dp[0] = nums[
            0
        ]  # we know the max amount at the first house is the money he can find there
        dp[1] = max(
            nums[0], nums[1]
        )  # the max here is the max btw the prev and this because he cant rob adjacent houses

        for i in range(2, n):
            dp[i] = max(dp[i - 2] + nums[i], dp[i - 1])

        return dp[n - 1]

