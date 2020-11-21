class Solution:
    def hammingDistance(self, x, y):
        res = x ^ y

        count = 0
        mask = 1
        for i in range(31):
            if res & mask:
                count += 1
            mask <<= 1
        return count
