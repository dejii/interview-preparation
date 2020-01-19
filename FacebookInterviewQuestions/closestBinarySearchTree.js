/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
  let closest = root.val;
  while (root !== null) {
    // get as close to target as possible
    let k = Math.abs(target - root.val);
    if (k < Math.abs(target - closest)) {
      closest = root.val;
    }
    // binary search based on the target
    root = root.val > target ? root.left : root.right;
  }
  return closest;
};
