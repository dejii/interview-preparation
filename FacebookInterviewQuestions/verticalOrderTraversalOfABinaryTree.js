/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  let map = new Map();
  let queue = [];
  root.dist = 0;
  queue.push(root);
  let min = 0;
  let max = 0;
  while (queue.length > 0) {
    let n = queue.length;
    let temp = new Map();
    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      if (!temp.has(node.dist)) {
        temp.set(node.dist, []);
      }
      let arr = temp.get(node.dist);
      arr.push(node.val);
      temp.set(node.dist, arr);
      if (node.left !== null) {
        node.left.dist = node.dist - 1;
        min = Math.min(node.left.dist, min);
        queue.push(node.left);
      }
      if (node.right !== null) {
        node.right.dist = node.dist + 1;
        max = Math.max(node.right.dist, max);
        queue.push(node.right);
      }
    }
    for (let key of temp.keys()) {
      if (!map.has(key)) {
        map.set(key, []);
      }

      let t = map.get(key);
      let val = temp.get(key);
      val.sort((a, b) => a - b);
      t.push(...val);

      map.set(key, t);
    }
  }

  let result = [];
  //   console.log(min, max);

  for (let i = min; i <= max; i++) {
    let temp = map.get(i);
    result.push(temp);
  }
  return result;
};
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let node = new Node(3);
node.left = new Node(9);
node.right = new Node(20);
node.right.left = new Node(15);
node.right.right = new Node(7);
console.log(verticalTraversal(node));
