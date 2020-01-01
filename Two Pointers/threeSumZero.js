function threeSumZero(A) {
  var seen = {};
  hasZero = false;
  for (var i = 0; i < A.length; i++) {
    if (!seen.hasOwnProperty(A[i])) {
      if (A[i] === 0) hasZero = true;
      seen[A[i]] = A[i];
    }
  }
  //   console.log(seen);
  A = Object.keys(seen).map(function(num) {
    return parseInt(num);
  });

  A = A.sort(function(x, y) {
    return x - y;
  });
  var result = [];

  for (var i = 0; i < A.length - 2; i++) {
    j = i + 1;
    k = A.length - 1;
    while (j < k) {
      if (A[i] + A[j] + A[k] === 0) {
        result.push([A[i], A[j], A[k]]);

        j++;
        k--;
      } else if (A[i] + A[j] + A[k] < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  if (hasZero) result.push([0, 0, 0]);

  return result;
}
var a = [1, -4, 0, 0, 5, -5, 1, 0, -2, 4, -4, 1, -1, -4, 3, 4, -1, -1, -3];
console.log(threeSumZero(a));
