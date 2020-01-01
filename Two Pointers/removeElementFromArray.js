function remove(A, B) {
  var i = 0;
  for (var n of A) {
    if (n != B) {
      A[i++] = n;
    }
  }
  return A.slice(0, i);
  return i;
}
var a = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 20];
var b = 5;
console.log(remove(a, b));
