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
  if (node === null) {
    return null;
  }

  let cloneMap = new Map();
  let queue = [];
  queue.push(node);
  cloneMap.set(node, new Node(node.val));
  while (queue.length > 0) {
    let current = queue.shift();
    // point the current to its neighbours, and create duplicate nodes for them if they dont exist
    for (let neigh of current.neighbors) {
      if (!cloneMap.has(neigh)) {
        cloneMap.set(neigh, new Node(neigh.val));
        queue.push(neigh);
      }

      // set the links
      cloneMap.get(current).neighbors.push(cloneMap.get(neigh));
    }
  }

  // return clone head
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

/*
  Clone Graph - LeetCode: https://leetcode.com/problems/clone-graph/
  This code passes all Leetcode test cases as of Oct. 4 2019


public Node cloneGraph(Node start) {
    // If the start node is null then we cannot do any cloning
    if (start == null) {
      return null;
    }
  
    /*
      vertexMap: Map the original node reference to its clone
      queue: Our queue for Breadth First Search
    
    Map<Node, Node> vertexMap = new HashMap<>();
    Queue<Node> queue = new LinkedList<>();
  
    // Add the start node to the queue. Give the start node a clone in the vertexMap
    queue.add(start);
    vertexMap.put(start, createNode(start.val));
  
    /*
      The breadth first search continues until we have processed all vertices
      in the original graph. We know this is done when the queue is empty
    
    while (!queue.isEmpty()) {
      // We grab a node. We will express all of the edges coming off of this node.
      Node currVertex = queue.remove();
  
      // Iterate over all neighbors.
      for (Node neighbor: currVertex.neighbors) {
        // Has this neighbor been given a clone?
        if (!vertexMap.containsKey(neighbor)) {
          /*
            No? Give it a mapping and add the original neighbor to the
            search queue so we can express ITS edges later
          
          vertexMap.put(neighbor, createNode(neighbor.val));
          queue.add(neighbor);
        }
  
        /*
          Draw the edge from currVertex's clone to neighbor's clone.
          Do you see how our hashtable makes this quick access possible?
        
        vertexMap.get(currVertex).neighbors.add(vertexMap.get(neighbor));
      }
    }
  
    // Return the clone of the start. This is the entry point for the cloned graph section.
    return vertexMap.get(start);
  }
  
  // Can't modify Leetcode's constructor so abstracting here
  private Node createNode(int value) {
    Node newNode = new Node(value);
    newNode.neighbors = new ArrayList<>();
  
    return newNode;
  }
  */
/**
 *  private GNode cloneGraph(TreeNode node, GNode parent, TreeNode target) {
        if (node == null) return null;
        GNode gNode = new GNode(node);
        if (node == target) targetGNode = gNode;
        gNode.parent = parent;
        gNode.left = cloneGraph(node.left, gNode, target);
        gNode.right = cloneGraph(node.right, gNode, target);
        return gNode;
    }
 */
