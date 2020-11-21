class Solution:
    def reverseBits(self, n):

        res = 0

        for _ in range(32):
            res = res << 1
            res = res | (n & 1)
            n = n >> 1

        return res

