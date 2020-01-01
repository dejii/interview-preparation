/*
    Given a number N, verify if N is prime or not.

    Return 1 if N is prime, else return 0.
*/

const isPrime = (n) => {
    if (n === 1) return 0
        
        for(var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return 0
            }
        }
        return 1
}; 

console.log(isPrime(5))

