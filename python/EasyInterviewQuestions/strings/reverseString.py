class Solution:
    def reverseString(self, s):
        """
        Do not return anything, modify s in-place instead.
        """

        n = len(s)

        for i in range(n // 2):
            s[i], s[n - i - 1] = s[n - i - 1], s[i]

