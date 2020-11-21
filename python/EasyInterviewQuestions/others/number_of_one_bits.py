class Solution:
    def hammingWeight(self, n):

        # res = 0
        # while n > 0:
        #     res += (n & 1)
        #     n >>= 1
        # return res

        count = 0
        mask = 1
        for _ in range(32):
            if n & mask:
                count += 1
            mask <<= 1

        return count
