class Solution:
    def myAtoi(self, str):
        i = 0
        n = len(str)
        sign = 1

        MAX_INT = 2 ** 31 - 1
        MIN_INT = -(2 ** 31)

        while i < n and str[i] == " ":
            i += 1

        if i < n and str[i] in ("+", "-"):
            sign = 1 if str[i] == "+" else -1
            i += 1

        if i < n and not ("0" <= str[i] <= "9"):
            return 0

        ans = 0

        while i < n:
            if "0" <= str[i] <= "9":
                digit = ord(str[i]) - ord("0")

                if MAX_INT // 10 < ans or (
                    MAX_INT // 10 == ans and MAX_INT % 10 < digit
                ):
                    return MIN_INT if sign == -1 else MAX_INT

                ans = (ans * 10) + digit

            else:
                break

            i += 1

        return ans * sign

