var wordBreak = function(s, wordDict) {
  let set = new Set();
  for (let word of wordDict) {
    set.add(word);
  }

  let dp = [];
  for (let i = 0; i <= s.length; i++) {
    dp.push(false);
  }
  dp[0] = true;
  // console.log(dp);

  for (let i = 1; i <= s.length; i++) {
    for (var j = 0; j < i; j++) {
      if (dp[j] && set.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};

function wb(s, set) {
  let len = s.length;
  if (len === 0) {
    return true;
  }
  for (let i = 1; i <= len; i++) {
    if (set.has(s.substring(0, i)) && wb(s.substring(i), set)) {
      return true;
    }
  }
  return false;
}

var wordBreak = function(s, wordDict) {
  let set = new Set();
  for (let word of wordDict) {
    set.add(word);
  }
  return wb(s, set);
};

console.log(wordBreak("leetcode", ["leet", "code"]));
// console.log(wb("code", new Set("code")));
