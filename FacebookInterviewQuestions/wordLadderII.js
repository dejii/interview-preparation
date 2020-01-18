function buildGraph(beginWord, endWord, wordSet) {
  let graph = new Map();

  let queue = [];
  let visited = new Set();
  queue.push(beginWord);
  visited.add(beginWord);

  let found = false;

  while (queue.length > 0) {
    let n = queue.length;

    // still need to visited in the current level but not next level
    // in order to find all possible shortest path between levels
    let toVisit = new Set();
    for (let i = 0; i < n; i++) {
      let currentWord = queue.shift();

      let nextWords = getNeighbors(currentWord, wordSet);

      for (let nextWord of nextWords) {
        if (nextWord === endWord) {
          found = true;
        }

        if (!visited.has(nextWord)) {
          if (!graph.has(currentWord)) {
            graph.set(currentWord, []);
          }
          graph.get(currentWord).push(nextWord);
          if (!toVisit.has(nextWord)) {
            queue.push(nextWord);
            toVisit.add(nextWord);
          }
        }
      }
    }
    for (let t of toVisit) {
      visited.add(t);
    }
    if (found) break;
  }
  return graph;
}

function dfs(currentWord, endWord, temp, result, graph) {
  if (currentWord === endWord) {
    result.push(temp.slice());
    return;
  }

  if (graph.has(currentWord)) {
    for (let nextWord of graph.get(currentWord)) {
      temp.push(nextWord);
      dfs(nextWord, endWord, temp, result, graph);
      temp.pop();
    }
  }
}

function getNeighbors(word, wordSet) {
  let result = [];
  for (let i = 0; i < word.length; i++) {
    let prefix = word.substring(0, i);
    let suffix = word.substring(i + 1);
    for (let ch of "abcdefghijklmnopqrstuvwxyz") {
      let temp = prefix + ch + suffix;
      if (wordSet.has(temp)) {
        result.push(temp);
      }
    }
  }
  return result;
}

var findLadders = function(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  let graph = buildGraph(beginWord, endWord, wordSet);
  let result = [];
  dfs(beginWord, endWord, [beginWord], result, graph);
  return result;
};

console.log(
  findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);

/**
 * Graph
 * 
 * Map {
  'hit' => [ 'hot' ],
  'hot' => [ 'dot', 'lot' ],
  'dot' => [ 'dog' ],
  'lot' => [ 'log' ],
  'dog' => [ 'cog' ] }
 */
