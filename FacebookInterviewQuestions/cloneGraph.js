/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = [];
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  let cloneMap = new Map();
  let queue = [];
  queue.push(node);
  cloneMap.set(node, new Node(node.val));
  while (queue.length > 0) {
    let current = queue.shift();

    for (let neigh of current.neighbors) {
      if (!cloneMap.has(neigh)) {
        cloneMap.set(neigh, new Node(neigh.val));
        queue.push(neigh);
      }

      cloneMap.get(current).neighbors.push(cloneMap.get(neigh));
    }
  }
  return cloneMap.get(node);
};

class Node {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}
let node = new Node(1);

/**
 * class Solution {
    private HashMap <Node, Node> visited = new HashMap <> ();
    public Node cloneGraph(Node node) {
        if (node == null) {
            return node;
        }

        // If the node was already visited before.
        // Return the clone from the visited dictionary.
        if (visited.containsKey(node)) {
            return visited.get(node);
        }

        // Create a clone for the given node.
        // Note that we don't have cloned neighbors as of now, hence [].
        Node cloneNode = new Node(node.val, new ArrayList());
        // The key is original node and value being the clone node.
        visited.put(node, cloneNode);

        // Iterate through the neighbors to generate their clones
        // and prepare a list of cloned neighbors to be added to the cloned node.
        for (Node neighbor: node.neighbors) {
            cloneNode.neighbors.add(cloneGraph(neighbor));
        }
        return cloneNode;
    }
}
 */
