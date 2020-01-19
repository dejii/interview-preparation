/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class Queue {
  constructor(data) {
    this.items = [...data];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  push() {
    return this.items.push();
  }
  peek() {
    if (this.isEmpty()) throw new Error("Empty Queue");
    return this.items[0];
  }
  dequeue() {
    if (this.isEmpty()) throw new Error("Empty Queue");
    return this.items.shift();
  }
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serializeUtil(node, list) {
  if (node === null) return;
  list.push(node.val);
  // list.push(',');

  serializeUtil(node.left, list);
  serializeUtil(node.right, list);
}
var serialize = function(root) {
  if (root == null) return;
  let list = [];
  serializeUtil(root, list);
  return list.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserializeUtil(queue, lower, upper) {
  if (queue.isEmpty()) return null;
  let val = parseInt(queue.peek(), 10);
  if (val < lower || val > upper) return null;
  queue.dequeue();
  let node = new TreeNode(val);
  node.left = deserializeUtil(queue, lower, val);
  node.right = deserializeUtil(queue, val, upper);
  return node;
}
var deserialize = function(data) {
  if (!data) return null;
  // console.log(data)
  let queue = new Queue(data.split(","));
  // if (queue.isEmpty()) return null;
  return deserializeUtil(queue, -Infinity, Infinity);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
