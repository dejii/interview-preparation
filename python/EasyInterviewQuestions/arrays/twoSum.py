class Solution:
    def twoSum(self, nums, target):
        seen = {}
        n = len(nums)

        for i in range(n):
            if nums[i] in seen:
                return [seen.get(nums[i]), i]
            else:
                seen[target - nums[i]] = i
