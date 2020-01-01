class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(data) {
    this.arr.push(data);
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Empty Queue");
    }
    return this.arr.shift();
  }

  front() {
    if (this.isEmpty()) {
      throw new Error("Empty Queue");
    }
    return this.arr[0];
  }

  print() {
    let str = "";
    for (let i = 0; i < this.arr.length; i++) {
      str += this.arr[i] + " ";
    }
    console.log(str);
  }
}

function levelOrder(root) {
  let result = [];
  if (root === null) {
    return [];
  }
  const queue = new Queue();
  queue.enqueue(root);
  while (!queue.isEmpty()) {
    const node = queue.front();
    result.push(node.data);
    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }

    queue.dequeue();
  }

  return result;
}

var node = new Node(15);
// L
node.left = new Node(10);
node.left.left = new Node(8);
node.left.right = new Node(12);
node.left.left.left = new Node(6);
node.left.right.left = new Node(11);
// R
node.right = new Node(20);
node.right.left = new Node(17);
node.right.right = new Node(25);
node.right.left.left = new Node(16);
node.right.right.right = new Node(27);

console.log(levelOrder(node));
