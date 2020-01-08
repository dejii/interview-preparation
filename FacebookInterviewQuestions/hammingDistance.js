function hammingDistance(x, y) {
  let result = 0;
  let xor = x ^ y;
  while (xor > 0) {
    result += xor & 1;
    xor >>= 1;
  }
  return result;
}

console.log(hammingDistance(4, 5));
