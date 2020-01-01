/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var balanceStatusWithHeight = function(isBalanced, height) {
  this.isBalanced = isBalanced;
  this.height = height;
};

var checkBalanced = function(root) {
  if (root === null) {
    return new balanceStatusWithHeight(true, -1);
  }

  /*
    Go deep into the left subtree and get a result back
  */
  var leftResult = checkBalanced(root.left);
  if (!leftResult.isBalanced) {
    return leftResult; // Left subtree is not balanced. Bubble up failure.
  }

  /*
    Go deep into the right subtree and get a result back
  */
  var rightResult = checkBalanced(root.right);
  if (!rightResult.isBalanced) {
    return rightResult; // Right subtree is not balanced. Bubble up failure.
  }

  /*
    Our left and right subtrees are back and we have our results. Let us analyze
    them here and bubble up our own answer.
    1.) Check if the subtreesAreBalanced
    2.) Notate the height that this node sits at (which is 1 plus the height of the
    larger of the left and right subtrees coming off of this node)
  */
  var subtreesAreBalanced =
    Math.abs(leftResult.height - rightResult.height) <= 1;
  var height = Math.max(leftResult.height, rightResult.height) + 1;

  return new balanceStatusWithHeight(subtreesAreBalanced, height);
};

var isBalanced = function(root) {
  return checkBalanced(root).isBalanced;
};
