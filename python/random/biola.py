import math


def isPrime(p):
    n = p // 2 + 1
    for a in range(1, n):
        power = (p - 1) / 2
        num = (a ** power) + 1

        if num % p == 0:
            return True

    return False


# print(isPrime(113))
