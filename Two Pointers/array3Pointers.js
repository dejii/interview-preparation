function minimize(A, B, C) {
  var ia = 0;
  var ib = 0;
  var ic = 0;
  var na = A.length;
  var nb = B.length;
  var nc = C.length;
  var res = Infinity;

  while (ia < na || ib < nb || ic < nc) {
    var a = ia === na ? A[A.length - 1] : A[ia];
    var b = ib === nb ? B[B.length - 1] : B[ib];
    var c = ic === nc ? C[C.length - 1] : C[ic];

    var ab = Math.abs(a - b);
    var bc = Math.abs(b - c);
    var ca = Math.abs(c - a);

    res = Math.min(Math.max(ab, bc, ca), res);

    if (ia < na && (a <= b || ib === nb) && (a <= c || ic === nc)) {
      ia++;
    } else if (ib < nb && (b <= c || ic === nc) && (b <= a || ia === na)) {
      ib++;
    } else {
      ic++;
    }
  }
  return res;
}
var a = [1, 4, 10];
var b = [2, 15, 20];
var c = [10, 12];
console.log(minimize(a, b, c));
