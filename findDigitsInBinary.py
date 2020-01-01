"""
    param A : integer
    return a strings
"""

def digitsToBinary(n):
    # binary has two representations: 0, 1
    # 0 remains 0 in decimal, same applies for 1
    if (n == 0):
         return '0'

    bin = '' # binary string to be returned

    while (n > 0):
        bin = str(n % 2) + bin # concatenate the remainders from the division as we loop, last remainder first
        n = n // 2 # n is the whole number left from the division

    return bin

print(digitsToBinary(1))