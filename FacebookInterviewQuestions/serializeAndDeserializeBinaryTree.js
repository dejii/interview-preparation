/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serializeUtil = function(root) {
  if (root === null) {
    return "null";
  }
  let letfSerialization = serializeUtil(root.left);
  let rightSerialization = serializeUtil(root.right);

  return root.val + "," + letfSerialization + "," + rightSerialization;
};
var serialize = function(root) {
  return serializeUtil(root);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserializeUtil = function(queue) {
  let temp = queue.shift();
  if (temp === "null") return null;
  let newNode = new Node(temp);
  newNode.left = deserializeUtil(queue);
  newNode.right = deserializeUtil(queue);
  return newNode;
};
var deserialize = function(data) {
  let queue = data.split(",");
  return deserializeUtil(queue);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/**
  *  1
   / \
  2   3
     / \
    4   5

  */
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
let node = new Node(1);
node.left = new Node(2);
node.right = new Node(3);
node.right.left = new Node(4);
node.right.right = new Node(5);

// console.log(serialize(node));
console.log(deserialize("1,2,null,null,3,4,null,null,5,null,null"));

/*
public String serialize(TreeNode root) {
    Queue<TreeNode> q = new LinkedList<>();
    StringBuilder sb = new StringBuilder();
    q.add(root);
    while (!q.isEmpty()) {
        TreeNode node = q.remove();
        if (node == null) {
            sb.append("null");
        } else {
            sb.append(node.val);
            q.add(node.left);
            q.add(node.right);
        }
        sb.append(' ');
    }
    return sb.toString();
}
public TreeNode deserialize(String data) {
    StringTokenizer st = new StringTokenizer(data);
    Queue<TreeNode> q = new LinkedList<>();
    String token = st.nextToken();
    TreeNode tree = token.equals("null") ? null : new TreeNode(Integer.parseInt(token));
    q.add(tree);
    while (st.hasMoreTokens()) {
        TreeNode root = q.remove();
        if (root == null) continue;
        token = st.nextToken();
        root.left = token.equals("null") ? null : new TreeNode(Integer.parseInt(token));
        q.add(root.left);
        token = st.nextToken();
        root.right = token.equals("null") ? null : new TreeNode(Integer.parseInt(token));
        q.add(root.right);
    }
    return tree;
}
*/
