/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
function inorder(node, prev) {
  if (node == null) return prev;
  prev = inorder(node.left, prev);
  prev.right = node;
  node.left = prev;
  // take node of node change
  prev = inorder(node.right, node);
  return prev;
}
var treeToDoublyList = function(root) {
  if (root == null) return null;
  let dummy = new Node(0, null, null);
  let prev = dummy;
  prev = inorder(root, prev);
  // detach dummy
  prev.right = dummy.right;
  dummy.right.left = prev;
  return dummy.right;
};

/**
 * class Solution {
    public Node treeToDoublyList(Node root) {
        if (root == null) {
            return null;
        }
        Node cur = root;
        Node start = root;
        while (start.left != null) {
            start = start.left;
        }
        Node prev = null;
        Stack<Node> stack = new Stack<Node>();
        while (!stack.isEmpty() || cur != null) {
            while (cur != null) {
                stack.push(cur);
                cur = cur.left;
            }
            cur = stack.pop();
            if (prev != null) {
                prev.right = cur;
                cur.left = prev;
            }
            prev = cur;
            cur = cur.right;
        }
        start.left = prev;
        prev.right = start;
        return start;
    }
}
 */
