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

function wb(s, set, words) {
  let len = s.length;
  if (len === 0) {
    return;
  }
  for (let i = 1; i <= len; i++) {
    if (set.has(s.substring(0, i)) && wb(s.substring(i), set)) {
      words.push(s.substring(i));
      console.log("her");
      // return true;
    }
  }
  // return false;
}

var wordBreak = function(s, wordDict) {
  let set = new Set();
  for (let word of wordDict) {
    set.add(word);
  }
  let words = [];
  wb(s, set, words);
  console.log(words);
};

var wordBreak = function(s, wordDict) {
  let set = new Set();
  for (let word of wordDict) {
    set.add(word);
  }

  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (var j = 0; j < i; j++) {
      if (dp[j] && set.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  if (!dp[s.length]) {
    return [];
  }
  let newDp = new Array(s.length + 1).fill(null);
  newDp[0] = [""];
  for (let i = 1; i <= s.length; i++) {
    let list = [];
    for (let j = 0; j < i; j++) {
      if (
        newDp[j] !== null &&
        newDp[j].length > 0 &&
        set.has(s.substring(j, i))
      ) {
        for (let l of newDp[j]) {
          list.push(l + (l === "" ? "" : " ") + s.substring(j, i));
        }
      }
    }
    newDp[i] = list;
  }
  console.log(newDp);
  return newDp[s.length];
};
// console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
// console.log(
//   wordBreak(
//     "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//     [
//       "a",
//       "aa",
//       "aaa",
//       "aaaa",
//       "aaaaa",
//       "aaaaaa",
//       "aaaaaaa",
//       "aaaaaaaa",
//       "aaaaaaaaa",
//       "aaaaaaaaaa"
//     ]
//   )
// );
// console.log(wordBreak("whatisfacebook", ["what", "i", "is", "facebook"]));
// console.log(wb("code", new Set(["leet", "cod"])));

/**
 *
 * https://www.geeksforgeeks.org/word-break-problem-dp-32/
 */
