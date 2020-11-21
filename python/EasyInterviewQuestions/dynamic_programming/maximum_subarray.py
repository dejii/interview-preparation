class Solution:
    def maxSubArray(self, nums):

        maxEndingHere = nums[0]
        maxSoFar = nums[0]
        n = len(nums)

        for i in range(1, n):

            maxEndingHere = max(nums[i], maxEndingHere + nums[i])
            maxSoFar = max(maxSoFar, maxEndingHere)

        return maxSoFar

