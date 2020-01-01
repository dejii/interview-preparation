"""
    Given a number N, verify if N is prime or not.

    Return 1 if N is prime, else return 0.
"""

from math import sqrt

def verifyPrime(n):
    if (n == 1):
        return 0

    for i in range(2, int(sqrt(n) + 1)):
        if (n % i == 0):
            return 0

    return 1

print(verifyPrime(31))