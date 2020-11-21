class Solution:
    def containsDuplicate(self, nums):
        seen = set()

        for n in nums:
            if n in seen:
                return True
            else:
                seen.add(n)

        return False

