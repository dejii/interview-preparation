function countingTriangles(A) {
  A = A.sort((x, y) => x - y);
  var n = A.length;
  count = 0;
  for (var k = n - 1; k > 1; k--) {
    i = 0;
    j = k - 1;
    while (i < j) {
      if (A[i] + A[j] > A[k]) {
        count += j - i;
        j--;
      } else {
        i++;
      }
    }
  }
  return count;
}

var a = [1, 1, 1, 2, 2, 2];
console.log(countingTriangles(a));
