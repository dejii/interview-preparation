/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var height = function(root) {
  if (root === null) {
    return 0;
  }

  return Math.max(height(root.left), height(root.right)) + 1;
};
var diameterOfBinaryTree = function(root) {
  if (root === null) {
    return 0;
  }

  let leftHeight = height(root.left);
  let rightHeight = height(root.right);

  let leftDiameter = diameterOfBinaryTree(root.left);
  let rightDiameter = diameterOfBinaryTree(root.right);

  return Math.max(
    leftHeight + rightHeight,
    Math.max(leftDiameter, rightDiameter)
  );
};

/**
 * 
 * var diameterOfBinaryTree = function(root) {
    var diameter = 0;
    
    depth(root);
    
    return diameter;
    
    function depth(node) {
        if(!node) return 0;
        let left = depth(node.left);
        let right = depth(node.right);
        diameter = Math.max(diameter, left + right);
        return Math.max(left,right) + 1;
    };
    
};


 * public class Solution {
    int max = 0;
    
    public int diameterOfBinaryTree(TreeNode root) {
        maxDepth(root);
        return max;
    }
    
    private int maxDepth(TreeNode root) {
        if (root == null) return 0;
        
        int left = maxDepth(root.left);
        int right = maxDepth(root.right);
        
        max = Math.max(max, left + right);
        
        return Math.max(left, right) + 1;
    }
}
 */
