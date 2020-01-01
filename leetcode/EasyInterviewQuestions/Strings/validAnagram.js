/**
 * Given two strings s and t , write a function to determine if t is an anagram of s.

    Example 1:

    Input: s = "anagram", t = "nagaram"
    Output: true
    Example 2:

    Input: s = "rat", t = "car"
    Output: false
    Note:
    You may assume the string contains only lowercase alphabets.

    Follow up:
    What if the inputs contain unicode characters? How would you adapt your solution to such case?

    ANSWER -> USE A HASHMAP!!!!
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const alphabets = [];
  for (var i = 0; i < 26; i++) {
    alphabets[i] = 0;
  }
  var n = s.length;
  for (var i = 0; i < n; i++) {
    var idx1 = s.charCodeAt(i) - "a".charCodeAt(0);
    var idx2 = t.charCodeAt(i) - "a".charCodeAt(0);
    alphabets[idx1]++;
    alphabets[idx2]--;
  }
  for (var i = 0; i < alphabets.length; i++) {
    if (alphabets[i] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
