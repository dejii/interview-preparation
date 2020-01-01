import math

def isPrime(n):

    if (n < 1):
        return False

    for i in range(2, int(math.sqrt(n) + 1)):
        if (n % i == 0):
            return False

    return True

def primesum(A):
    primes = [True] * (A + 1)

    primes[0] = False
    primes[1] = False

    sqrt_n = int(math.sqrt(A))

    for i in range(2, sqrt_n + 1):
        if (primes[i]):
            for j in range(i * 2, A + 1, i):
                primes[j] = False
    
    result = [i for i, b in enumerate(primes) if b]

    print(result)
        
    # Basically there are always two prime numbers that sum up to a given number
    # After generating the list of primes we loop through it and check each's complement
    # if the complement of the current prime number is also a prime, then it sums up to the number
    for i in range(len(result)):
        if (isPrime(A - result[i])):
            return sorted([result[i], A - result[i]])
    

print(primesum(4))

