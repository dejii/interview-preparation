/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (divisor === 0) return 0;
  if (dividend === 0) return 0;
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  var isPositive = true;
  if (dividend > 0 !== divisor > 0) isPositive = false;

  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);

  var count = 1,
    result = 0,
    base = divisor;

  while (dividend >= divisor) {
    count = 1;
    base = divisor;

    // while 3 <= 10 /2, base =6, count  = 2
    // while 6 <= 10 / 2 -> false
    // result += 2
    // dividend 10 - 6

    // result - 2, base = 6, dividend = 5
    /**
     * 3 10
        3 4
     */
    // console.log(base, dividend);
    while (base <= dividend >> 1) {
      base = base << 1;
      count = count << 1;
    }
    result += count;
    dividend -= base;
  }

  if (!isPositive) result = -result;
  return result;
};
console.log(divide(10, 3));

/**
 * class Solution {
public:
    int divide(int dividend, int divisor) {
        if (dividend == INT_MIN && divisor == -1) {
            return INT_MAX;
        }
        long dvd = labs(dividend), dvs = labs(divisor), ans = 0;
        int sign = dividend > 0 ^ divisor > 0 ? -1 : 1;
        while (dvd >= dvs) {
            long temp = dvs, m = 1;
            while (temp << 1 <= dvd) {
                temp <<= 1;
                m <<= 1;
            }
            dvd -= temp;
            ans += m;
        }
        return sign * ans;
    }
};
 */
