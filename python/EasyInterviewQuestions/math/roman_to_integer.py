class Solution:
    def romanToInt(self, s):
        store = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
        n = len(s)

        res = 0

        for i in range(n):

            if i < n - 1 and store[s[i]] < store[s[i + 1]]:
                res -= store[s[i]]
            else:
                res += store[s[i]]

        return res
