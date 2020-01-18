/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  // return A.map(n => Math.pow(n, 2)).sort((a, b) => a - b);
  let result = new Array(A.length).fill(0);
  let n = A.length;
  let i = 0;
  let j = n - 1;
  let p = n - 1;

  while (p >= 0) {
    if (Math.abs(A[i]) > Math.abs(A[j])) {
      result[p] = Math.pow(A[i], 2);
      i++;
    } else {
      result[p] = Math.pow(A[j], 2);
      j--;
    }
    p--;
  }
  return result;
};
