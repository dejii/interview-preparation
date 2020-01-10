/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function inOrder(root, nums, k) {
  if (root === null) {
    return;
  }
  inOrder(root.left, nums, k);
  if (++nums[0] === k) {
    nums[1] = root.val;
    return;
  }
  inOrder(root.right, nums, k);
}
var kthSmallest = function(root, k) {
  let nums = [0, 0];
  inOrder(root, nums, k);
  return nums[1];
};

/*
If the root value of a subtree == k, 
         keep searching its children.
else, 
         return the root value because it is the minimum of current subtree.
class Solution {
public:
    int findSecondMinimumValue(TreeNode* root) {
        if (!root) return -1;
        int ans = minval(root, root->val);
        return ans;
    }
private:
    int minval(TreeNode* p, int first) {
        if (p == nullptr) return -1;
        if (p->val != first) return p->val;
        int left = minval(p->left, first), right = minval(p->right, first);
        // if all nodes of a subtree = root->val, 
        // there is no second minimum value, return -1
        if (left == -1) return right;
        if (right == -1) return left;
        return min(left, right);
    }
};
*/
