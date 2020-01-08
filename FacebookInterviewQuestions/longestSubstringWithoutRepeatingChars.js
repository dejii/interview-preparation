/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var A = s;
  var max = 0;
  var store = {};
  for (var i = 0, j = 0; i < A.length; i++) {
    if (store.hasOwnProperty(A[i])) {
      j = Math.max(j, store[A[i]] + 1);
    }
    store[A[i]] = i;
    max = Math.max(max, i - j + 1);
  }
  return max;
};
