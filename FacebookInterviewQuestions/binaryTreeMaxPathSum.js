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
var maxPathSumUtil = function(node, result) {
  if (node === null) {
    return 0; // -Infinity
  }

  let leftSum = maxPathSumUtil(node.left, result);
  let rightSum = maxPathSumUtil(node.right, result);

  let maxSumAtNode = Math.max(Math.max(leftSum, rightSum) + node.val, node.val);

  let maxSumWithNode = Math.max(maxSumAtNode, leftSum + rightSum + node.val);

  result.max = Math.max(result.max, maxSumWithNode);

  return maxSumAtNode;
};
var maxPathSum = function(root) {
  let result = { max: -Infinity };
  maxPathSumUtil(root, result);

  return result.max;
};

/**
 * 
 * For each node there can be four ways that the max path goes through the node:
1. Node only
2. Max path through Left Child + Node
3. Max path through Right Child + Node
4. Max path through Left Child + Node + Max path through Right Child

The idea is to keep trace of four paths and pick up the max one in the end. 
An important thing to note is, root of every subtree need to return maximum path sum
 such that at most one child of root is involved. This is needed for parent function call. 
 In below code, this sum is stored in ‘max_single’ and returned by the recursive function.


 class Solution {
public:
    int maxPathSum(TreeNode* root)
    {
        return helper(root)[0];
    }

    std::array<int, 2> helper(TreeNode *root)
    {
        if(!root){
            return {INT_MIN, 0};
        }

        auto [lmaxin, lmaxroot] = helper(root->left);
        auto [rmaxin, rmaxroot] = helper(root->right);

        const int maxroot = root->val + std::max<int>({lmaxroot, rmaxroot, 0});
        const int maxin = std::max<int>({lmaxin, rmaxin, maxroot, lmaxroot + rmaxroot + root->val});
        return {maxin, maxroot};
    }
};
 */
