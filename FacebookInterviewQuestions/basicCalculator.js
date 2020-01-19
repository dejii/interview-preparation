/**
 * 
 Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), t
he plus + or minus sign -, non-negative integers and empty spaces .

Example 1:

Input: "1 + 1"
Output: 2
Example 2:

Input: " 2-1 + 2 "
Output: 3
Example 3:

Input: "(1+(4+5+2)-3)+(6+8)"
Output: 23
Note:
You may assume that the given expression is always valid.
Do not use the eval built-in library function.
 */
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
      // get the digit
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
