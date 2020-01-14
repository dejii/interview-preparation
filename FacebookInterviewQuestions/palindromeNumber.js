/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let y = x;
  let rev = 0;
  while (y > 0) {
    let lastDigit = y % 10;
    rev = rev * 10 + lastDigit;
    y = Math.floor(y / 10);
  }

  return x === rev;
};
