class Solution:
    def reverse(self, x):

        MAX_INT = 2147483647
        sign = 1 if x > 0 else -1

        x = abs(x)
        ans = 0

        while x > 0:
            # check for overflow
            if MAX_INT // 10 < ans or (MAX_INT // 10 == ans and MAX_INT % 10 < x % 10):
                return 0

            ans *= 10
            ans += x % 10
            x = x // 10

        return ans * sign

