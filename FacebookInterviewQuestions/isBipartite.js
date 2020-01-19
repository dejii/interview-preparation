/**
 * @param {number[][]} graph
 * @return {boolean}
 */
function dfs(graph, colors, color, node) {
  // graph.
  // colors - array of colored vertices
  // color -  the color the node is meant to be
  // node
  if (colors[node] !== 0) {
    // color should be the expected color, which is the inverse of the vertex that has this node
    return colors[node] === color;
  }
  // set the color
  colors[node] = color;
  // color its neigbours
  for (let n of graph[node]) {
    if (!dfs(graph, colors, -color, n)) {
      return false;
    }
  }
  // all point to different sets
  return true;
}
var isBipartite = function(graph) {
  let colors = new Array(graph.length).fill(0);
  // bipartite if we can seperate the vertices into two distinct set such that they
  // point from one set to the other

  for (let i = 0; i < graph.length; i++) {
    // if we've not colored a vertex and an adjacent vertex has the same color,
    // we return false, else the node points to another set
    if (colors[i] === 0 && !dfs(graph, colors, 1, i)) {
      return false;
    }
  }

  return true;
};
