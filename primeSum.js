

const primeSum = (n) => {
    let primes = [];
    for  (let i = 0; i <= n; i++) {
        primes[i] = true;
    }

    // 0 and 1 are not primes
    primes[0] = false;
    primes[1] = false;

    // sieve of eratosthenes
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (primes[i]) {
            for (let j = i * 2; j <= n; j+=i) {
                primes[j] = false;
            }
        }
    }
    const primeNumbers = [];

    // get the prime numbers
    for (let i = 0;  i < primes.length; i++) {
        if (primes[i]) {
            primeNumbers.push(i)
        }
    }

    console.log(primeNumbers);

    // test for primeness
    const isPrime = (num) => {
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    // if the complement of the prime number is also prime, then we have the solution
    for (let i = 0; i < primeNumbers.length; i++) {
        if (isPrime(n - primeNumbers[i])) {
            return [primeNumbers[i], n - primeNumbers[i]]
        }
    }


    return primeNumbers;
}

console.log(primeSum(11))