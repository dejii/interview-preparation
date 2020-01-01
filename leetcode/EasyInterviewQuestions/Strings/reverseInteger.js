/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const INT_MAX = Math.pow(2, 31) - 1;
  let sign = 1;
  let str = x.toString();
  if (x < 0) {
    sign = -1;
    str = str.substring(1);
  }
  let i = str.length - 1;
  let ans = 0;

  while (i >= 0) {
    const digit = str.charCodeAt(i) - "0".charCodeAt(0);
    if (
      Math.floor(INT_MAX / 10) < ans ||
      (Math.floor(INT_MAX / 10) === ans && INT_MAX % 10 < digit)
    ) {
      return 0;
    }
    ans = ans * 10 + digit;
    i--;
  }

  return ans * sign;
};
console.log(reverse(2147483642));
