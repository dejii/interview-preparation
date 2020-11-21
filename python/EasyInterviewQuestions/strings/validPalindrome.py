class Solution:
    def isPalindrome(self, s):

        i = 0
        j = len(s) - 1

        while i < j:
            if not s[i].isalnum():
                i += 1
            elif not s[j].isalnum():
                j -= 1
            else:
                if s[i].lower() != s[j].lower():
                    return False
                i += 1
                j -= 1

        return True

    # arr = []
    # s = s.lower()
    # for ch in s:
    #     if 'a' <= ch <='z' or '0' <= ch <= '9':
    #         arr.append(ch)

    # n = len(arr)
    # for i in range(n):
    #     if arr[i] != arr[n - i - 1]:
    #         return False

    # return True

