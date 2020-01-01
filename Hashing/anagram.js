function isAnagram(wordOne, wordTwo) {
  if (wordOne.length !== wordTwo.length) {
    return false;
  }
  wordOneCount = {};
  for (var i = 0; i < wordOne.length; i++) {
    if (!wordOneCount.hasOwnProperty(wordOne[i])) {
      wordOneCount[wordOne[i]] = 1;
    } else {
      wordOneCount[wordOne[i]]++;
    }
  }
  wordTwoCount = {};
  for (var i = 0; i < wordTwo.length; i++) {
    if (!wordTwoCount.hasOwnProperty(wordTwo[i])) {
      wordTwoCount[wordTwo[i]] = 1;
    } else {
      wordTwoCount[wordTwo[i]]++;
    }

    if (
      wordOne.indexOf(wordTwo[i]) !== -1 &&
      wordTwoCount[wordTwo[i]] <= wordOneCount[wordTwo[i]]
    ) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

function canInsert(result, arr) {
  var temp = {};
  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (result[i].indexOf(arr[j]) !== -1) {
        return false;
      }
    }
  }
  return true;
}

function anagram(A) {
  var result = [];
  var anags = {};
  for (var i = 0; i < A.length; i++) {
    var temp = [i + 1];
    for (var j = i + 1; j < A.length; j++) {
      if (isAnagram(A[i], A[j])) {
        temp.push(j + 1);
        anags[i + 1] = 1;
        anags[j + 1] = 1;
        continue;
      }
    }
    if (temp.length > 1 && canInsert(result, temp)) {
      result.push(temp);
    }
    if (!anags[i + 1]) {
      result.push([i + 1]);
    }
  }
  return result;
}

var a = ["cat", "dog", "god", "tca"];
var a = ["caat", "taac", "dog", "god", "acta"];
// var a = [
//   "aababbaaaabaabbabaaaaabbbaaaabbaabbabbaaaaababaaabbaaabaaaabbbaaabbabaaababaa",
//   "bbbbbbaaaabaababbbaaabbabaaabaabbbbaabababaaababababbaaabbaabaabbabbaaaabaaba",
//   "abaaababbababbababababaabaababbababaabaabaaabbabbaabbaaabbbabbbbbbaabbbbbbabb",
//   "aabbabbbbababbaaabbbaaaaaaaabaabbabbabbbbaabaaaaabaaabaabbaaabbbbaaababaaabbb",
//   "ababaaabaabbbabaaaababbaababaabaabaaabbabbaaabbbbbbabbbbaababbbbaaaaaabababaa",
//   "babbbabbabaaabaaaabbbabbabbbaaaaabbbbabaaaaababaababbbabaaaaabbbbbbbbaabbbabb",
//   "bbaabaabbbbbbaabaabbabbbbabababaaabaabbbbbaaaabbbaaabbbbbaaaabbaaaabababbaaaa",
//   "ababbaaaabababaababababbabbaaaabbbbababbbbabaaabbabbabbabbbbabaababbbabbbbbab",
//   "aaaaabbaaabbbbaabaabbbaabaaabbbbaaaaaabaaaaaabaabbbaababaabaaaaabaabaaabbbabb",
//   "abbaaababbbbbaabbaaaabbaaaabbbbbaabaabaaaabbbabbbbabababaaabbabbabbbabbababbb",
//   "bbbbabbbbaabbbbababbbaaaabaaababbabbababbababbabaaabbbbaabababaaaaaabbbbaabab",
//   "babaabbaaabbaabbaabaabaaaaabbabbabbbbbbaaaaaabbbbbabaaaaabbbabaabbbaaaabbbbaa"
// ];

// console.log(anagram(a));
// console.log(a[9]);
// console.log(isAnagram(a[9], a[10]));

/**
 * public class Solution {
    public boolean isAnagram(String s, String t) {
        int[] alphabet = new int[26];
        for (int i = 0; i < s.length(); i++) alphabet[s.charAt(i) - 'a']++;
        for (int i = 0; i < t.length(); i++) alphabet[t.charAt(i) - 'a']--;
        for (int i : alphabet) if (i != 0) return false;
        return true;
    }
}
 */

function anagram2(s, t) {
  if (s.length !== t.length) return false;
  const alphabets = [];
  for (var i = 0; i < 26; i++) {
    alphabets[i] = 0;
  }
  var n = s.length;
  for (var i = 0; i < n; i++) {
    var idx1 = s.charCodeAt(i) - "a".charCodeAt(0);
    var idx2 = t.charCodeAt(i) - "a".charCodeAt(0);
    alphabets[idx1]++;
    alphabets[idx2]--;
  }
  for (var i = 0; i < alphabets.length; i++) {
    if (alphabets[i] !== 0) {
      return false;
    }
  }
  return true;
}

console.log(anagram2("dogg", "good"));
