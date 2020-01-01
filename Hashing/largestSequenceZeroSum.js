function lsZero(A) {
  var ans = [];
  var maxSoFar = -Infinity;

  for (var i = 0; i < A.length; i++) {
    var currentSum = 0;
    for (var j = i; j < A.length; j++) {
      currentSum += A[j];
      var diff = j - i;
      if (diff > maxSoFar && currentSum === 0) {
        maxSoFar = diff;
        ans = A.slice(i, j + 1);
      }
    }
  }
  return ans;
}

var a = [1, 2, -2, 4, -4];

console.log(lsZero(a));
