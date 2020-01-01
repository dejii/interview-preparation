

def divide(A, B):
    # sign = -1 if ((A < 0) ^ (B < 0)) else 1

    # dividend, divisor = abs(A), abs(B)
    # quotient = temp = 0

    # for i in range(31, -1, -1):
    #     if temp + (divisor << i) <= dividend:
    #         temp += (divisor << i)
    #         quotient |= 1 << i
    sign = -1 if (A < 0) ^ (B < 0) else 1
    A = abs(A)
    B = abs(B)
    res = 0
    while (A >= B):
        A -= B
        res += 1

    return sign * res

print(divide(8393333,3))

