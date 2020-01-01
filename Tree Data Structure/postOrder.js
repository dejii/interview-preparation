function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function postOrder(root) {
  if (root === null) {
    return;
  }
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.data);
}
function postOrderIterative(A) {
  var s1 = [];
  var s2 = [];
  if (A === null) {
    return [];
  }
  s1.push(A);
  while (s1.length > 0) {
    var node = s1.pop();
    s2.push(node.data);
    if (node.left !== null) {
      s1.push(node.left);
    }
    if (node.right !== null) {
      s1.push(node.right);
    }
  }
  return s2.reverse();
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

console.log(postOrder(node));
console.log(postOrderIterative(node));
