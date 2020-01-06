function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
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

function inOrderIterative(A) {
  var result = [];
  var stack = [];
  var current = A;
  while (true) {
    if (current !== null) {
      stack.push(current);
      current = current.left;
    } else if (stack.length > 0) {
      node = stack.pop();
      result.push(node.data);
      current = node.right;
    } else {
      break;
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

console.log(inOrder(node));
console.log(inOrderIterative(node));

/*
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        Stack<TreeNode> stack = new Stack();
        List<Integer> res = new ArrayList();
        while (root != null || !stack.isEmpty()) {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }
            root = stack.pop();
            res.add(root.val);
            root = root.right;
        }
        return res;
    }
}
*/
