var myPow = function(x, n) {
  if (n === 0) return 1;
  let res = 1;
  let pow = Math.abs(n);
  if (pow & 1) {
    res = x * myPow(x * x, (pow - 1) / 2);
  } else {
    res = myPow(x * x, pow / 2);
  }

  return n < 0 ? 1 / res : res;
};
