/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
function isSame(s, t) {
  if (s === null && t === null) {
    return true;
  }
  if (s === null || t === null) {
    return false;
  }
  if (s.val !== t.val) {
    return false;
  }
  return isSame(s.left, t.left) && isSame(s.right, t.right);
}
var isSubtree = function(s, t) {
  let queue = [];
  queue.push(s);
  while (queue.length > 0) {
    let node = queue.shift();
    if (isSame(node, t)) {
      return true;
    }
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return false;
};
// O(mxn)

/*
public class Solution {
    public boolean isSubtree(TreeNode s, TreeNode t) {
        if (s == null) return false;
        if (isSame(s, t)) return true;
        return isSubtree(s.left, t) || isSubtree(s.right, t);
    }
    
    private boolean isSame(TreeNode s, TreeNode t) {
        if (s == null && t == null) return true;
        if (s == null || t == null) return false;
        
        if (s.val != t.val) return false;
        
        return isSame(s.left, t.left) && isSame(s.right, t.right);
    }
}
*/
