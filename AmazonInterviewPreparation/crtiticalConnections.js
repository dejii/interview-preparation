/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
function dfs(graph, visited, u) {
  visited.add(u);
  for (let v of graph.get(u)) {
    if (!visited.has(v)) {
      dfs(graph, visited, v);
    }
  }
}

// BRUTE FORCE
var criticalConnections = function(n, connections) {
  let graph = new Map();

  for (let connection of connections) {
    let [u, v] = connection;
    if (!graph.has(u)) graph.set(u, new Set());
    if (!graph.has(v)) graph.set(v, new Set());
    graph.get(u).add(v);
    graph.get(v).add(u);
  }
  let result = [];

  for (let i = 0; i < n; i++) {
    let [u, v] = connections[i];

    graph.get(u).delete(v);
    graph.get(v).delete(u);
    let visited = new Set();
    // start traversing from 0 or any idx, since dfs should touch every node regardless
    dfs(graph, visited, i);
    if (visited.size !== n) {
      result.push([u, v]);
    }
    graph.get(u).add(v);
    graph.get(v).add(u);
  }
  return result;
};
