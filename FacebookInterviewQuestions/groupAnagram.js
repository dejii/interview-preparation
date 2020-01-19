/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let map = [];
  for (let i = 0; i < 26; i++) {
    map.push(0);
  }
  for (let i = 0; i < s.length; i++) {
    let ch1 = s.charCodeAt(i) - "a".charCodeAt(0);
    let ch2 = t.charCodeAt(i) - "a".charCodeAt(0);

    map[ch1]++;
    map[ch2]--;
  }

  for (let i = 0; i < 26; i++) {
    if (map[i] !== 0) {
      return false;
    }
  }
  return true;
};
// var groupAnagrams2 = function(strs) {
//   let result = [];
//   if (strs.length === 0) {
//     return result;
//   }
//   let seen = new Set();

//   for (let i = 0; i < strs.length; i++) {
//     if (!seen.has(strs[i])) {
//       let arr = [];
//       arr.push(strs[i]);
//       seen.add(strs[i]);
//       for (let j = i + 1; j < strs.length; j++) {
//         if (!seen.has(strs[j])) {
//           if (isAnagram(strs[i], strs[j])) {
//             seen.add(strs[j]);
//             arr.push(strs[j]);
//           }
//         }
//       }
//       result.push(arr);
//     }
//   }
//   return result;
// };

var toCharArrayString = function(str) {
  let arr = [];
  for (let i = 0; i < 26; i++) {
    arr.push(0);
  }
  for (let i = 0; i < str.length; i++) {
    let ch = str.charCodeAt(i) - "a".charCodeAt(0);
    arr[ch]++;
  }

  return arr.toString();
};

var groupAnagrams = function(strs) {
  let map = new Map();
  for (let word of strs) {
    let key = toCharArrayString(word);
    if (map.has(key)) {
      map.get(key).push(word);
    } else {
      map.set(key, [word]);
    }
  }

  let ans = [];
  for (let [key, val] of map) {
    ans.push(val);
  }

  return ans;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
