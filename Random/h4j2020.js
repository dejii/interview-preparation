function primeNumbers(n, set) {
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
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        indexes.push(i);
        set.add(i);
      }
    }
    return indexes;
  }

  const result = getAllIndexes(primes, 1);

  return result;
}
function isPrime(num, map) {
  num = parseInt(num, 10);
  if (map.has(num)) {
    return map.get(num);
  }
  if (num < 2) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      map.set(num, false);
      return false;
    }
  }
  map.set(num, true);
  return true;
}

function combination(str) {
  let set = new Set();
  primeNumbers(2000000, set);
  let result = [];
  dfs(str, 0, [], result, set);
  return result;
}

function isInRange(num) {
  return Number(num) <= Math.pow(10, 6);
}

function dfs(str, pos, path, result, set) {
  if (pos === str.length) {
    // result.count++;
    result.push(path.slice());
    return;
  }

  for (let i = pos; i < str.length; i++) {
    let current = str.slice(pos, i + 1);

    if (
      current.length < 7 &&
      isInRange(current) &&
      set.has(parseInt(current)) &&
      str[pos] !== "0"
    ) {
      // console.log(set.has(parseInt(current)));
      path.push(current);
      dfs(str, i + 1, path, result, set);
      path.pop();
    }
  }
}
// console.log(
//   combination(
//     `1350297079989171477791892123929141605573631151125933376097791877830238462471373933362476484818693477173990672289892448124097556197582379957168911392680312103962394732707409889862447273901522659`
//   )
// );
console.log(combination("23759"));

// console.log(isInRange("92680312103962394732707409889"));
