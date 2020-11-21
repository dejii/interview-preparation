class Solution:
    def removeDuplicates(self, nums):
        n = len(nums)

        i = 0
        j = 1

        while j < n:
            if nums[i] != nums[j]:
                i += 1
                nums[i] = nums[j]

            j += 1

        return i + 1

