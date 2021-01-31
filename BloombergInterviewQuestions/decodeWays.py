class Solution:
    def isDigit(self, ch):
        return "0" <= ch <= "9"

    def decodeString(self, s: str) -> str:
        charStack = []
        countStack = []

        current = ""
        i = 0
        n = len(s)
        while i < n:
            if self.isDigit(s[i]):

                num = 0
                while i < n and self.isDigit(s[i]):
                    num = num * 10 + ord(s[i]) - ord("0")
                    i += 1
                countStack.append(num)
            elif s[i] == "[":
                charStack.append(current)
                current = ""
                i += 1
            elif s[i] == "]":
                ch = charStack.pop()
                repeat = countStack.pop()
                current = ch + repeat * current
                i += 1
            else:
                current += s[i]
                i += 1

        return current

