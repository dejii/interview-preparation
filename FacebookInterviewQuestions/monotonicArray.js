/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < A.length; i++) {
    increasing = increasing && A[i - 1] <= A[i];
    decreasing = decreasing && A[i - 1] >= A[i];
  }

  return increasing || decreasing;
};
