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
    if (i != pos && num.charAt(pos) === "0") break;
    let curr = toDigit(num.substring(pos, i + 1));
    if (pos === 0) {
      dfs(result, num, path + curr, target, i + 1, curr, curr);
    } else {
      dfs(result, num, path + "+" + curr, target, i + 1, eval + curr, curr);
      dfs(result, num, path + "-" + curr, target, i + 1, eval - curr, -curr);
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
