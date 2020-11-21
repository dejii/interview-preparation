class Solution:
    def countAndSay(self, n):

        ans = "1"

        for i in range(1, n):
            val = ans
            res = ""
            m = len(val)
            j = 0
            while j < m:
                count = 1
                while j + 1 < m and val[j] == val[j + 1]:
                    count += 1
                    j += 1

                res += str(count) + val[j]
                j += 1
            ans = res
            i += 1

        return ans

