from math import sqrt

def primeNumbers(n):
    primes = [True] * (n + 1)

    primes[0] = False
    primes[1] = False

    sqrt_n = int(sqrt(n))

    for i in range(2, sqrt_n + 1):
        if (primes[i]):
            for j in range(i * 2, n + 1, i):
                primes[j] = False
                

    result = [i for i, b in enumerate(primes) if b]


    return result


print(primeNumbers(100000000))