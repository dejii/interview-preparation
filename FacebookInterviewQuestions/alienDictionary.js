function alienOrder(words) {
  if (words.length === 1) {
    return words[0];
  }
  let graph = buildGraph(words);
  //   console.log(graph);
  return topologicalSort(graph);
}

function buildGraph(words) {
  let graph = new Map();

  // build adjacency list of characters in the alien language first
  // pointing to empty sets
  for (let word of words) {
    for (let c of word) {
      if (!graph.has(c)) {
        graph.set(c, new Set());
      }
    }
  }

  // make characters point to respective characters
  for (let i = 1; i < words.length; i++) {
    let first = words[i - 1];
    let second = words[i];
    let min = Math.min(first.length, second.length);

    for (let j = 0; j < min; j++) {
      if (first[j] !== second[j]) {
        // if not equal, first ch should point to second ch
        // because lexicographic order
        let ch1 = first[j];
        let ch2 = second[j];

        // if ch1 does not have ch2 in its adjacency list, we add it
        if (!graph.get(ch1).has(ch2)) {
          graph.get(ch1).add(ch2);
        }

        // we break once we have a different character
        break;
      }
    }
  }
  return graph;
}

function topologicalSort(graph) {
  let visiting = new Map();
  let visited = new Map();
  let stack = [];

  // loop through the vertices
  for (let vertex of graph.keys()) {
    // console.log(graph.get(vertex));
    if (!dfs(graph, visiting, visited, stack, vertex)) {
      return "";
    }
  }

  return stack.reverse().join("");
}

function dfs(graph, visiting, visited, stack, node) {
  // if we're currently visiting the node, then we have a cycle
  if (visiting.get(node)) return false;
  // if we've visited the node, return true, no need to revisit
  if (visited.get(node)) return true;

  // set node to visiting and set it as visited
  visiting.set(node, true);
  visited.set(node, true);
  // do a dfs on its adjacent list
  for (let neighbor of graph.get(node)) {
    if (!dfs(graph, visiting, visited, stack, neighbor)) {
      return false;
    }
  }
  // here we've finished visiting all adjacent list, we can set visiting back to false
  visiting.set(node, false);
  stack.push(node);
  return true;
}

let words = ["wrt", "wrf", "er", "ett", "rftt"];
// let words = ["z", "x", "z"];

console.log(alienOrder(words));

// https://www.youtube.com/watch?v=z-mB8ZL6mjo
// BFS soln
