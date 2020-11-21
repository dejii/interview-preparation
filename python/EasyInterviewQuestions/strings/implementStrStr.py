class Solution:
    def strStr(self, haystack, needle):
        n = len(haystack)
        m = len(needle)

        if needle == "":
            return 0

        for i in range(n - m + 1):
            for j in range(m):

                if haystack[i + j] != needle[j]:
                    break

                elif j == m - 1:
                    return i

        return -1

