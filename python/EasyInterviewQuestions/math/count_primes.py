class Solution:
    def countPrimes(self, n):
        if n < 2:
            return 0
        primes = [True] * n
        primes[0] = False
        primes[1] = False

        from math import sqrt

        for i in range(2, int(sqrt(n)) + 1):

            for j in range(i * i, n, i):
                primes[j] = False

        return sum(primes)

