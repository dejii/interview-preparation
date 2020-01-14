/**
 * @param {string} s
 * @return {string}
 */

/*
     01234
    "babad"
    p1 = lpec(babad, 0, 0) -> s.slice(0, 1) -> 'b'
    p2 = lpec(babad, 0, 1) -> s.slice(1, 1) -> ''

    p1 = lpec(babad, 1, 1) -> s.slice(0, 3) -> 'bab' -> update longest
    p2 = lpec(babad, 1, 2) -> s.slice(2, 2) -> ''

    p1 = lpec(babad, 2, 2) -> s.slice(1, 4) -> 'aba'
    p2 = lpec(babad, 2, 3) -> s.slice(3, 3) -> ''

    p1 = lpec(babad, 3, 3) -> s.slice(3, 4) -> 'a'
    p2 = lpec(babad, 3, 4) -> s.slice(4, 4) -> ''

    O(n)
    O(1)
 
 */
var longestPalindromeExpandingFromCentre = function(s, c1, c2) {
  let l = c1; // center 1
  let r = c2; // center 2

  while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
    l--;
    r++;
  }

  return s.slice(l + 1, r);
};

var longestPalindrome = function(s) {
  // edge case when s has a length of one
  let longest = s.slice(0, 1);
  for (let i = 0; i < s.length - 1; i++) {
    let p1 = longestPalindromeExpandingFromCentre(s, i, i);
    if (p1.length > longest.length) {
      longest = p1;
    }

    let p2 = longestPalindromeExpandingFromCentre(s, i, i + 1);
    if (p2.length > longest.length) {
      longest = p2;
    }
  }

  return longest;
};

console.log(longestPalindrome("babad"));
