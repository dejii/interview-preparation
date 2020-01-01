var isOperator = function(op) {
  return op === "+" || op === "-" || op === "/" || op === "*";
};
function redundantBraces(A) {
  var s = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] === "(") {
      s++;
    } else if (isOperator(A[i])) {
      s--;
    }
    if (s < 0) s = 0;
  }
  return s === 0 ? 0 : 1;
}
