class Solution:
    def longestCommonPrefix(self, strs):

        m = float("inf")
        word = ""
        n = len(strs)

        ans = ""
        if n == 0:
            return ans
        for w in strs:
            if len(w) < m:
                m = len(w)
                word = w

        for i in range(m):
            s = word[i]
            for j in range(n):
                if strs[j][i] != s:
                    return ans
            ans += s

        return ans
