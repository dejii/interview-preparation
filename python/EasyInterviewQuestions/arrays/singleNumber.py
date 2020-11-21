class Solution:
    def singleNumber(self, nums):

        from functools import reduce

        return reduce(lambda x, y: x ^ y, nums)

