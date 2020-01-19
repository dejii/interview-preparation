var flatten = function(root) {
  let stack = [];
  stack.push(root);
  while (stack.length > 0) {
    let current = stack.pop();
    if (current === null) continue;
    if (current.right !== null) {
      stack.push(current.right);
    }
    if (current.left !== null) {
      stack.push(current.left);
    }

    if (stack.length > 0) {
      let idx = stack.length - 1;
      current.right = stack[idx];
    }

    current.left = null;
  }
};
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let node = new TreeNode(1);
node.left = new TreeNode(2);
node.left.left = new TreeNode(3);
node.left.right = new TreeNode(4);
node.right = new TreeNode(5);
node.right.right = new TreeNode(6);

function print(node) {
  while (node) {
    console.log(node.val);
    node = node.right;
  }
}
flatten(node);
print(node);

/**
 * public void flatten(TreeNode root) {
    flatten(root,null);
}
private TreeNode flatten(TreeNode root, TreeNode pre) {
    if(root==null) return pre;
    pre=flatten(root.right,pre);    
    pre=flatten(root.left,pre);
    root.right=pre;
    root.left=null;
    pre=root;
    return pre;
}

private TreeNode prev = null;

public void flatten(TreeNode root) {
    if (root == null)
        return;
    flatten(root.right);
    flatten(root.left);
    root.right = prev;
    root.left = null;
    prev = root;
}
 */
