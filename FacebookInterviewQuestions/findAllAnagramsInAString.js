/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var isAnagram = function(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  let arr = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    let idx1 = s1.charCodeAt(i) - "a".charCodeAt(0);
    let idx2 = s2.charCodeAt(i) - "a".charCodeAt(0);
    arr[idx1]++;
    arr[idx2]--;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return false;
    }
  }
  return true;
};
var findAnagrams = function(s, p) {
  let n = s.length;
  let m = p.length;
  let result = [];
  if (n < m) {
    return result;
  }
  for (let i = 0; i < n - m + 1; i++) {
    if (isAnagram(s.substring(i, i + m), p)) {
      result.push(i);
    }
  }
  return result;
};

console.log(findAnagrams("cbaebabacd", "abc"));

var findAnagrams = function(s, p) {
  let map = new Map(),
    cnt,
    beg = 0,
    end = 0,
    res = [];
  p.split("").forEach(val => {
    if (!map.has(val)) map.set(val, 1);
    else map.set(val, map.get(val) + 1);
  });
  cnt = map.size;
  while (end < s.length) {
    let eChr = s[end];
    if (map.has(eChr)) {
      map.set(eChr, map.get(eChr) - 1);
      if (map.get(eChr) == 0) cnt--;
    }
    end++;
    while (cnt == 0) {
      let bChr = s[beg];
      if (map.has(bChr)) {
        map.set(bChr, map.get(bChr) + 1);
        if (map.get(bChr) > 0) cnt++;
      }
      if (end - beg == p.length) res.push(beg);
      beg++;
    }
  }
  return res;
};
