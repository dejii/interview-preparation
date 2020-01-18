/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  let result = [];
  if (root === null) return result;
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let n = queue.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      let current = queue.shift();
      sum += current.val;
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    result.push(sum / n);
  }
  return result;
};
