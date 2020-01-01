from math import sqrt

def primeFactorization(num):
    factors = []

    for i in range(2, int(sqrt(num) + 1)):

        if(num % i == 0):
            count = 0

            while(num % i == 0):
                num = num / i
                count +=1

            factors.append((i, count))

    if (num != 1):
        factors.append((num, 1))

    return factors

print(primeFactorization(10000000000000000))