class BstNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function insert(root, data) {
  if (root === null) {
    root = new BstNode(data);
  } else if (data <= root.data) {
    root.left = insert(root.left, data);
  } else {
    root.right = insert(root.right, data);
  }

  return root;
}

function search(root, data) {
  if (root === null) return false;
  else if (root.data === data) return true;
  else if (data <= root.data) return search(root.left, data);
  else return search(root.right, data);
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

var root = null;
root = insert(root, 15);
root = insert(root, 10);
root = insert(root, 20);
root = insert(root, 25);
root = insert(root, 8);
root = insert(root, 12);

console.log(inOrder(root));

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question(`Enter a number? \n`, num => {
//   num = parseInt(num, 10);
//   if (search(root, num)) {
//     console.log("Found!");
//   } else {
//     console.log("Not Found!");
//   }
//   readline.close();
// });
