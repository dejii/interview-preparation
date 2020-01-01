function reverseString(A) {
  var stack = [];
  for (var i = 0; i < A.length; i++) {
    stack.push(A[i]);
  }
  result = "";
  while (stack.length > 0) {
    result += stack.pop();
  }

  return result;
}
console.log(reverseString("deji"));
