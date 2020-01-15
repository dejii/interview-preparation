/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  let graph = new Map();
  for (let word of words) {
    for (let c of word) {
      if (!graph.has(c)) {
        graph.set(c, new Set());
      }
    }
  }
  let inDegrees = new Array(26).fill(0);
  for (let i = 1; i < words.length; i++) {
    let first = words[i - 1];
    let second = words[i];
    let min = Math.min(first.length, second.length);
    for (let j = 0; j < min; j++) {
      let ch1 = first.charAt(j);
      let ch2 = second.charAt(j);

      if (ch1 !== ch2) {
        if (!graph.get(ch1).has(ch2)) {
          graph.get(ch1).add(ch2);
          let idx = ch2.charCodeAt(0) - "a".charCodeAt(0);
          inDegrees[idx]++;
        }

        break;
      }
    }
  }

  let queue = [];
  for (let ch of graph.keys()) {
    let idx = ch.charCodeAt(0) - "a".charCodeAt(0);
    if (inDegrees[idx] === 0) {
      queue.push(ch);
    }
  }
  console.log(inDegrees);
  let result = [];
  while (queue.length > 0) {
    let current = queue.shift();
    result.push(current);
    // console.log(graph.get(current));
    for (let ch of graph.get(current)) {
      let idx = ch.charCodeAt(0) - "a".charCodeAt(0);
      inDegrees[idx]--;
      if (inDegrees[idx] === 0) {
        queue.push(ch);
      }
    }
  }
  console.log(result);

  return result.length === graph.size ? result.join("") : "";
};

console.log(alienOrder(["za", "zb", "ca", "cb"]));
