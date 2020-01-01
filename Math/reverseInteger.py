
"""
    Reverse digits of an integer.

    Example1:

    x = 123,

    return 321
    Example2:

    x = -123,

    return -321

    Return 0 if the result overflows and does not fit in a 32 bit signed integer
"""
def reverseInteger(A):
    negative = False
    if A < 0:
        negative = True
    num = list(str(abs(A)))
    n = len(num)
    
    for i in range(n//2):
        num[i], num[n - i - 1] = num[n - i - 1], num[i]
        
    num = ''.join(num)
    if (int(num) > ((1<<31))-1):
        return 0
    return 0 - int(num) if negative else int(num)

def reverseInteger2(A):
    sign = -1 if A < 0 else 1
    A = abs(A)
    ans = 0
    while(A > 0):
        # print(A)
        ans = (ans * 10) + (A % 10)
        A = A // 10
    return sign * ans


a = -122333
print(reverseInteger2(a))