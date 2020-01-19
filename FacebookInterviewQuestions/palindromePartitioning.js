/**
 * @param {string} s
 * @return {string[][]}
 */

function isPalindrome(s, i, j) {
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

function dfs(str, pos, decompInProgress, result) {
  // goal
  if (pos === str.length) {
    result.push(decompInProgress.slice());
    return;
  } else {
    // choices
    for (let i = pos; i < str.length; i++) {
      console.log(str.substring(pos, i + 1));
      // constriant
      if (isPalindrome(str, pos, i)) {
        decompInProgress.push(str.substring(pos, i + 1));
        dfs(str, i + 1, decompInProgress, result);
        decompInProgress.pop();
      }
    }
  }
}
var partition = function(s) {
  let decompInProgress = [];
  let result = [];
  dfs(s, 0, decompInProgress, result);
  return result;
};

console.log(partition("aab"));
// console.log(isPalindrome(["a", "a", "b"], 0, 2));
