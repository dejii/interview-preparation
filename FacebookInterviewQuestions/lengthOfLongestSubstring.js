/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = new Map();
  let max = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    let ch = s.charAt(i);

    // sliding window magic
    if (map.has(ch)) {
      // move our left pointer to one past the previous location of the ch
      // take the max incase we've passed the window, basically current window
      j = Math.max(j, map.get(ch) + 1);
    }
    map.set(ch, i);
    max = Math.max(max, i - j + 1);
  }
  return max;
};
/**
 * This is just to make sure we are checking in current window.
Consider the input: "tmsmfdut"
for the case when i = s.length()-1.
Here, j= 2.
if you just use , map.get(s.charAt(i))+1, then j will be set to 1 and it will give wrong answer.
but it should not be updated as this value is less than current value of j = 2 or in simple words 
its outside of the window j=2 and i=7.
 */
