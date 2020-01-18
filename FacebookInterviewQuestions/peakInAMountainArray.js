var peakIndexInMountainArray = function(A) {
  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
      return i;
    }
  }
  return -1;
};

var peakIndexInMountainArray = function(A) {
  function mid(a, b) {
    return Math.floor((b - a) / 2);
  }

  let left = 0,
    right = A.length - 1;
  let pivot = mid(left, right);

  while (A[pivot - 1] > A[pivot] || A[pivot] < A[pivot + 1]) {
    if (A[pivot] > A[pivot + 1]) {
      right = pivot;
      pivot = mid(left, right);
    } else {
      left = pivot;
      pivot += mid(left, right);
    }
  }

  return pivot;
};
/**
 * public int peakIndexInMountainArray(int[] A) {
        int lo = 0, hi = A.length - 1;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (A[mid] < A[mid + 1]) { // peak index is after mid.
                lo = mid + 1;
            }else if (A[mid -1] > A[mid]) { // peak index is before mid.
                hi = mid;
            }else { // peak index is mid.
                return mid;
            }
        }
        return -1; // no peak.
    }
 */
