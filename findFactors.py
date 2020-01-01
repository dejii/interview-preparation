from math import sqrt

def findFactors(num):
    factors = []

    for i in range(1, int(sqrt(num)) + 1):
        if (num % i == 0):
            factors.append(i)

            if (i != sqrt(num)):
                factors.append(num // i)

    return factors

def findFactorsSorted(num):
    factors = [] # factors less than or equal to sqaure root
    factors2 = [] # factors above square root

    for i in range(1, int(sqrt(num)) + 1):
        if (num % i == 0):
            factors.append(i)

            if (i != sqrt(num)):
                factors2.append(num // i)


    return factors + list(reversed(factors2))

print(findFactorsSorted(36))