/*
    Find the prime factors of a given number
    return the prime factors and its frequency

    note: if a number does not have any factor till sqrt(n) then it is a prime number
*/

const primeFactorization = (n) => {
    const factors = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {

        if(n % i === 0) {
            let count = 0
            while (n % i === 0) {
                n = n / i;
                count++
            }
            factors.push({
                factor: i,
                count
            });
        }

    }

    // at this point n = 1 or it is a prime number
    if (n !== 1) {
        factors.push({
            factor: n,
            count: 1
        })
    }
    return factors;
};

console.log(JSON.stringify(primeFactorization(2244555533333333333333333354), undefined, 2))

/*
    For primeFactorization(36)
    [
        {
            "factor": 2,
            "count": 2
        },
        {
            "factor": 3,
            "count": 2
        }
    ]

    = 2 x 2 x 3 x 3
*/