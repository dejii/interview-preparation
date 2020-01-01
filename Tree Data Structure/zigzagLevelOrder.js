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
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(data) {
    this.items.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Empty Queue!");
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      throw new Error("Empty Queue!");
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

var findHeight = function(root) {
  if (root === null) {
    return -1;
  }
  return Math.max(findHeight(root.left), findHeight(root.right)) + 1;
};
var zigzagLevelOrder = function(root) {
  const queue = new Queue();
  const result = [];
  if (root === null) {
    return result;
  }
  const n = findHeight(root);
  for (let i = 0; i <= n; i++) {
    result.push([]);
  }
  root.level = 0;
  queue.enqueue(root);
  while (!queue.isEmpty()) {
    const node = queue.front();
    if (node.level & 1) {
      result[node.level].unshift(node.val);
    } else {
      result[node.level].push(node.val);
    }

    if (node.left !== null) {
      node.left.level = node.level + 1;
      queue.enqueue(node.left);
    }
    if (node.right !== null) {
      node.right.level = node.level + 1;
      queue.enqueue(node.right);
    }

    queue.dequeue();
  }

  return result;
};

const node = new Node(3);
node.left = new Node(9);
node.right = new Node(20);
node.right.left = new Node(15);
node.right.right = new Node(7);

console.log(zigzagLevelOrder(node));
