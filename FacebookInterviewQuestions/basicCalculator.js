function isDigit(ch) {
  return (
    ch.charCodeAt(0) >= "0".charCodeAt(0) &&
    ch.charCodeAt(0) <= "9".charCodeAt(0)
  );
}

var calculate = function(s) {
  let result = 0;
  let sign = 1;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (isDigit(ch)) {
      let num = ch.charCodeAt(0) - "0".charCodeAt(0);
      while (i + 1 < s.length && isDigit(s.charAt(i + 1))) {
        num = num * 10 + s.charAt(i + 1).charCodeAt(0) - "0".charCodeAt(0);
        i++;
      }
      result += sign * num;
    } else if (ch === "+") {
      sign = 1;
    } else if (ch === "-") {
      sign = -1;
    } else if (ch === "(") {
      stack.push(result);
      stack.push(sign);
      result = 0;
      sign = 1;
      console.log(stack);
    } else if (ch === ")") {
      let signBefore = stack.pop();
      let numBefore = stack.pop();
      result = result * signBefore + numBefore;
    }
  }
  return result;
};

console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
console.log(calculate("2147483647"));
