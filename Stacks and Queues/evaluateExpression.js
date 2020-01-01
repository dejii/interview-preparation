function evaluate(A) {
  var stack = [];

  for (var i = 0; i < A.length; i++) {
    if (["+", "-", "*", "/"].indexOf(A[i]) !== -1) {
      var right = stack.pop();
      var left = stack.pop();
      var res;
      switch (A[i]) {
        case "+":
          res = parseInt(left) + parseInt(right);
          break;
        case "-":
          res = parseInt(left) - parseInt(right);
          break;
        case "*":
          res = parseInt(left) * parseInt(right);
          break;
        case "/":
          res = parseInt(left) / parseInt(right);
          break;
      }
      stack.push(res);
    } else {
      stack.push(A[i]);
    }
  }

  return stack.pop();
}
var a = ["4", "13", "5", "/", "+"];
console.log(evaluate(a));
