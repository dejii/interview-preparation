function intersection(A, B) {
  var i = 0;
  var j = 0;
  n = A.length;
  m = B.length;
  result = [];
  while (i < n && j < m) {
    if (A[i] === B[j]) {
      result.push(A[i]);
      i++;
      j++;
    } else if (A[i] < B[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

a = [1, 2, 3, 3, 4, 5, 6];
b = [3, 3, 5];
console.log(intersection(a, b));
