/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let palindrome = [];
  for (let i = 0; i < s.length; i++) {
    const val = s[i].toLowerCase();
    if (("a" <= val && val <= "z") || ("0" <= val && val <= "9")) {
      palindrome.push(val);
    }
  }

  const n = palindrome.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (palindrome[i] !== palindrome[n - i - 1]) {
      return false;
    }
  }
  return true;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
