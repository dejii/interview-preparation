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

/**
 * the basic idea is, keep a hashmap which stores the characters in
 * string as keys and their positions as values, and keep two pointers which
 *  define the max substring. move the right pointer to scan through the string
 * , and meanwhile update the hashmap. If the character is already in the hashmap,
 *  then move the left pointer to the right of the same character last found. Note
 *  that the two pointers can only move forward.
 */
