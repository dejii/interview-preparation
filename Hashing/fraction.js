function fractionToDecimal(A, B) {
  if (A === 0) {
    return 0;
  }
  var res = "";
  res += (A > 0) ^ (B > 0) ? "-" : "+";
  A = Math.abs(A);
  B = Math.abs(B);
  res += Math.floor(A / B) + "";
  var remainder = A % B;
  if (remainder === 0) {
    return res;
  }
  res += ".";
  const map = new Map();
  map.set(remainder, res.length);
  while (remainder !== 0) {
    remainder *= 10;
    res += Math.floor(remainder / B) + "";
    remainder %= B;
    if (map.has(remainder)) {
      var index = map.get(remainder);
      res = res.substr(0, index) + "(" + res.substr(index) + ")";
      break;
    } else {
      map.set(remainder, res.length);
    }
  }
  return res;
}

console.log(fractionToDecimal(25, 99));
