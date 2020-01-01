function diffPossible(A, B) {
  var i = 0;
  var j = 1;
  while (j < A.length) {
    var diff = A[j] - A[i];
    if (diff === B) {
      return 1;
    } else if (diff > B) {
      i++;
      if (i === j) j++;
    } else {
      j++;
    }
  }
  return 0;
}

var a = [1, 3, 5];
var b = 1;
console.log(diffPossible(a, b));
