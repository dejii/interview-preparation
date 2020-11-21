class Solution:
    def isAnagram(self, s, t):

        if len(s) != len(t):
            return False

        arr = []

        for _ in range(26):
            arr.append(0)

        for ch in s:
            char = ord(ch) - ord("a")
            arr[char] += 1

        for ch in t:
            char = ord(ch) - ord("a")
            arr[char] -= 1

            if arr[char] < 0:
                return False

        return True

