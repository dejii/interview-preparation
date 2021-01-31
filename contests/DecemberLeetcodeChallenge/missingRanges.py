class Solution:
    def getRange(self, l, h):
        print(l, h)
        if h - l == 0:

            return str(l)
        else:
            return f"{l}->{h}"

    def findMissingRanges(self, nums, lower, upper):
        n = len(nums)
        if n == 0:
            if upper - lower == 0:
                return [str(lower)]
            return [f"{lower}->{upper}"]
        i = 0
        arr = []
        while i < n:
            num = nums[i]
            print(i)

            if i == 0:
                if num - lower > 0:
                    l = lower
                    h = num - 1
                    arr.append(self.getRange(l, h))
                    print("sd")
            if i < n - 1:
                l = num + 1
                h = nums[i + 1] - 1
                arr.append(self.getRange(l, h))
            if i == n - 1:
                l = num + 1
                h = upper
                arr.append(self.getRange(l, h))
            i += 1
        return arr


# nums = [1000000]
# lower = 0
# upper = 1000000
nums = [-1]
lower = -1
upper = 0
s = Solution()
print(s.findMissingRanges(nums, lower, upper))
