class Solution:
    def plusOne(self, digits):

        n = len(digits)
        i = n - 1
        carry = 1
        while i >= 0:
            s = digits[i] + carry
            digits[i] = s % 10
            carry = s // 10
            i -= 1

        if carry != 0:
            digits.insert(0, carry)

        return digits
