function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function preOrder(root) {
  if (root === null) {
    return;
  }
  console.log(root.data);
  preOrder(root.left);
  preOrder(root.right);
}
function preOrderIterative(A) {
  var result = [];
  if (A === null) {
    return result;
  }
  var stack = [];
  stack.push(A);
  while (stack.length > 0) {
    var node = stack.pop();
    result.push(node.data);
    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
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

console.log(preOrder(node));
console.log(preOrderIterative(node));
