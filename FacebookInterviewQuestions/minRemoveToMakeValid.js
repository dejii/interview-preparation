/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let stack = [];
  s = s.split("");
  console.log(s);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      // if stack is empty, we need to remove it so we use a placeholder
      if (stack.length === 0) {
        s[i] = "-";
      } else {
        stack.pop();
      }
    }
  }
  console.log(stack);

  // remove invalid '(' indices and put a replace place holder
  while (stack.length > 0) {
    let idx = stack.pop();
    s[idx] = "-";
  }

  return s.join("").replace(/-/g, "");

  // finalize
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "$") {
      arr.push(s[i]);
    }
  }
  return arr.join("");
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
