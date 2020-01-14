function dfsDown(node, count, steps, result) {
  if (node === null) return;
  if (count === steps) {
    result.push(node.val);
    return;
  }
  dfsDown(node.left, count + 1, steps, result);
  dfsDown(node.right, count + 1, steps, result);
}

function dfsUp(node, count, steps, result, origin) {
  if (node === null) return;
  if (count === steps) {
    result.push(node.val);
    return;
  }
  if (node.left !== origin) {
    dfsDown(node.left, count + 1, steps, result);
  }
  if (node.right !== origin) {
    dfsDown(node.right, count + 1, steps, result);
  }
  dfsUp(node.parent, count + 1, steps, result, node);
}

function find(root, target) {
  let queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let current = queue.shift();
    if (current.val === target) {
      return current;
    }
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }

  return null;
}

function kStepsAway(root, target, steps) {
  let targetNode = find(root, target);
  let count = 0;
  let result = [];
  if (targetNode !== null) {
    dfsDown(targetNode.left, count + 1, steps, result);
    dfsDown(targetNode.right, count + 1, steps, result);
    dfsUp(targetNode.parent, count + 1, steps, result, targetNode);
  }
  return result;
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

let node = new Node(1);
node.left = new Node(2);
node.left.parent = node;
node.right = new Node(3);
node.right.parent = node;

node.left.left = new Node(5);
node.left.left.parent = node.left;
node.left.right = new Node(4);
node.left.right.parent = node.left;

node.left.right.left = new Node(6);
node.left.right.left.parent = node.left.right;
node.left.right.right = new Node(7);
node.left.right.right.parent = node.left.right;

node.left.right.left.left = new Node(8);
node.left.right.left.left.parent = node.left.right.left;
node.left.right.left.right = new Node(9);
node.left.right.left.right.parent = node.left.right.left;

console.log(kStepsAway(node, 4, 2));
