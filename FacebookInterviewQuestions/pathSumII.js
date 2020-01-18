/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */

function dfs(node, path, result, current, target) {
  if (node === null) return;

  current += node.val;
  path.push(node.val);
  if (node.left === null && node.right === null && current === target) {
    result.push(path.slice());
    path.pop();
    return;
  }

  dfs(node.left, path, result, current, target);
  dfs(node.right, path, result, current, target);
  path.pop();
}
var pathSum = function(root, sum) {
  let result = [];
  dfs(root, [], result, 0, sum);
  return result;
};

/**
 * UNIVALUE PATH
 * 
 * int len = 0; // global variable
public int longestUnivaluePath(TreeNode root) {
    if (root == null) return 0;
    len = 0;
    getLen(root, root.val);
    return len;
}

private int getLen(TreeNode node, int val) {
    if (node == null) return 0;
    int left = getLen(node.left, node.val);
    int right = getLen(node.right, node.val);
    len = Math.max(len, left + right);
    if (val == node.val)  return Math.max(left, right) + 1;
    return 0;
}
 */
