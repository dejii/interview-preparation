/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
function hasCycle(graph, visited, node, parent) {
  visited[node] = true;
  let neighbours = graph.get(node);
  for (let i = 0; i < neighbours.length; i++) {
    if (
      (visited[neighbours[i]] && neighbours[i] !== parent) ||
      (!visited[neighbours[i]] && hasCycle(graph, visited, neighbours[i], node))
    ) {
      return true;
    }
  }
  return false;
}
var validTree = function(n, edges) {
  let graph = new Map();
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  // build graph
  for (let i = 0; i < edges.length; i++) {
    let [u, v] = edges[i];
    graph.get(u).push(v);
    graph.get(v).push(u);
  }
  let visited = new Array(n).fill(false);

  // ensure no cycle
  if (hasCycle(graph, visited, 0, -1)) {
    return false;
  }

  // make sure all vertices are connected
  for (let i = 0; i < n; i++) {
    if (!visited[i]) return false;
  }

  return true;
};
