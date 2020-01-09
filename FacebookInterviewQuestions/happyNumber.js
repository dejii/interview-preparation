/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let set = new Set();
  while (n !== 1) {
    let sum = 0;
    let current = n;
    while (current > 0) {
      console.log(current);
      sum += (current % 10) * (current % 10);
      current = Math.floor(current / 10);
    }
    // console.log(sum);

    if (set.has(sum)) {
      return false;
    }

    set.add(sum);
    n = sum;
  }

  return true;
};
console.log(isHappy(19));
