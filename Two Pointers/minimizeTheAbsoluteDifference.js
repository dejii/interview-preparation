function minimize(A, B, C) {
  var i = A.length - 1;
  var j = B.length - 1;
  var k = C.length - 1;
  var diff = Math.abs(Math.max(A[i], B[j], C[k]) - Math.min(A[i], B[j], C[k]));
  while (i != -1 && j != -1 && k != -1) {
    diff = Math.min(
      diff,
      Math.abs(Math.max(A[i], B[j], C[k]) - Math.min(A[i], B[j], C[k]))
    );

    var max = Math.max(A[i], B[j], C[k]);
    if (A[i] === max) {
      i--;
    } else if (B[j] === max) {
      j--;
    } else {
      k--;
    }
  }
  return diff;
}
var a = [1, 4, 5, 8, 10];
var b = [6, 9, 15];
var c = [2, 3, 6, 6];
console.log(minimize(a, b, c));
