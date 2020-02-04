/**
 * @param {string} beginNum
 * @param {string} endNum
 * @param {string[]} numList
 * @return {number}
 */
function getNeighbors(num) {
  let result = [];

  for (let i = 0; i < 31; i++) {
    let ones = (1 << i) - 1;
    result.push(num ^ ones);
  }
  //   console.log(result);
  result.forEach(r => console.log(r.toString(2)));
  //   return result;
}
var ladderLength = function(endNum) {
  // all words have same length
  // all words have lower case
  // no duplicates
  // begin and end word not the same
  // wordSet.add(endNum);
  let queue = [];
  queue.push(0);
  let level = 0;

  while (queue.length > 0) {
    let n = queue.length;

    for (let i = 0; i < n; i++) {
      let num = queue.shift();
      if (num === endNum) return level; // level plus 1 becasue of the dist between them

      for (let neigh of getNeighbors(num)) {
        queue.push(neigh);
      }
    }
    level++;
  }
  return 0;
};
// console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "cog"]));
console.log(getNeighbors(1));
// console.log(ladderLength(11));
