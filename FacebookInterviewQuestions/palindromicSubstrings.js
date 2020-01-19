/**
 * @param {string} s
 * @return {number}
 */

function extendPalindromesFromCenter(s, c1, c2) {
  let count = 0;
  let l = c1;
  let r = c2;
  while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
    count++;
    l--;
    r++;
  }
  return count;
}
var countSubstrings = function(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += extendPalindromesFromCenter(s, i, i);
    count += extendPalindromesFromCenter(s, i, i + 1);
  }

  return count;
};
//Idea is start from each index and try to extend palindrome for both odd and even length.
