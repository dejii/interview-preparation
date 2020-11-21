class Solution:
    def moveZeroes(self, nums):
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        i = 0
        j = 0

        while j < n:
            if nums[j] != 0:
                nums[i] = nums[j]
                i += 1
            j += 1

        while i < n:
            nums[i] = 0
            i += 1

