function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function findMin(root) {
  while (root.left !== null) root = root.left;
  return root;
}

function deleteNode(root, data) {
  if (root === null) {
    return root;
  } else if (data < root.data) {
    root.left = deleteNode(root.left, data);
  } else if (data > root.data) {
    root.right = deleteNode(root.right, data);
  } else {
    // case 1 : no child
    if (root.left === null && root.right === null) {
      root = null;
    }
    // case 2 : One child (right)
    else if (root.left === null) {
      var temp = root;
      root = root.right;
      temp = null;
    } else if (root.right === null) {
      var temp = root;
      root = root.left;
      temp = null;
    }
    // case 3 : two children
    else {
      var temp = findMin(root.right);
      root.data = temp.data;
      root.right = deleteNode(root.right, temp.data);
    }
  }
  return root;
}

function inOrder(root) {
  if (root === null) {
    return;
  } else {
    inOrder(root.left);
    console.log(root.data);
    inOrder(root.right);
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

console.log(inOrder(node));
deleteNode(node, 10);
console.log(inOrder(node));
