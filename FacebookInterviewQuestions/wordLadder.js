/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function getNeighbors(word, wordSet) {
  let result = [];
  for (let i = 0; i < word.length; i++) {
    let prefix = word.substring(0, i);
    let suffix = word.substring(i + 1);
    for (let ch of "abcdefghijklmnopqrstuvwxyz") {
      let temp = prefix + ch + suffix;
      if (wordSet.has(temp)) {
        result.push(temp);
        wordSet.delete(temp);
      }
    }
  }
  return result;
}
var ladderLength = function(beginWord, endWord, wordList) {
  // all words have same length
  // all words have lower case
  // no duplicates
  // begin and end word not the same
  let wordSet = new Set(wordList);
  // wordSet.add(endWord);
  let queue = [];
  queue.push(beginWord);
  wordSet.delete(beginWord);
  let level = 0;

  while (queue.length > 0) {
    let n = queue.length;

    for (let i = 0; i < n; i++) {
      let word = queue.shift();
      if (word === endWord) return level + 1; // level plus 1 becasue of the dist between them

      for (let neigh of getNeighbors(word, wordSet)) {
        queue.push(neigh);
      }
    }
    level++;
  }
  return 0;
};
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "cog"]));
