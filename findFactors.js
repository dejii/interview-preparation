// num - integer

// from our idea of cofactors, for a number n - we know that if a is one of the factors, then the cofactor b = n/a
// if a = b, then it's the square root of n

const findFactors = (num) => {
    const factors = [];

    for (let i = 1; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            factors.push(i);

            if (i !== Math.sqrt(num)) {
                factors.push(num / i)
            }
        }
    }

    return factors
};
const findFactorsSorted = (num) => {
    const factors = []; // factors less than or equal to sqaure root
    const factors2 = []; // factors above square root

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            factors.push(i);

            if (i !== Math.sqrt(num)) {
                factors2.push(num / i)
            }
        }
    }
    console.log(factors)
    console.log(factors2)

    return [...factors, ...factors2.reverse()]
};
console.log(findFactorsSorted(36))