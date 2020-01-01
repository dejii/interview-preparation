
def palindromeInteger(A):
    if A < 0:
        return 0

    return 1 if A == int(str(A)[::-1]) else 0

a = 12121
print(palindromeInteger(a))