const primeNumbers = n => {
  const primes = [];

  // initialize the array to true ie 1 in this case
  for (i = 0; i <= n; i++) {
    primes[i] = 1;
  }

  // 1 and 0 are not prime numbers
  primes[0] = 0;
  primes[1] = 0;

  for (i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i] === 1) {
      for (let j = i; i * j <= n; j++) {
        primes[i * j] = 0;
      }
      // for (let j = i * 2; j <= n; j+=i) {
      //     primes[j] = 0;
      // }
    }
  }

  function getAllIndexes(arr, val) {
    var indexes = [],
      i;
    for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
    return indexes;
  }

  const result = getAllIndexes(primes, 1);

  return result;
};

console.log(primeNumbers(2000000));
