class Queue {
  constructor() {
    this.items = [];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  enqueue(data) {
    return this.items.push(data);
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Empty Queue");
    }
    return this.items.shift();
  }
  size() {
    return this.items.length;
  }
}

function levelOrder(root) {
  let result = [];
  if (root === null) {
    return result;
  }
  let queue = new Queue();
  queue.enqueue(root);
  while (!queue.isEmpty()) {
    let n = queue.size();
    let arr = [];
    for (let i = 0; i < n; i++) {
      let node = queue.dequeue();
      if (node.left !== null) {
        queue.enqueue(node.left);
      }
      if (node.right !== null) {
        queue.enqueue(node.right);
      }
      arr.push(node.val);
    }
    result.push(arr);
  }
  return result;
}

class Node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}
let node = new Node(9);
node.left = new Node(15);
node.left.left = new Node(1);
node.right = new Node(10);
console.log(levelOrder(node));
