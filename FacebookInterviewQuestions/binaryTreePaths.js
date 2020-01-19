/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
function dfs(node, path, paths) {
  path += node.val;
  // if leaf node
  if (node.left === null && node.right === null) {
    paths.push(path);
  }
  if (node.left) {
    dfs(node.left, path + "->", paths);
  }
  if (node.right) {
    dfs(node.right, path + "->", paths);
  }
}

var binaryTreePaths = function(root) {
  let paths = [];
  if (root === null) {
    return paths;
  }
  dfs(root, "", paths);
  return paths;
};
