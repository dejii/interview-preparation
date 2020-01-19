/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var mapNodeToParent = function(map, node, parent) {
  if (node === null) {
    return;
  }

  map.set(node, parent);

  mapNodeToParent(map, node.left, node);
  mapNodeToParent(map, node.right, node);
};

var distanceK = function(root, target, K) {
  let map = new Map();
  mapNodeToParent(map, root, null);
  let seen = new Set();
  seen.add(target);
  let queue = [];
  queue.push(target);
  let currentLevel = 0;
  while (queue.length !== 0) {
    if (currentLevel === K) {
      return queue.map(n => n.val);
    }
    let n = queue.length;

    for (let i = 0; i < n; i++) {
      let node = queue.shift();

      if (node.left !== null && !seen.has(node.left)) {
        seen.add(node.left);
        queue.push(node.left);
      }

      if (node.right !== null && !seen.has(node.right)) {
        seen.add(node.right);
        queue.push(node.right);
      }

      let parentNode = map.get(node);
      if (parentNode !== null && !seen.has(parentNode)) {
        seen.add(parentNode);
        queue.push(parentNode);
      }
    }

    currentLevel++;
  }

  return [];
};
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
let node = new Node(3);
node.left = new Node(5);
node.right = new Node(1);
node.left.left = new Node(6);
node.left.right = new Node(2);
node.left.right.left = new Node(7);
node.left.right.right = new Node(4);
node.right.left = new Node(0);
node.right.right = new Node(8);

console.log(distanceK(node, node.left, 2));
