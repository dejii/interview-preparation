/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
function toDigit(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    let d = str.charCodeAt(i) - "0".charCodeAt(0);
    res = res * 10 + d;
  }
  return res;
}
// contraint -> position === end of string
// goal -> eval === target
// choices, + , - , *

// 12345 -> 1+2+3 *
function dfs(result, num, path, target, pos, eval, multi) {
  if (pos === num.length) {
    if (eval === target) {
      result.push(path);
    }
    return;
  }

  for (let i = pos; i < num.length; i++) {
    // corner case: if current position is 0, we can only use it as a single digit number, should be 0
    // if it is not a single digit number with leading 0, it should be considered as an invalid number
    if (i != pos && num.charAt(pos) === "0") break;

    // take digits up i and peform searches
    let curr = toDigit(num.substring(pos, i + 1));
    console.log(curr);
    if (pos === 0) {
      dfs(result, num, path + curr, target, i + 1, curr, curr);
    } else {
      dfs(result, num, path + "+" + curr, target, i + 1, eval + curr, curr);
      dfs(result, num, path + "-" + curr, target, i + 1, eval - curr, -curr);

      //for example, if you have a sequence of 12345 and you have proceeded to 1 + 2 + 3,
      //now your eval is 6 right? If you want to add a * between 3 and 4, you would take 3 as
      //the digit to be multiplied, so you want to take it out from the existing eval.
      // You have 1 + 2 + 3 * 4 and the eval now is (1 + 2 + 3) - 3 + (3 * 4). Hope this could help : )
      dfs(
        result,
        num,
        path + "*" + curr,
        target,
        i + 1,
        eval - multi + multi * curr,
        multi * curr
      );
    }
  }
}
var addOperators = function(num, target) {
  let result = [];
  if (!num || num === "") {
    return result;
  }

  dfs(result, num, "", target, 0, 0, 0);
  return result;
};

console.log(addOperators("123", 6));
//One easy way to calculate time complexity: There are n-1 slots for us to add an operator and
//there are 4 choices (+, -, * and no operator) so the complexity is 4^(N-1).
