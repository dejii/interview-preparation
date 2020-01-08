function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function find(root, value) {
  while (root !== null && root.data !== value) {
    if (value < root.data) {
      root = root.left;
    } else {
      root = root.right;
    }
  }

  return root !== null && root.data === value ? root : null;
}

function findMin(root) {
  while (root.left !== null) {
    root = root.left;
  }
  return root;
}

function inOrderSuccessor(root, value) {
  var current = find(root, value);
  if (current.right !== null) {
    return findMin(root);
  } else {
    var successor = null;
    var ancestor = root;
    while (ancestor !== current) {
      if (value < ancestor.data) {
        successor = ancestor;
        ancestor = ancestor.left;
      } else {
        ancestor = ancestor.right;
      }
    }
    return successor;
  }
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

console.log(inOrderSuccessor(node, 6));

/*
            15
          /    \
        10      20
        / \    /   \
      8    12   17   25
    /  
    6     
*/
