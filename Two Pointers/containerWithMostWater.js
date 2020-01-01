function maxArea(A) {
  var i = 0;
  var j = A.length - 1;
  var area = 0;

  while (i < j) {
    area = Math.max(area, (j - i) * Math.min(A[i], A[j]));

    if (A[i] < A[j]) {
      i++;
    } else {
      j--;
    }
  }

  return area;
}
var a = [1, 5, 4, 3];
console.log(maxArea(a));
