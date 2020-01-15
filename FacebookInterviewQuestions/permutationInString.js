/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isPermutation = function(s1, permFreq) {
  let freq = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    let idx = s1.charCodeAt(i) - "a".charCodeAt(0);
    freq[idx]++;
  }

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] !== permFreq[i]) {
      return false;
    }
  }
  return true;
};
var checkInclusion = function(s1, s2) {
  let n = s1.length;
  let m = s2.length;
  if (m < n) return false;
  let permFreq = new Array(26).fill(0);
  console.log(permFreq);

  for (let i = 0; i < s1.length; i++) {
    let idx = s1.charCodeAt(i) - "a".charCodeAt(0);
    permFreq[idx]++;
  }

  for (let i = 0; i < m - n + 1; i++) {
    if (isPermutation(s2.substring(i, i + n), permFreq)) {
      return true;
    }
  }
  return false;
};
console.log(checkInclusion("ab", "eidbaooo"));
