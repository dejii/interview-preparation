// var wordBreak = function(s, wordDict) {
//   var results = [];

//   var findCombos = function(current, pullFrom) {
//     // console.log(pullFrom);
//     // console.log(current.join(""));
//     if (pullFrom.length === 0) {
//       results.push(current.join(" "));
//       return;
//     }

//     for (var i = 0; i < wordDict.length; i++) {
//       console.log("-> ", wordDict[i]);
//       if (pullFrom.indexOf(wordDict[i]) === 0) {
//         // console.log(pullFrom, wordDict[i]);
//         current.push(wordDict[i]);
//         findCombos(current, pullFrom.slice(wordDict[i].length));
//         current.pop();
//       }
//     }
//   };
//   findCombos([], s);
//   return results;
// };
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
        console.log(s.substring(j, i));
        dp[i] = true;
        break;
      }
    }
  }
  console.log(dp.join(" "));
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
// console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
// console.log(wordBreak("whatisfacebook", ["what", "i", "is", "facebook"]));
