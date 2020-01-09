var numDecodings = function(s) {
  let dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[1] === "0" ? 0 : 1;
  for (let i = 2; i <= s.length; i++) {
    let oneDigit = parseInt(s.substring(i - 1, i), 10);
    let twoDigit = parseInt(s.substring(i - 2, i));
    if (oneDigit > 0) {
      dp[i] += dp[i - 1];
    }
    if (twoDigit >= 10 && twoDigit <= 26) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[s.length];
};

function numDecodingsUtil(s, k, memo) {
  if (k === 0) {
    return 1;
  }
  let firstIdx = s.length - k;
  if (s[firstIdx] === "0") {
    return 0;
  }
  if (memo[k]) {
    return memo[k];
  }
  let result = numDecodingsUtil(s, k - 1, memo);
  let twoDigit = parseInt(s.substring(firstIdx, firstIdx + 2), 10);
  if (k >= 2 && twoDigit >= 10 && twoDigit <= 26) {
    result += numDecodingsUtil(s, k - 2, memo);
  }
  memo[k] = result;

  return result;
}

var numDecodingsDp = function(s) {
  let memo = new Array(s.length + 1).fill(null);
  return numDecodingsUtil(s, s.length, memo);
};

console.log(numDecodingsDp("12345"));
