/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = new Map();
  let max = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (map.has(ch)) {
      j = Math.max(j, map.get(ch) + 1);
    }
    map.set(ch, i);
    max = Math.max(max, i - j + 1);
  }
  return max;
};
