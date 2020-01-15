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

/*
class Solution {
public:
bool isPalindrome(int x) {
    int i=x, n=0;
    while(i>0)
    {
        n=i%10+n*10;
        i/=10;
    }
    return n==x;
}
};
*/
