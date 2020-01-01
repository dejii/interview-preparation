function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

// function isSubtreeLesser(root, value) {
//   if (root === null) return true;
//   if (
//     root.data <= value &&
//     isSubtreeLesser(root.left, value) &&
//     isSubtreeLesser(root.right, value)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isSubtreeGreater(root, value) {
//   if (root === null) return true;
//   if (
//     root.data > value &&
//     isSubtreeGreater(root.left, value) &&
//     isSubtreeGreater(root.right, value)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isBinarySearchTree(root) {
//   if (root === null) {
//     return true;
//   }

//   if (
//     isSubtreeLesser(root.left, root.data) &&
//     isSubtreeGreater(root.right, root.data) &&
//     isBinarySearchTree(root.left) &&
//     isBinarySearchTree(root.right)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isBinarySearchTree(root, minValue, maxValue) {
  if (root === null) {
    return true;
  }
  if (
    root.data > minValue &&
    root.data < maxValue &&
    isBinarySearchTree(root.left, minValue, root.data) &&
    isBinarySearchTree(root.right, root.data, maxValue)
  ) {
    return true;
  } else {
    return false;
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

console.log(isBinarySearchTree(node, -Infinity, Infinity));
