/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let store = {};
  for (let i = 0; i < s.length; i++) {
    if (store.hasOwnProperty(s[i])) {
      store[s[i]]++;
    } else {
      store[s[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (store[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};
