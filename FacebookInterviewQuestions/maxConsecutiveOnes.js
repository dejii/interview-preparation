/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let zeroCount = 0;
  let left = 0;
  let right = 0;
  let res = 0;
  while (right < A.length) {
    if (A[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > K) {
      if (A[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    res = Math.max(res, right - left + 1);
    right++;
  }

  return res;
};
