class Solution:
    def firstUniqChar(self, s):

        # count = {}

        # for ch in s:
        #     if ch in count:
        #         count[ch] += 1
        #     else:
        #         count[ch] = 1

        # for i in range(len(s)):
        #     if count[s[i]] == 1:
        #         return i

        # return -1

        arr = []
        for i in range(26):
            arr.append(0)

        for ch in s:
            char = ord(ch) - ord("a")
            arr[char] += 1

        for i in range(len(s)):
            char = ord(s[i]) - ord("a")
            if arr[char] == 1:
                return i

        return -1

