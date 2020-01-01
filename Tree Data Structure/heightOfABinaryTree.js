function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function findHeight(root) {
  if (root === null) {
    return -1;
  }
  return Math.max(findHeight(root.left), findHeight(root.right)) + 1;
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

console.log(findHeight(node));
