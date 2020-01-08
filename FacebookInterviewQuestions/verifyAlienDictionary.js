/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

var compare = function(s1, s2, map) {
  let l1 = s1.length;
  let l2 = s2.length;
  let min = Math.min(l1, l2);
  for (let i = 0; i < min; i++) {
    if (s1[i] !== s2[i]) {
      return map.get(s1[i]) - map.get(s2[i]);
    }
  }
  return l1 === min ? -1 : 1;
};
var isAlienSorted = function(words, order) {
  let map = new Map();
  for (let i = 0; i < order.length; i++) {
    map.set(order[i], i);
  }

  for (let i = 1; i < words.length; i++) {
    if (compare(words[i - 1], words[i], map) > 0) {
      return false;
    }
  }
  return true;
};
